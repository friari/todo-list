import { addSubItem, formatDate } from './sharedFunctions.js';
import { throwError } from '../utilities.js';

// creating a checklist array, adding to checklist with return value of constructor param
export const checklistProperty = (constructor) => {
  let checklist = [];

  return {
    get list() {
      return checklist;
    },
    add: (...args) => {
      return addSubItem(checklist, constructor, args)
    },
    addExisting: (item) => checklist.push(item),
    clear: () => checklist = [],
  }
}

// getting/setting date property
export const dateProperty = (dateStr = '') => {
  let date = dateStr ? formatDate(dateStr) : false;

  return {
    get dueDate() {
      return date;
    },
    set dueDate(newDateStr) {
      date = formatDate(newDateStr);
    },
  }
}