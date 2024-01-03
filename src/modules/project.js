import { dateProperty, checklistProperty } from './sharedProperties.js';
import { createTodo } from './todo.js';
import { throwError, validateString } from './utilities.js';

export const createProject = (title, dueDate = null) => {
  if (!title) return throwError('Give your Project a title!');

  return {
    title: validateString(title),
    dueDate: dateProperty(dueDate),
    todos: checklistProperty(createTodo),
  }
}