/**
 * Challenge 1: Create a function getCelsius which
 * takes the temperature in F and returns it in C.
 * @param F temperature in fahrenheit.
 * @returns temperature in celsius.
 */
export const getCelsius = ( F ) => {
  return ( F - 32 ) * (5/9);
};

/**
 * Challenge 2: Create a function minMax that takes an
 * array of numbers, and returns and object containing
 * the minimum and maximum numbers from the input.
 * @param numbers An array of numbers.
 * @returns An object containing the min and max numbers. 
 */
export const minMax = ( numbers ) => {
  const _min = Math.min(...numbers);
  const _max = Math.max(...numbers);
  return { min:_min, max:_max }; 
};