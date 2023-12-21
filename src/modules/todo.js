import { stringProperty, priorityProperty, completionProperty, checklistProperty, dateProperty } from './sharedProperties.js';
import { throwError } from './sharedFunctions.js';

// basic todo functionality for parent & child todos
export const createBasicTodo = (title, priority = 'medium') => {
  if (!title) return throwError('Give your Todo a title!');
  
  return {
    title: stringProperty(title),
    priority: priorityProperty(priority),
    isComplete: completionProperty(),
  }
}

// parent todo built off basicTodo using composition
export const createTodo = (title, description = '', priority = "medium", dueDate = null) => {
  return {
    ...createBasicTodo(title, priority),
    description: stringProperty(description),
    checklist: checklistProperty(createBasicTodo),
    date: dateProperty(dueDate),
  }
}