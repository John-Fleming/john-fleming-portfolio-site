console.log('hi');

const projects = [{
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/John-Fleming/personal-bio-site", 
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
                <h1 class="project-title">${projects[project].title}</h1>
            </div>
            `;  
        }
    }
    printToDom('projectsPage', domString);   
};

createProjectCards();