import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allProjects = response.data;
      const availableProjects = [];
      Object.keys(allProjects).forEach((project) => {
        if (allProjects[project].available) {
          availableProjects.push(allProjects[project]);
        }
      });
      resolve(availableProjects);
    })
    .catch((err) => reject(err));
});
export default { getProjects };
