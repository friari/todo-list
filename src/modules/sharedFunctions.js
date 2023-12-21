// utility function for error handling
export const throwError = (message) => {
  throw new Error(message);
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