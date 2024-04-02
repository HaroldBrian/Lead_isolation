import React, { useState } from 'react'
import { Answer, Question } from './Question'
import { AIRTABLE_TOKEN } from '../config';
// import { Form } from './Form';
import arrow from "../icons/arrow.svg"

type QuizProps = {
    steps: StepsProps[];
}

export type StepsProps = {
    question: string;
    type: "input" | "select" | "multiselect" | "multiinput";
    responseType?: "text" | "number" | "email" | "tel";
    answers: Answer[];

}

export type ResponseQuiz = {
    question: string;
    response: string | string[];
    completed?: boolean
}
export const Quiz: React.FC<QuizProps> = ({ steps }) => {

    const totalStepCount = steps.length - 1;
    const [currentStep, setCurrentStep] = useState(-1);
    const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(true);

    const [data, setData] = useState<ResponseQuiz[]>([])
    const [isFinished, setIsFinished] = useState(false)
    const [btnNextIsDisabled, setBtnNextIsDisabled] = useState(false)
    const handleSelect = (response: ResponseQuiz) => {

        console.log(response);

        if (submitButtonIsDisabled) {
            if (totalStepCount == currentStep) {
                setSubmitButtonIsDisabled(false)
            } else {
                if (response.completed) {
                    setCurrentStep((current) => current + 1)
                    setBtnNextIsDisabled(true)
                } else {
                    setBtnNextIsDisabled(false)
                }
            }
        }

        const responseIndex = data.findIndex(item => item.question === response.question);
        if (responseIndex != -1) {
            data[responseIndex].response = response.response
            setData(() => data)
        } else {
            setData([...data, response])
        }

        console.log(data);


    }

    const handleFinish = async () => {

        const apiKey = AIRTABLE_TOKEN;
        const tableName = 'Leads Data';
        const urlQuiz = `https://api.airtable.com/v0/appCLTH0QC4bNZBVP/${tableName}`;

        const infos = [{
            "fields": {
                "Sujet": "Une maison",
                "Email": "sadenachbinathan@gmail.com",
                "Date": "Moins de 2 ans",
                "Travaux": "Renovation ",
                "Role": "Proprietaire",
                "Energie": "Solaire",
                "Pays": "France",
                "Ville": "Paris",
                "Etat": "Je ne connais pas",
                "Rue": "Une rue",
                "Surface": "20",
                "Raison": "Je ne sais pas",
                "Nom": "Tchinda Nathan",
                "Telephone": "656296992"
            }
        },]


        const response = await fetch(urlQuiz, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ records: infos })
        });

        const responseData = await response.json();
        if (!response.ok) {
            console.error(responseData);
            return;
        }



    }

    return (
        <>
            {(currentStep == -1) &&
                <>
                    <div className="">
                        <h1 className="text-6xl text-center font-semibold leading-[1.2] ">Calculez vos aides</h1>
                        <h1 className="text-5xl text-center font-semibold leading-[1.1]">Terminez notre quizz pour bénéficier de nos aides</h1>
                    </div>

                    <button onClick={() => setCurrentStep(0)} className="absolute bottom-10 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full">
                        <img src={arrow} alt="arrow" />
                    </button>
                </>
            }

            {(currentStep !== -1) &&
                <div className="w-full h-full">
                    {
                        submitButtonIsDisabled == true && <Question type={steps[currentStep]?.type} responseType={steps[currentStep]?.responseType} currentStep={currentStep} question={steps[currentStep]?.question} answers={steps[currentStep]?.answers} handleSelect={handleSelect} />
                    }

                    <button onClick={() => {
                        if (isFinished) {

                            handleFinish()
                        } else {
                            if (!btnNextIsDisabled) {
                                setCurrentStep(cur => cur + 1)
                                if (currentStep == totalStepCount) {
                                    setIsFinished(true)
                                }
                            }

                        }
                    }}
                        className="absolute bottom-8 left-[45%] bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full"
                    >
                        <img src={arrow} alt="arrow" />
                    </button>

                </div>
            }
        </>
    )
}
