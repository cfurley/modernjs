/**
 * reduce()
 *  
 * Used to reduce an array to a single value.
 * For example, a shopping cart can be reduced to the total price.
 *   previousValue (acumulator) stores value from previous iteration e.g. sum
 *   currentValue is the current value in the array on that iteration e.g. item
 */

const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce(( acumulator, currentValue ) =>{
  return acumulator + currentValue;
});

console.log(sum);