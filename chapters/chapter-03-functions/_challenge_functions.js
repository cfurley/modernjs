/**
 * Challenge 1: Create a function getCelsius which
 * takes the temperature in F and returns it in C.
 * @param F temperature in fahrenheit.
 * @returns temperature in celsius.
 */
export const getCelsius = ( F ) => {
  return ( F - 32 ) * (5/9);
};