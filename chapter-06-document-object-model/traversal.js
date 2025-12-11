const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[0].innerText;

parent.children[0].style.color = 'red';
parent.children[1].style.color = 'green';
parent.children[2].style.color = 'blue';

title = document.querySelector('.container').children[0];
title.style.color = 'yellow'

console.log(output);