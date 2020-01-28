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

const createProjectCards = () => {
    let domString = '';
    for (project in projects) {
        if (projects[project].available) {
            domString += `
            <div class="project-cards">
                <img class="project-screenshot" src=${projects[project].screenshot} alt="screenshot of ${projects[project].title}">
                <h1 class="project-title">${projects[project].title}</h1>
                <h3 class="technologies-used">${projects[project].technologiesUsed}</h3>
                <p class="project-description">${projects[project].description}</p>
                <div class="view-project-buttons">
                    <button class="project-Url-button><a href=${projects[project].url}>View Project</a></button>
                    <button class="github-Url-button><a href=${projects[project].githubUrl}>View Project on GitHub</a></button>
                </div>
            </div>
            `;  
        }
    }
    printToDom('projectsPage', domString);   
};

const init = () => {
    createProjectCards();
}; 

init();