import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectsData';

const printProjects = () => {
  const projects = projectData.getProjects();
  let domString = '';
  projects.forEach((project) => {
    if (project.available) {
      domString += `<div class="row carousel-item container-fluid ${project === project[0] ? 'active' : ''}">`;
      domString += '<div class="project-cards text-center col-sm-12">';
      domString += '<div class="project-screenshot">';
      domString += `<img src=${project.screenshot} alt="screenshot of ${project.title}">`;
      domString += '</div>';
      domString += '<div class="project-info mt-2">';
      domString += `<h2 class="project-title">${project.title}</h2>`;
      domString += `<h5 class="technologies-used">${project.technologiesUsed}</h5>`;
      domString += `<p class="project-description my-4">${project.description}</p>`;
      domString += '<div class="project-btns">';
      domString += `<button class="project-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${project.url} target="_blank">View Project</a></button>`;
      domString += `<button class="github-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${project.githubUrl} target="_blank">View GitHub</a></button>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
  });
  utils.printToDom('projects', domString);
};


// const oldPrintProjects = (arr) => {
//   let domString = '';
//   for (let i = 0; i < arr.length; i++) {
//   if (arr[i].available && arr[i] === arr[0]) {
//   domString += `<div class="row carousel-item container-fluid active">`;
//   domString += `<div class="project-cards text-center col-sm-12">`;
//   domString += `<div class="project-screenshot">`;
//   domString += `<img src=${arr[i].screenshot} alt="screenshot of ${arr[i].title}">`;
//   domString += `</div>`;
//   domString += `<div class="project-info mt-2">`;
//   domString += `<h2 class="project-title">${arr[i].title}</h2>`;
//   domString += `<h5 class="technologies-used">${arr[i].technologiesUsed}</h5>`;
//   domString += `<p class="project-description my-4">${arr[i].description}</p>`;
//   domString += `<div class="project-btns">`;
//   domString += `<button class="project-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].url} target="_blank">View Project</a></button>`;
//   domString += `<button class="github-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].githubUrl} target="_blank">View GitHub</a></button>`;
//   domString += `</div>`;
//   domString += `</div>`;
//   domString += `</div>`;
//   domString += `</div>`;
//   } else if (arr[i].available && arr[i] !== arr[0]) {
//   domString += `<div class="row carousel-item container-fluid">`;
//   domString += `<div class="project-cards text-center col-sm-12">`;
//   domString += `<div class="project-screenshot">`;
//   domString += `<img src=${arr[i].screenshot} alt="screenshot of ${arr[i].title}">`;
//   domString += `</div>`;
//   domString += `<div class="project-info mt-2">`;
//   domString += `<h2 class="project-title">${arr[i].title}</h2>`;
//   domString += `<h5 class="technologies-used">${arr[i].technologiesUsed}</h5>`;
//   domString += `<p class="project-description my-4">${arr[i].description}</p>`;
//   domString += `<div class="project-btns">`;
//   domString += `<button class="project-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].url} target="_blank">View Project</a></button>`;
//   domString += `<button class="github-Url-button btn btn-dark btn-lg mt-1 mx-1"><a class="text-white" href=${arr[i].githubUrl} target="_blank">View GitHub</a></button>`;
//   domString += `</div>`;
//   domString += `</div>`;
//   domString += `</div>`;
//   domString += `</div>`;
//   }
//   }
//   utils.printToDom('projects', domString);
//   };

export default { printProjects };
