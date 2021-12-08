window.addEventListener('load', () => {
  const html = document.querySelector('html');
  // const body = document.querySelector('body');
  // const wrap = document.querySelector('.wrap');
  const redImgIntro = document.querySelector('.red .img-intro');
  const redImgIntroNext = document.querySelector('.red .img-intro-next');

  const redNextImgIntro = document.querySelector('.red-next .img-intro');
  const redNextTitMotion = document.querySelector('.red-next .text-wrap .tit-motion');
  const redNextDescMotion = document.querySelector('.red-next .text-wrap .desc-motion');

  const skyNextTitMotion = document.querySelector('.sky .text-wrap .tit-motion');
  const skyNextDescMotion = document.querySelector('.sky .text-wrap .desc-motion');
  const skyImgIntro = document.querySelector('.sky .img-intro');
  const skyBox = document.querySelector('.sky .box');

  const balckDesc = document.querySelectorAll('.balck-title .desc-style .desc-motion');
  const balckTit = document.querySelectorAll('.balck-title .tit-style .tit-motion');

  const blueBg = document.querySelector('.blue-bg .img-intro');
  const blueBgBox = document.querySelector('.blue-bg .box');
  const blueBgDesc = document.querySelector('.blue-bg .desc-style .desc-motion');
  const blueBgTit = document.querySelectorAll('.blue-bg .tit-style .tit-motion');

  const blueImg = document.querySelector('.blue .img-intro');
  const blueBox = document.querySelector('.blue .box');
  const blueDesc = document.querySelector('.blue .desc-style .desc-motion');
  const blueTit = document.querySelectorAll('.blue .tit-style .tit-motion');

  const brownIntroImg = document.querySelector('.brown-intro .img-intro');
  const brownIntroDesc = document.querySelector('.brown-intro .desc-style .desc-motion');
  const brownIntroTit = document.querySelectorAll('.brown-intro .tit-style .tit-motion');
  
  const brownIntroNextImg = document.querySelector('.brown-intro-next .img-intro');
  const brownIntroNextBox = document.querySelector('.brown-intro-next .box');
  const brownIntroNextDesc = document.querySelector('.brown-intro-next .desc-style .desc-motion');
  const brownIntroNextTit = document.querySelectorAll('.brown-intro-next .tit-style .tit-motion');

  const brownLastImgIntro = document.querySelector('.brown-last .img-intro');
  const brownLastDesc = document.querySelector('.brown-last .desc-style .desc-motion');
  const brownLastTit = document.querySelectorAll('.brown-last .tit-style .tit-motion');

  const contentsLastImgIntro = document.querySelector('.contents-last .img-intro');
  const contentsLastBox = document.querySelector('.contents-last .box');

  // wrap.classList.add('on');
  redImgIntro.classList.add('on');
  redImgIntroNext.classList.add('on');
  
  window.addEventListener('scroll', scrollWork);

  scrollWork();
  function scrollWork() {
    // console.log(html.scrollTop);
    if (html.scrollTop > 369) {
      redNextImgIntro.classList.add('on');
      redNextTitMotion.classList.add('on');
      redNextDescMotion.classList.add('on');
    }
    if (html.scrollTop > 1482) {
      skyImgIntro.classList.add('on');
    }
    if (html.scrollTop > 1482) {
      skyBox.classList.add('on');
    }
    if (html.scrollTop > 1482) {
      skyNextTitMotion.classList.add('on');
      skyNextDescMotion.classList.add('on');
    }
    if (html.scrollTop > 2567) {
      for (let i = 0; i < balckDesc.length; i++) {
        balckDesc[i].classList.add('on');
      }
    }
    if (html.scrollTop > 3068) {
      for (let i = 0; i < balckTit.length; i++) {
        balckTit[i].classList.add('on');
      }
    }
    if (html.scrollTop > 4297) {
      blueBg.classList.add('on');
    }
    if (html.scrollTop > 4297) {
      blueBgDesc.classList.add('on');
    }
    if (html.scrollTop > 4297) {
      for (let i = 0; i < blueBgTit.length; i++) {
        blueBgTit[i].classList.add('on');
      }
    }
    if (html.scrollTop > 4380) {
      blueBgBox.classList.add('on');
    }
    if (html.scrollTop > 5312) {
      blueImg.classList.add('on');
    }
    if (html.scrollTop > 5692) {
      blueBox.classList.add('on');
    }
    if (html.scrollTop > 5622) {
      blueDesc.classList.add('on');
    }
    if (html.scrollTop > 5622) {
      for (let i = 0; i < blueTit.length; i++) {
        blueTit[i].classList.add('on');
      }
    }
    if (html.scrollTop > 6069) {
      brownIntroImg.classList.add('on');
    }
    if (html.scrollTop > 6985) {
      brownIntroDesc.classList.add('on');
    }
    if (html.scrollTop > 6985) {
      for (let i = 0; i < brownIntroTit.length; i++) {
        brownIntroTit[i].classList.add('on');
      }
    }
    if (html.scrollTop > 7485) {
      brownIntroNextBox.classList.add('on');
    }
    if (html.scrollTop > 7960) {
      brownIntroNextImg.classList.add('on');
    }
    if (html.scrollTop > 7960) {
      brownIntroNextDesc.classList.add('on');
    }
    if (html.scrollTop > 7960) {
      for (let i = 0; i < brownIntroNextTit.length; i++) {
        brownIntroNextTit[i].classList.add('on');
      }
    }
    if (html.scrollTop > 8660) {
      brownLastImgIntro.classList.add('on');
    }
    if (html.scrollTop > 8660) {
      brownLastDesc.classList.add('on');
    }
    if (html.scrollTop > 8660) {
      for (let i = 0; i < brownLastTit.length; i++) {
        brownLastTit[i].classList.add('on');
      }
    }
    if (html.scrollTop > 9820) {
      contentsLastImgIntro.classList.add('on');
    }
    if (html.scrollTop > 9820) {
      contentsLastBox.classList.add('on');
    }
    
    // 스크롤하면 숫자 카운터 올라가는 코드
    const count = document.querySelector('.count');
    // let scrollDown;
    if (html.scrollTop >= 1) {
      count.classList.add('on');
      count.classList.remove('change');

      let current = html.scrollTop / (html.offsetHeight - html.clientHeight);
      // let line = html.offsetWidth * current;
      let line = 100 * current;
      // console.log(line);
      if (isNaN(line)) {
        line = 0;
      }

      let decimalPoint = Math.ceil(line);
      // count.style.width = decimalPoint + 'px';
      count.textContent = decimalPoint;
      // scrollDown = decimalPoint
    } else {
      count.classList.remove('on');
    }
    if (html.scrollTop > 3136 && html.scrollTop < 7184) { // 3136px ~ 7184px
      count.classList.add('change');
    }

    // { // 스크롤하면 영역만큼 따라다니는 코드
    //   const title = document.querySelector('.red .text-wrap');
    //   if (html.scrollTop > 0 && html.scrollTop < 2000) {
    //     title.style.top = (scrollDown * 100) + 'px';
    //     title.style.transition = 'all 0.5s ease';
    //   }
    // }

    // let wrap = document.querySelector(".wrap");
    // let bar = document.querySelector('.bar');
    // let per = document.querySelector('.per');

    // wrap.addEventListener('scroll', function () {
    //   let scrollTop = wrap.scrollTop;
    //   let scrollHeight = wrap.scrollHeight - wrap.clientHeight;
    //   let percentage = (scrollTop / scrollHeight) * 100;
    //   if (isNaN(percentage)) percentage = 0;
    //   bar.style.width = percentage + '%';
    //   per.innerText = Math.floor(percentage) + '%';
    // });
  };
});
