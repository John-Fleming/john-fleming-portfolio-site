const projects = [{
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://www.google.com", 
    githubUrl: "https://github.com/John-Fleming/personal-bio-site"
  }];

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].available) {
            domString += `<div class="project-cards">`
            domString +=     `<img class="project-screenshot" src=${arr[i].screenshot} alt="screenshot of ${arr[i].title}">`
            domString +=     `<h1 class="project-title">${arr[i].title}</h1>`
            domString +=     `<h3 class="technologies-used">${arr[i].technologiesUsed}</h3>`
            domString +=     `<p class="project-description">${arr[i].description}</p>`
            domString +=     `<div class="view-project-buttons">`
            domString +=         `<button class="project-Url-button"><a href=${arr[i].url}>View Project</a></button>`
            domString +=        `<button class="github-Url-button"><a href=${arr[i].githubUrl}>View Project on GitHub</a></button>`
            domString +=     `</div>`
            domString += `</div>`;  
        }
    }
    printToDom('projectsPage', domString);   
};

const init = () => {
    createProjectCards(projects);
}; 

init();