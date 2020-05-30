import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectsData';

const buttonHoverEvent = (e) => {
  const targetedButton = e.target.closest('button');
  $(targetedButton).addClass('hover-state');
};

const buttonHoverExitEvent = (e) => {
  const targetedButton = e.target.closest('button');
  $(targetedButton).removeClass('hover-state');
};

const printProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      const firstAvailableProject = projects.find((x) => x.available);
      let domString = '';
      projects.forEach((project) => {
        domString += `<div class="carousel-item container-fluid ${project === firstAvailableProject ? 'active' : ''}">`;
        domString += '<div class="project-cards text-center col-sm-12">';
        domString += '<div class="project-screenshot">';
        domString += `<img class="img-fluid" src="${project.screenshot}" alt="screenshot of ${project.title}">`;
        domString += '</div>';
        domString += '<div class="project-info mt-2">';
        domString += `<h2 class="project-title">${project.title}</h2>`;
        domString += `<h5 class="technologies-used">${project.technologiesUsed}</h5>`;
        domString += `<p class="project-description my-4">${project.description}</p>`;
        domString += '<div class="project-btns">';
        domString += `<button class="project-Url-button my-button mt-1 mx-1"><a href=${project.url} target="_blank">Demo</a></button>`;
        domString += `<button class="github-Url-button my-button mt-1 mx-1"><a href=${project.githubUrl} target="_blank">GitHub</a></button>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('projects', domString);
      $('body').on('mouseenter', '.my-button', buttonHoverEvent);
      $('body').on('mouseleave', '.my-button', buttonHoverExitEvent);
    })
    .catch((err) => console.error(err));
};

export default { printProjects };
