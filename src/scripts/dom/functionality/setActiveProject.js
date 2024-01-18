import data from '../../data/activeData';

export const setActiveProject = (projectTitle = null) => {
  let activeProject = projectTitle ? data[0] : data[projectTitle];
  console.log(activeProject);
}

export default setActiveProject;