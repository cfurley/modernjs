/** 
 * Challenge 1: Given an array of people,
 * return an array of youngPeople under 25 years old.
 * @param people An array of people. 
 * @returns An array of people under 25 years old.
 */
export const challengeOne = function ( people ) {
  const AGE_CUTOFF = 25;

  const youngPeople = people.filter((person) => {
    return person.age < AGE_CUTOFF;
  });

  return youngPeople;
}

/**
 * Challenge 2: Given an array of numbers, 
 * return the sum of the both Postitive and Even integers.
 * @param numbers An array of numbers.
 * @returns The sum of the both Postive and Even Integers 
 */
export const challengeTwo = function ( numbers ) {
  const positiveSum = numbers.reduce( ( acc, cur ) => {
    if (cur % 2 === 0 && cur > 0) return acc + cur;
    else return acc;
  });

  return positiveSum;
}

/**
 * Challenge 3: Given an array of words, 
 * return an array of capitalized words.
 * @param words An array of words.
 * @returns An array of capitalized words.
 */
export const challengeThree = function ( words ) {
  const wordsCapital = words.map( ( word ) => {
    word = word.toLowerCase();
    word = word[0].toUpperCase() + word.substring(1,);
    return word;
  });

  console.log(wordsCapital);
}
