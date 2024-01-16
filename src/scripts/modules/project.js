import { dateProperty, checklistProperty } from './sharedProperties.js';
import { createTodo } from './todo.js';
import { throwError, validateString, completeAssign, defineNonWritableProperty } from '../utilities.js';

export const createProject = (title, dueDate = null) => {
  if (!title) return throwError('Give your Project a title!');

  let project = {
    title: validateString(title),
  }

  defineNonWritableProperty(project, "todos", {
    value: checklistProperty(createTodo),
  });

  return completeAssign({}, project, dateProperty(dueDate));
}