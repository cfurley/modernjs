/**
 * Calculator Challenge: Create a function called calculator
 * that takes three parameters, num1, num2, and operator. The 
 * operator can be +,-,*,/ else return and error message.
 * @param num1 the first number.
 * @param num2 the second number.
 * @param operator the operator (+,-,*,/)
 * @returns A result of the calculation.
 */
export const calculator = ( num1, num2, operator ) => {
  switch( operator ) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': if (num2 === 0) { console.error('Division by 0'); return null; } 
              else return num1 / num2;
    default: console.error('Invalid Operator'); return null;
  }
}