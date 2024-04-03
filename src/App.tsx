import house from "./icons/house.svg"
import building from './icons/building.svg'
import { Quiz, StepsProps } from "./components/Quiz"
import NewForm from "./pages/form"
import bg from './assets/images/bg.jpg'
export default function App() {

  const steps: StepsProps[] = [
    {
      question: "Votre projet concerne ?",
      type: "select",
      answers: [
        {
          title: "Une maison",
          icon: house
        },
        {
          title: "Un appartement",
          icon: building
        }
      ]

    },
    {
      question: "Votre email",
      type: "input",
      responseType: "email",
      answers: []

    },
    {
      question: "De quand date la construction du logement concerné par les travaux ?",
      type: "select",
      answers: [
        {
          title: "Moins de 2 ans",
          icon: building
        },
        {
          title: "Entre 2 et 15 ans",
          icon: house
        },
        {
          title: "plus de 15 ans",
          icon: house
        }
      ]
    },
    {
      question: "Quels travaux d’isolation souhaitez-vous réaliser ?",
      type: "multiselect",
      answers: [
        {
          title: "Isolation exterieur",
          icon: building
        },
        {
          title: "Panneaux solaires",
          icon: building
        },
        {
          title: "Poele a granules",
          icon: house
        },
        {
          title: "Isolation du sous-sol/garage",
          icon: house
        },
        {
          title: "Ballon d'eau chaude",
          icon: house
        }
      ]
    },
    {
      question: "Dans ce logement, vous êtes :",
      type: "select",
      answers: [
        {
          title: "Propriétaire occupant",
          icon: building
        },
        {
          title: "Propriétaire d'une résidence",
          icon: house
        },
        {
          title: "Propriétaire bailleur",
          icon: house
        },
        {
          title: "Locataire",
          icon: house
        }
      ]
    },
    {
      question: "Quelle est l’énergie de chauffage actuelle de votre logement ?",
      type: "multiselect",
      answers: [
        {
          title: "Chauffage au fioul",
          icon: building
        },
        {
          title: "Chauffage éléctrique",
          icon: house
        },
        {
          title: "Chauffage au gaz",
          icon: house
        },
        {
          title: "Chauffage au bois",
          icon: house
        },
        {
          title: "Pompe à chaleur",
          icon: house
        },
        {
          title: "Chauffage au charbon",
          icon: house
        },
        {
          title: "Autre energie",
          icon: house
        }
      ]
    },
    {
      question: "Où se situe le logement concerné par les travaux ?",
      type: "multiinput",
      answers: [
        {
          title: "Rue",
          icon: building,
        },
        {
          title: "Ville",
          icon: house
        },
        {
          title: "Etat",
          icon: house
        },
        {
          title: "Pays",
          icon: house,
          initialValue: "France",
          disabled: true,
        }
      ]
    },
    {
      question: "Quelle est la surface de votre logoment (en m2) ?",
      type: "input",
      responseType: "number",
      answers: []

    },

    {
      question: "Pourquoi souhaitez-vous faire ces travaux ?",
      type: "multiselect",
      answers: [
        {
          title: "J'ai froid dans ma maison",
          icon: building
        },
        {
          title: "Je veux reduire ma facture",
          icon: house
        },
        {
          title: "Je veux améliorer mon diagnostic énergetique",
          icon: house
        },
        {
          title: "Autre",
          icon: house
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
      answers: []

    },
    // {
    //   question: "Quelle est la note DPE de votre logement ?",
    //   type: "select",
    //   answers: [
    //     {
    //       title: "Etiquette A",
    //       icon: building
    //     },
    //     {
    //       title: "Etiquette B",
    //       icon: house
    //     },
    //     {
    //       title: "Etiquette C",
    //       icon: house
    //     },
    //     {
    //       title: "Etiquette D",
    //       icon: house
    //     },
    //     {
    //       title: "Etiquette E",
    //       icon: house
    //     },
    //     {
    //       title: "Etiquette F",
    //       icon: house
    //     },
    //     {
    //       title: "Etiquette G",
    //       icon: house
    //     },
    //     {
    //       title: "Je ne sais pas",
    //       icon: house
    //     }
    //   ]
    // },
    // {
    //   question: "De quand date la construction du logement concerné par les travaux ?",
    //   type: "select",
    //   answers: [
    //     {
    //       title: "Moins de 2 ans",
    //       icon: building
    //     },
    //     {
    //       title: "Entre 2 et 15 ans",
    //       icon: house
    //     },
    //     {
    //       title: "plus de 15 ans",
    //       icon: house
    //     }
    //   ]
    // },

    // {
    //   question: "De quelle façon souhaitez vous faire isoler vos murs ?",
    //   type: "multiselect",
    //   answers: [
    //     {
    //       title: "Isolation intérieur",
    //       icon: building
    //     },
    //     {
    //       title: "Isolation extérieur",
    //       icon: house
    //     },
    //     {
    //       title: "Je ne sais pas",
    //       icon: house
    //     }
    //   ]
    // },

    // {
    //   question: "Où en êtes-vous dans votre projet ?",
    //   type: "select",
    //   answers: [
    //     {
    //       title: "Je réfléchis à mes travaux",
    //       icon: building
    //     },
    //     {
    //       title: "Je recherche un artisan RGE",
    //       icon: house
    //     },
    //     {
    //       title: "Je vais signer mon devis",
    //       icon: house
    //     },
    //     {
    //       title: "J'ai déjà signé mon devis",
    //       icon: house
    //     }
    //   ]
    // },

    // {
    //   question: "Combien de personnes composent votre foyer, vous compris ?",
    //   type: "select",
    //   answers: [
    //     {
    //       title: "Moins de 2",
    //       icon: building
    //     },
    //     {
    //       title: "Entre 2 et 4",
    //       icon: house
    //     },
    //     {
    //       title: "Plus de 4",
    //       icon: house
    //     }
    //   ]
    // },
    // {
    //   question: "À combien s'élève le revenu total de votre foyer fiscal ?",
    //   type: "select",
    //   answers: [
    //     {
    //       title: "Inférieur à 29 917 €",
    //       icon: building
    //     },
    //     {
    //       title: "Entre 29 917 € et 38 349 €",
    //       icon: house
    //     },
    //     {
    //       title: "Entre 38 349 € et 54 071 €",
    //       icon: house
    //     },
    //     {
    //       title: "Supérieur à 54 071 €",
    //       icon: house
    //     }
    //   ]
    // },

  ]

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 h-screen">
      <div className={`w-full h-full flex flex-col items-center justify-center`}>

        {/* <Quiz steps={steps} /> */}
        <NewForm />
      </div>
    </div>
  )
}