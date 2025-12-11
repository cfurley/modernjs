let d;

d = new Date(); // object
d = d.toString(); // pure string
d = new Date(2022, 2, 29); // month is 0 indexed

let x;

x = d.getDate();
x = d.getDay();
x = d.getFullYear();
x = d.getMilliseconds();
x = d.getSeconds();
x = d.getMinutes();

console.log(d);
console.log(x);