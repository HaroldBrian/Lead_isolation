import React, { useEffect, useState } from 'react'
import { AnswerComponent } from './AnswerComponent';
import { ResponseQuiz } from './Quiz';


export type Answer = {
    title: string;
    icon: string;
    disabled?: boolean;
    initialValue?: string;
}
export type QuestionProps = {
    question: string;
    answers: Answer[];
    type: "input" | "select" | "multiselect" | "multiinput";
    responseType?: "text" | "number" | "email" | "tel";
    handleSelect: (response: ResponseQuiz) => void;
    currentStep?: number;
    // setIsFinished: React.Dispatch<React.SetStateAction<boolean>>
}
export const Question: React.FC<QuestionProps> = ({ question, answers, handleSelect, responseType, type }) => {

    const anwersCards = answers?.map((answer) => (
        <div className="" key={answer.title} onClick={() => {
            handleSelect({ question, response: answer.title, completed: true });
        }}>
            <AnswerComponent icon={answer.icon} title={answer.title} />
        </div>

    ))

    const [response, setResponse] = useState("")


    const handleMultiSelect = ({ question, response }) => {
        // const data = [...currentData, response]
        // setCurrenData(data)
        handleSelect({ question, response: response })
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {

        // setCurrenData(old => [...old, event.target.value])
        handleSelect({ question, response: event.target.value })
    }

    const [oldQuestion, setOldQuestion] = useState("")
    useEffect(() => {
        if (oldQuestion !== question) {
            setResponse("")
            setOldQuestion(question)
        }
    }, [question, oldQuestion])

    return (
        <>

            <div className="h-screen flex flex-col justify-center w-full px-56">
                <p className="ml-2 text-xl text-left font-bold text-gray-900 dark:text-gray-900 md:text-lg">{question}</p>
                {type == "select" && <div className="flex flex-wrap gap-3 w-full">
                    {anwersCards}

                </div>}

                {
                    type == "multiselect" && <ul className="grid w-full gap-6 md:grid-cols-3">
                        {
                            answers.map((answer, index) => (
                                <li key={answer.title} onClick={() => handleMultiSelect({ question, response: answer.title })}>
                                    <input type="checkbox" id={`react-option-${index}`} value="" className="hidden peer" required />
                                    <label htmlFor={`react-option-${index}`} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{answer.title}</div>
                                            {/* <div className="w-full text-sm">A JavaScript library for building user interfaces.</div> */}
                                        </div>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                }

                {
                    type == "multiinput" && <ul className="grid w-full gap-6 md:grid-cols-2">
                        {
                            answers.map((answer, index) => (
                                <p key={answer.title} className="w-full">
                                    <label htmlFor={`react-option-choice-${index}`}>{answer.title}</label>
                                    <input key={index} type={responseType} onChange={handleInput} defaultValue={answer.initialValue} disabled={answer.disabled} value={answer.initialValue} id="surface" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                                </p>
                            ))
                        }
                    </ul>
                }
                <div className="w-full">
                    {type == "input" &&
                        <input
                            type={responseType}
                            value={response}
                            onChange={(e) => {
                                setResponse(e.target.value)

                                handleSelect({ question, response: response })
                            }}
                            id="surface"
                            className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                    }
                </div>
            </div>
        </>

    )
}
