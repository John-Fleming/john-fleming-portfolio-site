import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectsData';
import projectCard from '../projectCard/projectCard';

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
      let domString = '';
      domString += '<div class="row">';
      projects.forEach((project) => {
        domString += projectCard.buildProjectCard(project);
      });
      domString += '</div>';
      utils.printToDom('projects', domString);
      $('body').on('mouseenter', '.my-button', buttonHoverEvent);
      $('body').on('mouseleave', '.my-button', buttonHoverExitEvent);
    })
    .catch((err) => console.error(err));
};

export default { printProjects };
