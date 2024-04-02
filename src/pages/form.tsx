import React, { useEffect, useState } from 'react';
import arrow from "../icons/arrow.svg"
import { AIRTABLE_TOKEN } from '../config';
interface Answer {
    title: string;
    icon: string;
}

interface Step {
    question: string;
    type: string;
    responseType?: string;
    placeholder?: string;
    answers: Answer[];
}

const NewForm: React.FC = () => {
    const steps: Step[] = [
        {
            question: "Votre projet concerne ?",
            type: "select",
            answers: [
                {
                    title: "Une maison",
                    icon: ""
                },
                {
                    title: "Un appartement",
                    icon: ""
                }
            ]

        },
        {
            question: "Votre email",
            type: "input",
            responseType: "email",
            answers: [],
            placeholder: "ex. votre@mail.com"

        },
        {
            question: "De quand date la construction du logement concerné par les travaux ?",
            type: "select",
            answers: [
                {
                    title: "Moins de 2 ans",
                    icon: ""
                },
                {
                    title: "Entre 2 et 15 ans",
                    icon: ""
                },
                {
                    title: "plus de 15 ans",
                    icon: ""
                }
            ]
        },
        {
            question: "Quels travaux d’isolation souhaitez-vous réaliser ?",
            type: "multiselect",
            answers: [
                {
                    title: "Isolation exterieur",
                    icon: ""
                },
                {
                    title: "Panneaux solaires",
                    icon: ""
                },
                {
                    title: "Poele a granules",
                    icon: ""
                },
                {
                    title: "Isolation du sous-sol/garage",
                    icon: ""
                },
                {
                    title: "Ballon d'eau chaude",
                    icon: ""
                }
            ]
        },
        {
            question: "Dans ce logement, vous êtes :",
            type: "select",
            answers: [
                {
                    title: "Propriétaire occupant",
                    icon: ""
                },
                {
                    title: "Propriétaire d'une résidence",
                    icon: ""
                },
                {
                    title: "Propriétaire bailleur",
                    icon: ""
                },
                {
                    title: "Locataire",
                    icon: ""
                }
            ]
        },
        {
            question: "Quelle est l’énergie de chauffage actuelle de votre logement ?",
            type: "multiselect",
            answers: [
                {
                    title: "Chauffage éléctrique",
                    icon: ""
                },
                {
                    title: "Chauffage au gaz",
                    icon: ""
                },
                {
                    title: "Chauffage au bois",
                    icon: ""
                },
                {
                    title: "Chauffage au charbon",
                    icon: ""
                },
                {
                    title: "Autre energie",
                    icon: ""
                }
            ]
        },
        {
            question: "Où se situe le logement concerné par les travaux ?",
            type: "input",
            answers: [],
            placeholder: "ex. Paris, France, 6600"
        },
        {
            question: "Quelle est la surface de votre logoment (en m2) ?",
            type: "input",
            responseType: "number",
            answers: [],
            placeholder: "ex. 100"

        },

        {
            question: "Pourquoi souhaitez-vous faire ces travaux ?",
            type: "multiselect",
            answers: [
                {
                    title: "J'ai froid dans ma maison",
                    icon: ""
                },
                {
                    title: "Je veux reduire ma facture",
                    icon: ""
                },
                {
                    title: "Je veux améliorer mon diagnostic énergetique",
                    icon: ""
                },
                {
                    title: "Autre",
                    icon: ""
                }
            ]
        },

        {
            question: "Quelle est votre nom ?",
            type: "input",
            responseType: "text",
            answers: []

        },
        {
            question: "Quel est votre numéro de télephone ?",
            type: "input",
            responseType: "tel",
            answers: [],
            placeholder: "ex. +33 xx06060606"

        },
        // {
        //   question: "Quelle est la note DPE de votre logement ?",
        //   type: "select",
        //   answers: [
        //     {
        //       title: "Etiquette A",
        //       icon: ""
        //     },
        //     {
        //       title: "Etiquette B",
        //       icon: ""
        //     },
        //     {
        //       title: "Etiquette C",
        //       icon: ""
        //     },
        //     {
        //       title: "Etiquette D",
        //       icon: ""
        //     },
        //     {
        //       title: "Etiquette E",
        //       icon: ""
        //     },
        //     {
        //       title: "Etiquette F",
        //       icon: ""
        //     },
        //     {
        //       title: "Etiquette G",
        //       icon: ""
        //     },
        //     {
        //       title: "Je ne sais pas",
        //       icon: ""
        //     }
        //   ]
        // },
        // {
        //   question: "De quand date la construction du logement concerné par les travaux ?",
        //   type: "select",
        //   answers: [
        //     {
        //       title: "Moins de 2 ans",
        //       icon: ""
        //     },
        //     {
        //       title: "Entre 2 et 15 ans",
        //       icon: ""
        //     },
        //     {
        //       title: "plus de 15 ans",
        //       icon: ""
        //     }
        //   ]
        // },

        // {
        //   question: "De quelle façon souhaitez vous faire isoler vos murs ?",
        //   type: "multiselect",
        //   answers: [
        //     {
        //       title: "Isolation intérieur",
        //       icon: ""
        //     },
        //     {
        //       title: "Isolation extérieur",
        //       icon: ""
        //     },
        //     {
        //       title: "Je ne sais pas",
        //       icon: ""
        //     }
        //   ]
        // },

        // {
        //   question: "Où en êtes-vous dans votre projet ?",
        //   type: "select",
        //   answers: [
        //     {
        //       title: "Je réfléchis à mes travaux",
        //       icon: ""
        //     },
        //     {
        //       title: "Je recherche un artisan RGE",
        //       icon: ""
        //     },
        //     {
        //       title: "Je vais signer mon devis",
        //       icon: ""
        //     },
        //     {
        //       title: "J'ai déjà signé mon devis",
        //       icon: ""
        //     }
        //   ]
        // },

        // {
        //   question: "Combien de personnes composent votre foyer, vous compris ?",
        //   type: "select",
        //   answers: [
        //     {
        //       title: "Moins de 2",
        //       icon: ""
        //     },
        //     {
        //       title: "Entre 2 et 4",
        //       icon: ""
        //     },
        //     {
        //       title: "Plus de 4",
        //       icon: ""
        //     }
        //   ]
        // },
        // {
        //   question: "À combien s'élève le revenu total de votre foyer fiscal ?",
        //   type: "select",
        //   answers: [
        //     {
        //       title: "Inférieur à 29 917 €",
        //       icon: ""
        //     },
        //     {
        //       title: "Entre 29 917 € et 38 349 €",
        //       icon: ""
        //     },
        //     {
        //       title: "Entre 38 349 € et 54 071 €",
        //       icon: ""
        //     },
        //     {
        //       title: "Supérieur à 54 071 €",
        //       icon: ""
        //     }
        //   ]
        // },

    ]

    const [currentStep, setCurrentStep] = useState<number>(-1);
    const [responses, setResponses] = useState<Record<string, string | string[]>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const handleChange = (id: string, value: string | string[]) => {
        setResponses({ ...responses, [id]: value });
    };

    const handleStart = () => {
        setCurrentStep(0);
    };

    const handleNextStep = () => {
        const currentResponse = responses[steps[currentStep].question];
        const validate = validateStep(currentResponse);
        if (validate.isValid) {
            setErrors({});
            setCurrentStep(currentStep + 1);
        } else {
            setErrors({ [steps[currentStep].question]: validate.error });
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setIsSubmitting(true);

        const apiKey = AIRTABLE_TOKEN;
        const tableName = 'Leads Data';
        const urlQuiz = `https://api.airtable.com/v0/appCLTH0QC4bNZBVP/${tableName}`;

        const dataToSend: Record<string, string | string[]> = {};

        for (const [key, value] of Object.entries(responses)) {
            if (Array.isArray(value)) {
                const arrayAsString = value.join('\n');
                dataToSend[key] = arrayAsString;
            } else {
                dataToSend[key] = value;
            }
        }

        try {
            await fetch(urlQuiz, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fields: dataToSend })
            });
            alert('Formulaire soumis avec succès !');
            setCurrentStep(-1);
            setResponses({});
            setIsSubmitting(false);
            window.location.href = '/';
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la soumission du formulaire :', error);
            alert('Une erreur s\'est produite lors de la soumission du formulaire. Veuillez réessayer plus tard.');
        }
    };

    const validateStep = (value: string | string[] | undefined): { isValid: boolean; error: string } => {
        if (value && (typeof value === 'string' ? value.trim() !== '' : value.length > 0)) {
            return { isValid: true, error: '' };
        } else {
            return { isValid: false, error: 'Ce champ n\'est pas valide ! ' };
        }
    };

    const [progress, setProgress] = useState(0);

    // useEffect(() => {
    //     setProgress((currentStep / (steps.length - 1)) * 100);
    // }, [currentStep]);

    useEffect(() => {
        const newProgressPercentage = (currentStep / steps.length) * 100;
        setProgress(() => Math.floor(newProgressPercentage));
        console.log(progress);

    }, [currentStep, steps.length]);
    const renderStep = () => {
        const step = steps[currentStep];
        return (
            <div key={step.question} className='flex flex-col w-full'>
                <label className='text-2xl mb-2' htmlFor={`question_${step.question}`}>{step.question}</label>
                {step.type === 'input' ? (
                    <input
                        type={step.responseType || 'text'}
                        id={`question_${step.question}`}
                        placeholder={step?.placeholder}
                        value={responses[step.question] || ''}
                        onChange={(e) => handleChange(step.question, e.target.value)}
                        className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        required
                    />
                ) : step.type === 'select' ? (
                    <ul className="grid w-full gap-4 grid-cols-1">
                        {step.answers.map((answer) => (
                            <li key={answer.title}>
                                <input
                                    type='radio'
                                    id={`question_${step.question}_${answer.title}`}
                                    name={`question_${step.question}`}
                                    value={answer.title}
                                    checked={responses[step.question] === answer.title}
                                    onChange={(e) => {
                                        handleChange(step.question, e.target.value)

                                        setTimeout(() => {
                                            setCurrentStep(curr => curr + 1)
                                        }, 1000);

                                    }}
                                    className="hidden peer" required />
                                <label htmlFor={`question_${step.question}_${answer.title}`} className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-orange-200 rounded-lg cursor-pointer dark:hover:text-orange-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-orange-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">{answer.title}</div>
                                        {/* <div className="w-full text-sm">A JavaScript library for building user interfaces.</div> */}
                                    </div>
                                </label>

                            </li>
                        ))}
                    </ul>
                ) : step.type === 'multiselect' ? (
                    <ul className="grid w-full gap-2 grid-cols-1">
                        {step.answers.map((answer) => (
                            <>

                                <li key={answer.title}>
                                    <input
                                        type="checkbox"
                                        id={`question_${step.question}_${answer.title}`}
                                        value={answer.title}
                                        checked={responses[step.question]?.includes(answer.title)}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            const currentValue = responses[step.question] || [];
                                            let newValue: string[];
                                            if (isChecked) {
                                                newValue = [...currentValue, answer.title];
                                            } else {
                                                newValue = currentValue.filter((selectedOption) => selectedOption !== answer.title);
                                            }
                                            handleChange(step.question, newValue);
                                        }}
                                        className="hidden peer" required />
                                    <label htmlFor={`question_${step.question}_${answer.title}`} className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{answer.title}</div>
                                            {/* <div className="w-full text-sm">A JavaScript library for building user interfaces.</div> */}
                                        </div>
                                    </label>
                                </li>


                            </>
                        ))}
                    </ul>
                ) : step.type === 'multiinput' ? (
                    step.answers.map((answer) => (
                        <div key={answer.title}>
                            <label htmlFor={`question_${step.question}_${answer.title}`}>{answer.title}</label>
                            <input
                                type="text"
                                id={`question_${step.question}_${answer.title}`}
                                value={responses[`${step.question}_${answer.title}`] || ''}
                                onChange={(e) =>
                                    handleChange(`${step.question}_${answer.title}`, e.target.value)
                                }
                                required
                            />
                        </div>
                    ))
                ) : null}
                {errors[step.question] && <p className='text-lg text-red-500 font-bold mb-2'>{errors[step.question]}</p>}

                {currentStep !== steps.length - 1 &&
                    <div className='absolute bottom-[45%] md:left-[45%] left-[40%] text-center'>
                        <button
                            className=" bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full"

                            onClick={handleNextStep}>
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                }
                {(currentStep === steps.length - 1 && !isSubmitting) &&
                    <button
                        className="absolute bottom-8 md:left-[45%] left-[40%] bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full"

                        onClick={handleSubmit}>Soumettre
                    </button>
                }

                {isSubmitting &&
                    <button disabled type="button"
                        className="absolute bottom-[50%] md:left-[45%] left-[40%] bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full"
                    >
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                        En cours...
                    </button>}
            </div >
        );
    };



    return (
        <div className='w-full h-full md:p-40 p-10 md:px-40'>
            <div className={`absolute top-0 left-0 w-${progress}% h-2 bg-red-500`}></div>
            {currentStep === -1 ? (
                <div>
                    <div className="">
                        <h1 className="md:text-6xl text-5xl text-center font-semibold leading-[1.2] ">Calculez vos aides</h1>
                        <h1 className="md:text-5xl text-4xl text-center font-semibold leading-[1.1]">Terminez notre quizz pour bénéficier de nos aides</h1>
                    </div>
                    {/* <p>Bienvenue ! Veuillez cliquer sur le bouton ci-dessous pour commencer le questionnaire :</p> */}
                    <button
                        className="absolute bottom-[50%] md:left-[45%] left-[40%] bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full"

                        onClick={handleStart}><img src={arrow} alt="arrow" /></button>
                </div>
            ) : (
                <form className="w-full h-full">
                    {renderStep()}
                </form>
            )}
        </div>
    );
};

export default NewForm;
