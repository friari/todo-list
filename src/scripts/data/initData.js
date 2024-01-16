import { storeData, fetchData, convertData } from './handleData.js';
import { createProject } from '../modules/project.js';
import { createTodo } from '../modules/todo.js';

const initData = () => {
  let fetchedData = fetchData();

  if (fetchedData) {
    return convertData(fetchedData);
  }

  const defaultProject = createProject('default', new Date());
  const initialTodo = createTodo({ title: 'Initial Todo' });
  defaultProject.todos.addExisting(initialTodo);

  let returnData = [defaultProject];
  storeData(returnData);

  return returnData;
}

export default initData;