const projects = [
  {
    id: 1,
    title: "Issue-Tracker",
    description:
      "Issue-Tracker is an application allowing a team of developpers to track issues of their project. They can create, update, delete and assign issues to other developpers.",
    links: [
      {
        name: "View Site",
        href: "https://issue-tracker-sigma-pearl.vercel.app/",
      },
      {
        name: "GitHub",
        href: "https://github.com/adriandufac/issue-tracker",
      },
    ],
    tags: ["NextJS", "SQL", "API", "Tailwind", "TypeScript"],
  },
  {
    id: 2,
    title: "Prism Tales",
    description:
      "This is a portfolio that I've made for a photographer. I connected it to a back-office using sanity.io so the admin can easyly add content.",
    links: [
      {
        name: "View Site",
        href: "https://portfolio-example-smoky.vercel.app/",
      },
    ],
    tags: ["React", "Framer motion", "Tailwind", "Sanity"],
  },
  {
    id: 3,
    title: "Game Hub",
    description:
      "GameHub listing all sort of games that are fetched using rawg.io API.\n The games can be sorted by all platform or/and genre.",
    links: [
      { name: "View Site", href: "https://game-hub-adrian.netlify.app/" },
      { name: "GitHub", href: "https://github.com/adriandufac/game-library" },
    ],
    tags: ["React", "HTML", "CSS", "API", "Axios"],
  },
  {
    id: 4,
    title: "Club M'aide",
    description:
      "School work I did at ENI school, this is a hub for company where differents users can create outdoor evenement with localisation and other users can notify if they want to participate. You can connect using username : recherche@alternance.fr and pw: recherche",
    links: [
      { name: "View Site", href: "http://adrian-projet-symfony.fr/" },
      { name: "GitHub", href: "https://github.com/adriandufac/ClubMAide" },
    ],
    tags: ["PHP", "Symfony"],
  },
];

export default projects;
