const projects = [{
    title: "Spotify", 
    screenshot: "./assets/Spotify_Screenshot.png", 
    description: "Spotify is one of the world's leading streaming platforms that I 100% built all by myself", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://www.spotify.com/", 
    githubUrl: "https://github.com/John-Fleming/personal-bio-site"
  },
  {
    title: "Spotify2", 
    screenshot: "./assets/Spotify_Screenshot.png", 
    description: "A better Spotify!", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://www.spotify.com/", 
    githubUrl: "https://github.com/John-Fleming/personal-bio-site"  
  }
];

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const printProjects = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].available && arr[i] === arr[0]) {
            domString += `<div class="row carousel-item container-fluid active">`;
            domString +=    `<div class="project-cards text-center col-sm-12">`;
            domString +=        `<div class="project-screenshot">`;
            domString +=            `<img src=${arr[i].screenshot} alt="screenshot of ${arr[i].title}">`;
            domString +=        `</div>`;
            domString +=        `<div class="project-info mt-2">`;
            domString +=            `<h2 class="project-title">${arr[i].title}</h2>`;
            domString +=            `<h5 class="technologies-used">${arr[i].technologiesUsed}</h5>`;
            domString +=            `<p class="project-description my-4">${arr[i].description}</p>`;
            domString +=            `<div class="project-btns">`;
            domString +=                `<button class="project-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].url} target="_blank">View Project</a></button>`;
            domString +=                `<button class="github-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].githubUrl} target="_blank">View GitHub</a></button>`;
            domString +=            `</div>`;
            domString +=        `</div>`;
            domString +=    `</div>`;  
            domString += `</div>`;  
        } else if (arr[i].available && arr[i] !== arr[0]) {
            domString += `<div class="row carousel-item container-fluid">`;
            domString +=    `<div class="project-cards text-center col-sm-12">`;
            domString +=        `<div class="project-screenshot">`;
            domString +=            `<img src=${arr[i].screenshot} alt="screenshot of ${arr[i].title}">`;
            domString +=        `</div>`;
            domString +=        `<div class="project-info mt-2">`;
            domString +=            `<h2 class="project-title">${arr[i].title}</h2>`;
            domString +=            `<h5 class="technologies-used">${arr[i].technologiesUsed}</h5>`;
            domString +=            `<p class="project-description my-4">${arr[i].description}</p>`;
            domString +=            `<div class="project-btns">`;
            domString +=                `<button class="project-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].url} target="_blank">View Project</a></button>`;
            domString +=                `<button class="github-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].githubUrl} target="_blank">View GitHub</a></button>`;
            domString +=            `</div>`;
            domString +=        `</div>`;
            domString +=    `</div>`;  
            domString += `</div>`;  
        }
    }
    printToDom('projects', domString);   
};

const init = () => {
    printProjects(projects);
}; 

init();