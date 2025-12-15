
const header = document.getElementById('header');
console.log(header);

header.remove();

const newHeader = document.createElement("h4");
newHeader.id = "newHeader";
newHeader.style.color = "yellow";
newHeader.innerText = "Hola Mundo!";

document.body.appendChild(newHeader);