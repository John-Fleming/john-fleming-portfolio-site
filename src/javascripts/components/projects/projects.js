import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectsData';

const printProjects = () => {
  const projects = projectData.getProjects();
  const firstAvailableProject = projects.find((x) => x.available);
  let domString = '';
  projects.forEach((project) => {
    if (project.available) {
      domString += `<div class="row carousel-item container-fluid ${project === firstAvailableProject ? 'active' : ''}">`;
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

export default { printProjects };
