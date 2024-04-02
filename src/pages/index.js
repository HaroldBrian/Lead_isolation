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
        answers: []

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
                title: "Chauffage au fioul",
                icon: ""
            },
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
                title: "Pompe à chaleur",
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
        type: "multiinput",
        answers: [
            {
                title: "Rue",
                icon: "",
            },
            {
                title: "Ville",
                icon: ""
            },
            {
                title: "Etat",
                icon: ""
            },
            {
                title: "Pays",
                icon: "",
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
        answers: []

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