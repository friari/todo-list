import { checklistProperty, dateProperty } from './sharedProperties.js';
import { testPriority } from './sharedFunctions.js';
import { throwError, completeAssign, validateString, defineNonWritableProperty } from '../utilities.js';

// basic todo functionality for parent & child todos
export const createBasicTodo = ({ title, priority = 'medium' }) => {
  if (!title) return throwError('Give your Todo a title!');

  let todoTitle = validateString(title);
  let todoPriority = testPriority(priority);
  let completionStatus = false;
  const toggleStatus = () => completionStatus = !completionStatus;
  
  const todo = {
    get title() {
      return todoTitle;
    },
    set title(newVal) {
      todoTitle = validateString(newVal);
    },
    get priority() {
      return todoPriority;
    },
    set priority(newVal) {
      todoPriority = testPriority(newVal, todoPriority);
    },
    get complete() { 
      return completionStatus;
    },
  };

  defineNonWritableProperty(todo, "toggleStatus", {
    value: toggleStatus,
  });

  return todo;
}

// parent todo built off basicTodo using composition
export const createTodo = ({ title, description = '', priority = "medium", dueDate = null }) => {
  let basicTodo = createBasicTodo({ title, priority });

  const todoChecklist = checklistProperty(createBasicTodo);

  const currentTodo = {
    get description() {
      return description;
    },
    set description(newVal) {
      description = newVal;
    },
    get checklist() {
      return todoChecklist;
    }
  }

  return completeAssign({}, basicTodo, currentTodo, dateProperty(dueDate));
}