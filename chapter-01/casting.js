
// creating a variable.
let amount = '100'
console.log("before cast:", typeof(amount));

// casting to Number.
amount = Number(amount);
console.log("after cast:", typeof(amount));

// using toString to cast.
amount = amount.toString();
console.log("after toString:", typeof(amount));

// casting number to bool
let result = 0;
console.log(Boolean(result));
result = 1;
console.log(Boolean(result));