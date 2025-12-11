/**
 * map() 
 * 
 * Used to do an operation on an array
 * and map that operation or change to a new returned array.
 * example below.
 */

// squaring the numbers [1:10]
const numbers = [1,2,3,4,5,6,7,8,9,10];
squares = numbers.map((number) => number * number);
console.log(numbers, "...mapped to...", squares);

// squaring x [-2:2] (parabola)
const x = [-2,-1,0,1,2];
const y = x.map((t) => t * t);
console.log(x, "...mapped to...", y)
