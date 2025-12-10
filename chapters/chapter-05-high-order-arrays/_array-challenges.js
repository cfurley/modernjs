/** 
 * CHALLENGE 1
 * Given an array of people.
 * Return an array of youngPeople <- everyone under 25 years old.
 */

const people = [
  { firstName: 'Caleb', lastName: 'Furley', email: 'caleb.furley@gmail.com', age: '24'},
  { firstName: 'Ivette', lastName: 'Furley', email: 'ivettestela22@yahoo.com', age: '31'},
  { firstName: 'Harry', lastName: 'Furley', email: 'NA', age: '3'},
  { firstName: 'Melinda', lastName: 'Furley', email: 'melinda.furley@yahoo.com', age: '55'},
  { firstName: 'Colton', lastName: 'Furley', email: 'colton.furley14@gmail.com', age: '23'},
]

const AGE_CUTOFF = 25;

youngPeople = people.filter((person) => {
  return person.age < AGE_CUTOFF;
});

console.log(youngPeople);



/**
 * CHALLENGE 2
 * Given an array of numbers
 * Return the sum of the positive & even integers.
 */

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.reduce( ( acc, cur ) => {
  if (cur % 2 === 0 && cur > 0) return acc + cur;
  else return acc;
});

console.log(positiveSum);