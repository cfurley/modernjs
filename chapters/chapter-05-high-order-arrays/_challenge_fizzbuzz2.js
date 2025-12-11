function fizzBuzz() {
  for ( i = 1; i <= 100; ++i ) {
    i % 3?                 console.log('Fizz') : true;
    i % 5?                 console.log('Buzz') : true;
    !(i % 3) || !(i % 5)?  console.log(i): true;
  }
}
fizzBuzz();

// doesnt work correctly, but interesting attempt.