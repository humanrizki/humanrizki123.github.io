const nama = document.querySelector('.nama');
const about = document.querySelector('div.bckgrd');
const pbaru = document.createElement('p');
const teksp = document.createTextNode('Muhammad Rizki | XI RPL 1');
const p = document.querySelector('.p');
const childp = document.querySelector('div.about div.tentang div.p > p');
const navbarlist = document.querySelector('div.nav');
const scrolluptolayer = document.querySelector('div.scroll');
const imgbaru = document.createElement('img');
const checkbox = document.getElementById('checkbox');
const aboutp = document.querySelector('div.about div.tentang div.p');
const alltagh =  document.querySelectorAll('div.about div.tentang h1, div.portfolio div.port h1, div.contact div.con h1');
const labell = document.querySelector('label');
const ball = document.querySelector('div.ball');
const email = document.querySelectorAll('div.email:nth-child(2) h3, div.email:nth-child(3) h3, div.email:nth-child(4) h3');
const gambaremail = document.querySelectorAll('div.email img');
console.log(gambaremail);
console.log(email);
console.log(alltagh);
console.log(labell);
console.log(ball);
 myFunction = x => {
    if (x.matches) { // If media query matches
      nama.style.display = 'none';
      pbaru.appendChild(teksp);
      p.insertBefore(pbaru, childp);
      pbaru.classList.add('pbaru');
      navbarlist.style.display = 'none';
      scrolluptolayer.appendChild(imgbaru);
      imgbaru.src = 'image/up-arrow.png';
      imgbaru.classList.add('gambarbaru');
    } else {
      nama.style.display = 'block';
      labell.style.display = 'none';
      checkbox.style.display = 'none';
    }
  }
checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
    aboutp.style.boxShadow = '5px 5px #fff';
    alltagh[0].classList.toggle('white');
    alltagh[1].classList.toggle('white');
    alltagh[2].classList.toggle('white');
    email[0].classList.toggle('email2');
    email[1].classList.toggle('email3');
    email[2].classList.toggle('email4');
    gambaremail[0].classList.toggle('img1');
    gambaremail[1].classList.toggle('img2');
    gambaremail[2].classList.toggle('img3');
    labell.classList.toggle('labels');
    ball.classList.toggle('balls');
});
let x = window.matchMedia("(min-width: 900px)");
myFunction(x);
x.addEventListener('change',myFunction);
window.addEventListener('scroll',() => {
    if (x.matches && window.scrollY >= 240){
      imgbaru.style.display = 'block';
    } else {
      imgbaru.style.display = 'none';
    }
});
imgbaru.addEventListener('click', () => {
  window.scrollTo({
        top: about.offsetTop,
        behavior: 'smooth'
  })
});
