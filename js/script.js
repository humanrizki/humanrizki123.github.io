const nama = document.querySelector('.nama');
const pbaru = document.createElement('p');
const teksp = document.createTextNode('Muhammad Rizki | XI RPL 1');
const p = document.querySelector('.p');
const childp = document.querySelector('div.about div.tentang div.p > p');
const navbarlist = document.querySelector('div.nav');

function myFunction(x) {
    if (x.matches) { // If media query matches
      nama.style.display = 'none';
      pbaru.appendChild(teksp);
      p.insertBefore(pbaru, childp);
      pbaru.classList.add('pbaru');
      navbarlist.style.display = 'none';
    } else {
      nama.style.display = 'block';
    }
  }
nama.style.display = 'none';
let x = window.matchMedia("(min-width: 900px)");
myFunction(x);
x.addEventListener('change',myFunction);
