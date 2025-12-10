/**
 * Given an array of numbers.
 * Map them to a parobala. (y=x^2)
 */
const parobala = (X) => {
  return X.map( (x) => x*x );
};

console.log( parobala([-2,-1,0,1,2]) );
