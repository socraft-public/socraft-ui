import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Training } from "./";
import { TrainingProps } from "./Training.types";

export default {
  title: "socraft-ui/Training/Light-mode",
  component: Training,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<TrainingProps> = (args) => <Training {...args} />;

export const Default = Template.bind({});

Default.args = {
  training: {
    id: "b1b7e7c9-2a2d-4b6c-9c5c-a7b3b3b3b3b3",
    audience: "Reconversion professionnelle, étudiants",
    format:
      "En cours du soir, 2 fois par semaine sur 4 semaines\n90% de pratique\nOnline ou en présentiel",
    description:
      "\nMaîtrisez le développement avec nos cours du soir: une immersion pratique sans les distractions des tutoriels sans fin. Transformez vos soirées en une étape vers l’expertise.\nLe passage obligé pour maîtriser le développement d'applications web modernes. Découvrez comment Angular facilite et accélère le développement front-end, vous permettant de créer des expériences utilisateur exceptionnelles en un temps record !",
    title: "Learning Dev - Angular",
    prerequisites:
      "Prêt pour Angular ? Un zeste de JavaScript suffit ! Si vous savez jongler avec les fonctions et les événements, la route est toute tracée !",
    duration: "8 sessions de 3h",
    trainers: [
      {
        id: "93a7e849-29ec-4531-b9bf-e1ef7e74a986",
        firstname: "Yassine Bouderbala",
        profilePicture:
          "https://storage.googleapis.com/mysocraft-a456a.appspot.com/profilePictures/bouderbala.yassine@gmail.com",
        shortId: "yasboud",
      },
    ],
    price: "3000",
    objectives:
      "Architecture élaborée : Avec Angular, structurez vos applications web de manière modulaire et maintenable. Bénéficiez d’une organisation claire qui sépare la logique, la présentation et les données.\nInteractivité poussée : Grâce à la liaison bidirectionnelle (Two-Way Data Binding), vos applications réagissent en temps réel aux actions des utilisateurs, offrant une expérience fluide et réactive.\nOptimisation des performances : Angular facilite la création d’applications Single Page Application (SPA) rapides, optimisées et offrant une expérience utilisateur sans pareille.\nFlexibilité et modularité : Construisez des composants réutilisables, simplifiez la gestion des dépendances et adaptez votre application à des besoins changeants sans compromettre sa structure.\nÉcosystème riche : Angular est soutenu par un ensemble d’outils, de bibliothèques et de communautés actives, garantissant un développement soutenu et des ressources toujours à jour.\nIntégration aisée : Combinez Angular avec d’autres technologies, frameworks ou bibliothèques pour créer des solutions complètes et intégrées.\nDéveloppement uniforme : Angular offre un cadre cohérent pour le développement, garantissant des pratiques standardisées et une courbe d’apprentissage facilitée pour les nouveaux membres de l’équipe.\nAdaptabilité multiplateforme : Que vous développiez pour le web ou le mobile, Angular offre les outils et les pratiques pour garantir une expérience utilisateur homogène et optimale.",
    comment: "",
    trainersIds: ["93a7e849-29ec-4531-b9bf-e1ef7e74a986"],
    category: "Développement",
    featured: true,
  },
};
