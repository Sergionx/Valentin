/**
 * Generates a random number between min and max (inclusive).
 *
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @returns {number} A random number between min and max.
 */
export function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}
