/**
 * Object Literal (user)
 */
const user = {
  name: 'John Doe',
  age: 24,
  email: 'johndoe@email.com'
};
console.log(user.name, user.email);

/**
 * Nested Objects (user2)
 */
const user2 = {
  name: 'John Doe',
  age: 24,
  isAdmin: true,
  address: {
    street: '123 N Street',
    state: 'AK',
    zip: '11111'
  }
}
console.log(user2.name, user2.address);

/**
 * Spread Operator for Objects
 */
const x = { a:1, b:2 };
const y = { c:3, d:4 };
let z = {...x, ...y};
console.log(z);