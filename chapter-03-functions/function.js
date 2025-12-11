/**
 * Logs "Hello" y "Hola".
 */
function sayHello() {
  console.log("Hello World");
  console.log("Hola Mundo")
}
sayHello();

/**
 * Recursive Fibonacci
 */
// function fibonacci( N ) {
//   if (N === 1) return 1;
//   return fibonacci( N-1 ) + fibonacci( N-2 );
// }
// fibonacci(5);


/**
 * Recursive Add First N numbers
 */
function addN( N ) {
  if ( N === 0 ) return 0;
  else return N + addN(N-1);
}
addN(5);