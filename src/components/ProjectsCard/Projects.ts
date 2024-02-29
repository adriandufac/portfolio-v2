

const projects = [
  {
    id: 1,
    title: "Game Hub",
    description:
      "GameHub listing all sort of games that are fetched using rawg.io API.\n The games can be sorted by all platform or/and genre.",
    links : [{name:"View Site", href : "https://game-hub-adrian.netlify.app/"},{name:"GitHub", href: "https://github.com/adriandufac/game-library"}],
    tags: ['React', 'HTML','CSS','API','Axios']
  },
  {
    id: 2,
    title: "Club M'aide",
    description: "School work I did at ENI school, this is a hub for company where differents users can create outdoor evenement with localisation and other users can notify if they want to participate. You can connect using username : recherche@alternance.fr and pw: recherche",
    links : [{name:"View Site", href : "https://projet-symfony.adrian-dev.fr/"},{name:"GitHub", href: "https://github.com/adriandufac/ClubMAide"}],
    tags: ['PHP', 'Symfony']
  },
  {
    id: 3,
    title: "TFT data Analyses",
    description: "This is a project I made using riot API to collect data about thousands TFT games played by the best players. These datas are stored in a database using mySql. Then I use DBScan algorithm to cluster the different composition. Finaly I made an algorithm to extract statistics about all thoses compositions and store it in the database.",
    links : [{name:"GitHub", href: "https://github.com/adriandufac/TFT_V2"}],
    tags: ['Java','API','SQL']
  },
];

export default projects;
