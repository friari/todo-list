import { addSubItem, formatDate } from './sharedFunctions.js';
import { throwError } from './utilities.js';

// creating a checklist array, adding to checklist with return value of constructor param
export const checklistProperty = (constructor) => {
  let checklist = [];

  return {
    view: checklist,
    add: (...args) => {
      return addSubItem(checklist, constructor, args)
    },
    addExisting: (item) => checklist.push(item),
    clear: () => checklist = [],
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