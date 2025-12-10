/**
 * CHALLENGE 1
 * Given a string.
 * Capitalize the first character.
 */
const capitalizeString = ( string ) => {
  string = string.toLowerCase(); // set entire string lowercase.
  string = string.split(' ');    // split up string into words (by spaces)
  string = string.map( (word) => {  // use map to map each word to its capitalized version,
    return word[0].toUpperCase() + word.substring(1,); // by setting the first character capital and adding the rest of the string.
  });
  return string;
}

console.log( capitalizeString('Hello World') );