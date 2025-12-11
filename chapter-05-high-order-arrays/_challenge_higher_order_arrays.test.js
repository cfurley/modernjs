import { challengeOne, challengeTwo, challengeThree } from './_challenge_higher_order_arrays.js'

console.log(challengeOne([
    { firstName: 'John', lastName: 'Doe', email: 'johndoe@email.com', age: '24'},
    { firstName: 'Jane', lastName: 'Doe', email: 'janedoe@email.com', age: '31'},
    { firstName: 'Jimmy', lastName: 'Doe', email: 'NA', age: '3'},
    { firstName: 'Barbra', lastName: 'Fawn', email: 'barb42@email.com', age: '55'},
    { firstName: 'Bob', lastName: 'Buck', email: 'bob@email.com', age: '23'},
]).toString());


console.log(challengeTwo([2, -30, 50, 20, -12, -9, 7]));
console.log(challengeThree(['coder', 'programmer', 'developer', 'enGineer']));
