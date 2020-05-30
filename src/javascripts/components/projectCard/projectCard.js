const techSplitter = (str) => str.split(', ');

const buildProjectCard = (project) => {
  const techUsed = techSplitter(project.technologiesUsed);
  let domString = '';
  domString += '<div class="col-md-6 mb-5">';
  domString += '<div class="card project-card mx-auto">';
  domString += '<div class="project-details mx-3">';
  domString += `<h3>${project.title}</h3>`;
  domString += `<p>${project.description}</p>`;
  domString += '</div>';
  domString += '<div class="project-btns">';
  domString += `<button class="project-Url-button my-button grow mt-1 mx-3"><a href=${project.url} target="_blank">Demo</a></button>`;
  domString += `<button class="github-Url-button my-button grow mt-1 mx-3"><a href=${project.githubUrl} target="_blank">GitHub</a></button>`;
  domString += '</div>';
  domString += '<div class="tech-used">';
  domString += '<h6>TECH USED</h6>';
  domString += '<ul>';
  techUsed.forEach((tech) => {
    domString += `<li>${tech}</li>`;
  });
  domString += '</ul>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildProjectCard };
