import { createProject } from '../modules/project.js';
import { createTodo } from '../modules/todo.js';

export const fetchData = () => {
  const fetchedData = JSON.parse(localStorage.getItem("todoListData"));
  return fetchedData;
}

export const convertData = (data) => {
  const convertedData = data.map(project => {
    const currentProject = createProject(project.title, project.dueDate);
    
    currentProject.todos.list.forEach(todo => {
      const currentTodo = createTodo(todo);
      currentProject.addExisting(currentTodo);
    });

    return currentProject;
  });

  return convertedData;
}

export const storeData = (arr) => {
  let stringifiedData = JSON.stringify(arr);
  localStorage.setItem("todoListData", stringifiedData);
  return stringifiedData;
}