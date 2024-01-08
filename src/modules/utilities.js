// This is an assign function that copies full descriptors
// taken from mozilla docs for Object.assign
export function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

// defines property that cannot be overwritten on object (more secure)
export const defineNonWritableProperty = (obj, property, data) => {
  Object.defineProperty(obj, property, {
    ...data,
    writable: false,
    enumerable: true,
  });
}

// utility function for error handling
export const throwError = (message) => {
  throw new Error(message);
}

// validating string for properties
export const validateString = (str) => {
  if (!str) return throwError('Please enter a valid string');

  let string = str;
  return string;
}