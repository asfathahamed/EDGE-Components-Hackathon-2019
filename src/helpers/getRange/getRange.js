/**
 * This helper is used to generate rating item based on min and max value
 *
 * @param {number} min - minimum value for rendering rating item
 * @param {number} max - maximum value for rendering rating item
 *
 * @returns {*} - returns new array with min and max value
 */
export const getRange = (min, max) =>
  Array(max - min + 1)
    .fill()
    .map((_, i) => min + i);
