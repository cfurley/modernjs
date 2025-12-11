/**
 * The "foreach" higher order array method takes
 * another function as the input. You can pass "items"
 * from the array into the inner function and work with the data.
 * 
 * On line 13, I commented out other possible parameters for the
 * passsed parameters that can go to the inner function.
 */

// creating an array
const guns = ["Glock 22", "PSA Dagger", "Taurus G3", "AKM"];

// for each item in the array: logging the item.
guns.forEach(
  function (item, /* element, index, array */) {
    console.log(item);
  }
);

/**
 * You can also loop over objects with the "foreach" loop as well.
 */

// creating an array of objects.
const socials = [
  { name: 'Twitter', url: 'https://twitter.com'},
  { name: 'LinkedIn', url: 'https://linkedin.com'},
]

// printing each object in the array.
socials.forEach((object) => {
  console.log(object);
});
