const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

document.body.appendChild(div);

console.log(div);