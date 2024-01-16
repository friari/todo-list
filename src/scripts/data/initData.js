import { createProject } from '../modules/project.js';
import { createTodo } from '../modules/todo.js';

const initData = () => {
  const defaultProject = createProject('default', new Date());
  console.log(defaultProject.dueDate);
  const initialTodo = createTodo({ title: 'Initial Todo' });
  defaultProject.todos.addExisting(initialTodo);
  return [defaultProject];
}

export default initData;