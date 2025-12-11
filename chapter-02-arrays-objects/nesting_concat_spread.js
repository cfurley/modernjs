
/**
 * Nesting arrays examples
 */
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

x = fruits[3];

const allFruits = [fruits, berries];

x = allFruits;
x = allFruits[0];
x = allFruits[1];

x = allFruits[1][0];

/**
 * Spread Operator Examples
 */

x = [...fruits, ...berries];
// x = [...fruits];

const nums = [1, [2,3,[4],5],[6,7,8,[9,10]]];

x = nums;
x = nums.flat();
x = nums.flat().flat();

x = Array.from('12345');

console.log(x)
