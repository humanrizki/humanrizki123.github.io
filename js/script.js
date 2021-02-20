window.onload = ()=>{
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
  const matahari = document.querySelector('div.logo i:nth-child(1)');
  const bulan = document.querySelector('div.logo i:nth-child(2)');
  const gambarjava = document.querySelectorAll(' div.java div:nth-child(1), div.java div:nth-child(3), div.java div:nth-child(5), div.java div:nth-child(7), div.java div:nth-child(9)');
  const rangep = document.querySelectorAll(' div.java div.range:nth-child(2) p, div.java div.range:nth-child(4) p, div.java div.range:nth-child(6) p, div.java div.range:nth-child(8) p, div.java div.range:nth-child(10) p');
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
    });
  });
  checkbox.addEventListener('change',() => {
      document.body.classList.toggle('dark');
      aboutp.classList.toggle('boxp');
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
      matahari.classList.toggle('matahari');
      bulan.classList.toggle('bulan');
      gambarjava[0].classList.toggle('gambar1');
      gambarjava[1].classList.toggle('gambar2');
      gambarjava[2].classList.toggle('gambar3');
      gambarjava[3].classList.toggle('gambar4');
      gambarjava[4].classList.toggle('gambar5');
      rangep[0].classList.toggle('rangep1');
      rangep[1].classList.toggle('rangep2');
      rangep[2].classList.toggle('rangep3');
      rangep[3].classList.toggle('rangep4');
      rangep[4].classList.toggle('rangep5');
  });
  
  
}
