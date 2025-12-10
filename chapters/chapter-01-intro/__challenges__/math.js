let x;

x = Math.sqrt(9);
x = Math.abs(-5);
x = Math.round(4.2);
x = Math.ceil(4.2);
x = Math.floor(4.7);
x = Math.pow(2, 3);
x = Math.min(4,5);
x = Math.max(4,5);
x = Math.random();
x = Math.random() * 100;
x = Math.round( Math.random()*100 );

// Random generator {-100, ..., 100}
if (Math.random() > 0.5) x = Math.round( Math.random()*100 );
else x = -1 * Math.round( Math.random()*100 )

console.log(x);