/** 
 * CHALLENGE 1
 * Given array [1:5]
 * Return array [6:0];
*/
const challengeOne = ( array ) => {
  array.push(6);
  array = array.reverse();
  array.push(0);
  return array;
}
console.log( challengeOne([1,2,3,4,5]) );

/**
 * CHALLENGE 2
 * Given arrays [1:5] and [5:10]
 * Return array [1:10]
 */
const challengeTwo = ( arr1, arr2 ) => {
  return [...arr1, ...arr2.splice(1,)];
}
console.log( challengeTwo([1,2,3,4,5], [5,6,7,8,9,10]) );