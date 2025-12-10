/**
 * filter() 
 * 
 * Used to filter an array, and returns a copy of
 * original array with the filter applied.
*/

// creating numbers array to use
const numbers = [1,2,3,4,5,6,7,8,9,10];

// returns all even numbers with the filter method
const even_numbers = numbers.filter((number) => { 
  return number % 2 === 0;
});

// returning odd numbesr with the filter method.
const odd_numbers = numbers.filter((number) => number % 2 === 1);

console.log(numbers);
console.log(even_numbers);
console.log(odd_numbers);