import React, { useState } from 'react'
import { AIRTABLE_TOKEN } from '../config';
import { AnswerComponent } from './AnswerComponent';

type FormProps = {
    handleFinish: () => Promise<void>;
    setPersonID: React.Dispatch<React.SetStateAction<string>>;
}
export const Form: React.FC<FormProps> = ({ handleFinish, setPersonID }) => {

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [surface, setSurface] = useState(0);

    const [emailError, setEmailError] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [surfaceError, setSurfaceError] = useState("");

    const [currentStep, setCurrentStep] = useState(0);



    const validateEmail = () => {
        // Validation de l'email
        if (!email) {
            setEmailError("Veuillez entrer votre email.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Veuillez entrer une adresse email valide.");
        } else {
            setEmailError("");
        }
    };

    const validateFirstname = () => {
        // Validation du prénom
        if (!firstname) {
            setFirstnameError("Veuillez entrer votre prénom.");
        } else {
            setFirstnameError("");
        }
    };

    const validateLastname = () => {
        // Validation du nom de famille
        if (!lastname) {
            setLastnameError("Veuillez entrer votre nom de famille.");
        } else {
            setLastnameError("");
        }
    };

    const validatePhone = () => {
        // Validation du numéro de téléphone
        if (!phone) {
            setPhoneError("Veuillez entrer votre numéro de téléphone.");
        } else {
            setPhoneError("");
        }
    };

    const validateSurface = () => {
        if (!surface) {
            setSurfaceError("Veuillez la surface.");
        } else {
            setSurfaceError("");
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Valider les champs avant de soumettre
        validateEmail();
        validateFirstname();
        validateLastname();
        validatePhone();
        validateSurface();
        // Soumettre uniquement si tous les champs sont valides
        if (!emailError && !firstnameError && !lastnameError && !phoneError) {
            // Soumission du formulaire
            const apiKey = AIRTABLE_TOKEN;
            const tableNameLeads = 'Persons';
            const urlLeads = `https://api.airtable.com/v0/appCLTH0QC4bNZBVP/${tableNameLeads}`;



            const infos = [{
                "fields": {
                    "Nom": lastname,
                    "Prenom": firstname,
                    "Email": email,
                    "Telephone": phone
                }
            }]


            const response = await fetch(urlLeads, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ records: infos })
            });

            const personResponse = await response.json()
            if (!response.ok) {

                return;
            }



            console.log(personResponse);
            setPersonID(() => personResponse.records[0].id)




            handleFinish()
        }
    };

    return (
        <>
            {

                currentStep === 0 &&
                <div className='m-10 h-screen'>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <div>
                            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Quelle est la surface de votre projet ? (en m<sup>2</sup>)
                            </h2>
                            <input type="number" value={surface} onChange={(e) => setSurface(parseInt(e.target.value))} onBlur={validateSurface} id="surface" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            {surfaceError && <p className="text-red-500">{surfaceError}</p>}
                        </div>

                    </div>
                    <button onClick={() => {
                        if (surface > 0) {
                            setCurrentStep(currentStep + 1)
                        } else {
                            setSurfaceError("Veuillez la surface.")
                        }
                    }} className={`text-white bg-primary-500 hover:bg-primary-500 cursor-pointer focus:ring-4 focus:ring-primary-300 font-medium rounded-[40px] text-sm px-20 py-4 mr-2 my-8 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none dark:focus:ring-primary-600 uppercase`}>continue</button>

                </div>
            }

            {
                currentStep === 1 &&
                <div className='m-10 h-screen'>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <div>
                            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Quelle est le service dont vous avez besoin ?
                            </h2>
                            {
                                [{ "icon": "null", "title": "Assistance numerique" }].map((answer) => (
                                    <div className="m-3" key={answer.title} onClick={() => {
                                        // handleSelect({ question, response: answer.title });
                                    }}>
                                        <AnswerComponent icon={answer.icon} title={answer.title} />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            }

            {
                currentStep === 3 && <div className='m-10 h-screen'>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Comment vous appelez-vous ?
                    </h2>

                    <p className="mb-4 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Vous bénéficierez de notre service d’assistance téléphonique
                        et serez rappelé gratuitement afin de vous accompagner dans votre projet.</p>
                    <form action="#" onSubmit={handleSubmit} className="space-y-8 mb-2">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Votre Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            {emailError && <p className="text-red-500">{emailError}</p>}
                        </div>


                        <div>
                            <label htmlFor="lastname" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Votre Nom</label>
                            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            {lastnameError && <p className="text-red-500">{lastnameError}</p>}
                        </div>

                        <div>
                            <label htmlFor="firstname" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Votre Prenom</label>
                            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstname" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            {firstnameError && <p className="text-red-500">{firstnameError}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Votre Numero de Telephone</label>
                            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            {phoneError && <p className="text-red-500">{phoneError}</p>}
                        </div>

                        <button onClick={() => handleSubmit} className={`text-white bg-primary-500 hover:bg-primary-500 cursor-pointer focus:ring-4 focus:ring-primary-300 font-medium rounded-[40px] text-sm px-20 py-4 mr-2 mb-8 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none dark:focus:ring-primary-600 uppercase`}>continue</button>

                    </form>
                </div>
            }

        </>
    )
}
