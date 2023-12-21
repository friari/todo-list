import { addSubItem, formatDate } from './sharedFunctions.js';

// setting/getting basic string properties
export const stringProperty = (str) => {
  let string = str;
  return {
    get: () => string,
    set: (newValue) => string = newValue,
  }
}

// setting/getting the priority of a task
export const priorityProperty = (str) => {
  const testPriority = (priority, getter = null) => {
    const validPriorities = ['low', 'medium', 'high'];
    const formattedPriority = priority.toLowerCase();
    if (!validPriorities.includes(formattedPriority)) {
      console.warn('Invalid priority! Priority has been left as is or set to medium by default');
      return getter ? getter() : 'medium';
    }

    return formattedPriority;
  }

  let priority = testPriority(str);

  const getPriority = () => priority;

  return {
    get: getPriority,
    set: (newPriority) => priority = testPriority(newPriority, getPriority),
  }
}

// getting & updating the completion status of a task
export const completionProperty = () => {
  let isComplete = false;

  return {
    get: () => isComplete,
    check: () => isComplete = !isComplete,
  }
}

// creating a checklist array, adding to checklist with return value of constructor param
export const checklistProperty = (constructor) => {
  let checklist = [];

  return {
    get: () => checklist,
    add: (args) => addSubItem(checklist, constructor, args),
  }
}

// getting/setting date property
export const dateProperty = (dateStr = '') => {
  let date = formatDate(dateStr);

  const getDate = () => {
    if (!dateStr) return false;

    return date;
  }

  return {
    get: getDate,
    set: (newDateStr) => date = formatDate(newDateStr),
  }
}