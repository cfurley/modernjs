const themeButton = document.getElementById('theme-button');

const onClick = () => {
  if (document.body.style.backgroundColor == 'white') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    themeButton.innerText = 'Toggle Light Mode';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    themeButton.innerText = 'Toggle Dark Mode'
  }
}

themeButton.addEventListener('click', onClick);