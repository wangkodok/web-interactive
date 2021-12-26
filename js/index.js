// window.addEventListener('load', () => {
// });

const html = document.querySelector('html');

red();
function red() {
  const imgIntro = document.querySelector('.red .img-intro');
  const imgIntroNext = document.querySelector('.red .img-intro-next');

  imgIntro.classList.add('on');
  imgIntroNext.classList.add('on');
}


window.addEventListener('scroll', () => {
  headerArea()
  redNext();
  sky();
  balckTitle();
  blueBg();
  blue();
  brownIntro();
  brownIntroNext();
  brownIntroLast();
  contentsLast();
  scrolCount();
});


function redNext() {
  const imgIntro = document.querySelector('.red-next .img-intro');
  const desc = document.querySelector('.red-next .desc-motion');
  const tit = document.querySelector('.red-next .tit-motion');

  if (html.scrollTop > 369) {
    imgIntro.classList.add('on');
    desc.classList.add('on');
    tit.classList.add('on');
  }
};


function sky() {
  const imgIntro = document.querySelector('.sky .img-intro');
  const box = document.querySelector('.sky .box');
  const desc = document.querySelector('.sky .desc-motion');
  const tit = document.querySelector('.sky .tit-motion');

  if (html.scrollTop > 1482) {
    imgIntro.classList.add('on');
    box.classList.add('on');
    desc.classList.add('on');
    tit.classList.add('on');
  }
};


function balckTitle() {
  const desc = document.querySelectorAll('.balck-title .desc-style .desc-motion');
  const tit = document.querySelectorAll('.balck-title .tit-style .tit-motion');

  if (html.scrollTop > 2567) {
    for (let i = 0; i < desc.length; i++) {
      desc[i].classList.add('on');
    }
  }

  if (html.scrollTop > 3068) {
    for (let i = 0; i < tit.length; i++) {
      tit[i].classList.add('on');
    }
  }
};


function blueBg() {
  const imgIntro = document.querySelector('.blue-bg .img-intro');
  const box = document.querySelector('.blue-bg .box');
  const desc = document.querySelector('.blue-bg .desc-style .desc-motion');
  const tit = document.querySelectorAll('.blue-bg .tit-style .tit-motion');

  if (html.scrollTop > 4297) {
    imgIntro.classList.add('on');
    desc.classList.add('on');
    for (let i = 0; i < tit.length; i++) {
      tit[i].classList.add('on');
    }
  }

  if (html.scrollTop > 4380) {
    box.classList.add('on');
  }
};


function blue() {
  const imgIntro = document.querySelector('.blue .img-intro');
  const box = document.querySelector('.blue .box');
  const desc = document.querySelector('.blue .desc-style .desc-motion');
  const tit = document.querySelectorAll('.blue .tit-style .tit-motion');

  if (html.scrollTop > 5312) {
    imgIntro.classList.add('on');
  }

  if (html.scrollTop > 5692) {
    box.classList.add('on');
  }

  if (html.scrollTop > 5622) {
    desc.classList.add('on');
    for (let i = 0; i < tit.length; i++) {
      tit[i].classList.add('on');
    }
  }
};


function brownIntro() {
  const imgIntro = document.querySelector('.brown-intro .img-intro');
  const desc = document.querySelector('.brown-intro .desc-style .desc-motion');
  const tit = document.querySelectorAll('.brown-intro .tit-style .tit-motion');

  if (html.scrollTop > 6069) {
    imgIntro.classList.add('on');
  }
  if (html.scrollTop > 6985) {
    desc.classList.add('on');
    for (let i = 0; i < tit.length; i++) {
      tit[i].classList.add('on');
    }
  }
};


function brownIntroNext() {
  const imgIntro = document.querySelector('.brown-intro-next .img-intro');
  const box = document.querySelector('.brown-intro-next .box');
  const desc = document.querySelector('.brown-intro-next .desc-style .desc-motion');
  const tit = document.querySelectorAll('.brown-intro-next .tit-style .tit-motion');

  if (html.scrollTop > 7960) {
    imgIntro.classList.add('on');
    desc.classList.add('on');
    for (let i = 0; i < tit.length; i++) {
      tit[i].classList.add('on');
    }
  }
  if (html.scrollTop > 7485) {
    box.classList.add('on');
  }
};


function brownIntroLast() {
  const imgIntro = document.querySelector('.brown-last .img-intro');
  const desc = document.querySelector('.brown-last .desc-style .desc-motion');
  const tit = document.querySelectorAll('.brown-last .tit-style .tit-motion');

  if (html.scrollTop > 8660) {
    imgIntro.classList.add('on');
    desc.classList.add('on');
    for (let i = 0; i < tit.length; i++) {
      tit[i].classList.add('on');
    }
  }
};


function contentsLast() {
  const imgIntro = document.querySelector('.contents-last .img-intro');
  const box = document.querySelector('.contents-last .box');

  if (html.scrollTop > 9820) {
    imgIntro.classList.add('on');
    box.classList.add('on');
  }
};

// 스크롤하면 숫자 카운터 올라가는 코드
function scrolCount() {
  const count = document.querySelector('.count');
  if (html.scrollTop >= 1) {
    count.classList.add('on');
    count.classList.remove('change');

    let current = html.scrollTop / (html.offsetHeight - html.clientHeight);
    let line = 100 * current;

    if (isNaN(line)) {
      line = 0;
    }

    let decimalPoint = Math.ceil(line);
    count.textContent = decimalPoint;
  } else {
    count.classList.remove('on');
  }

  if (html.scrollTop > 3136 && html.scrollTop < 7184) { // 3136px ~ 7184px
    count.classList.add('change');
  }
};


// 스크롤하면 헤더가 고정하고 3136px ~ 7184px에서 색상이 변하는 코드
function headerArea() {
  const logo = document.querySelector('.header .logo a');
  const hbMenuLine = document.querySelectorAll('.hb-menu .line-wrap .line');

  if (html.scrollTop >= 1) {
    logo.classList.remove('on');
    for (let i = 0; i < hbMenuLine.length; i++) {
      hbMenuLine[i].classList.remove('on');
    }
  }

  if (html.scrollTop > 3136 && html.scrollTop < 7184) { // 3136px ~ 7184px
    logo.classList.add('on');
    for (let i = 0; i < hbMenuLine.length; i++) {
      hbMenuLine[i].classList.add('on');
    }
  }
};
