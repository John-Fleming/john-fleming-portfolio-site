const projects = [{
  title: 'Chatty App',
  screenshot: './assets/chatty_screenshot.png',
  description: 'The chatty app is a messaging app I contributed to for a group project at NSS. It allows a user to select who is sending a message, submit a new message, and perform specific actions such as liking and disliking messages, deleting messages, and selecting app styles.',
  technologiesUsed: 'HTML, CSS, Sass, Bootstrap, JavaScript, jQuery',
  available: true,
  url: '',
  githubUrl: 'https://github.com/John-Fleming/chatty-venus-fly-traps',
},
{
  title: 'Tamagotchi',
  screenshot: './assets/tamagotchi_screenshot.png',
  description: 'Modelled after the 90\'s Toy, the Tamagotchi project was a NSS class assignment to practice modular development and styling using Sass. Users can alter the scores calculating when clicking buttons in each displayed quadrant.',
  technologiesUsed: 'HTML, CSS, Sass, JavaScript, jQuery',
  available: true,
  url: '',
  githubUrl: 'https://github.com/John-Fleming/tamagotchi',
},
{
  title: 'Spotify',
  screenshot: './assets/Spotify_Screenshot.png',
  description: 'Spotify is one of the world\'s leading streaming platforms that I 100% built all by myself',
  technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
  available: true,
  url: 'https://www.spotify.com/',
  githubUrl: 'https://github.com/John-Fleming/personal-bio-site',
},
{
  title: 'Spotify2',
  screenshot: './assets/Spotify_Screenshot.png',
  description: 'A better Spotify!',
  technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
  available: true,
  url: 'https://www.spotify.com/',
  githubUrl: 'https://github.com/John-Fleming/personal-bio-site',
},
{
  title: 'Spotify3',
  screenshot: './assets/Spotify_Screenshot.png',
  description: 'This is my final form.',
  technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
  available: true,
  url: 'https://www.spotify.com/',
  githubUrl: 'https://github.com/John-Fleming/personal-bio-site',
},
];


const getProjects = () => projects;

export default { getProjects };
