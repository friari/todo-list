// testing priority
export const testPriority = (priority, oldPriority) => {
  const validPriorities = ['low', 'medium', 'high'];
  const formattedPriority = priority.toLowerCase();
  if (!validPriorities.includes(formattedPriority)) {
    console.warn('Invalid priority! Priority has been left as is or set to medium by default');
    return oldPriority ? oldPriority : 'medium';
  }

  return formattedPriority;
}

// adding a sub item to a project or task
export const addSubItem = (arr, constructor, args) => {
  try {
    const newItem = constructor(...args);
    arr.push(newItem);
    return arr;
  } catch (error) {
    console.error(error);
  }
}

// formatting date string and setting the time to the start
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date;
}

// toggling completion status
export const toggleCompletionStatus = (status) => {
  return !status;
}