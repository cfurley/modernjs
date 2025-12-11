/**
 * FizzBuzz: Print the numbers from 1 to 100.
 * For multiples of three, print 'Fizz' instead of the number.
 * For multiples of five, print 'Buzz' instead of the number.
 * For numbers which are multiples of both three and five print 'FizzBuzz'.
 * @returns Null
 */
const fizzBuzz = () => {
  for (i = 1; i <= 100; ++i) {
    switch( true ) {
      case i % 3 == 0 && i % 5 == 0: console.log('FizzBuzz'); break;
      case i % 3 == 0:                console.log('Fizz'); break;
      case i % 5 == 0:                console.log('Buzz'); break;
      default:                        console.log(i); break;
    }
  }
};

fizzBuzz();