// 햄버거 메뉴 클릭하면 나오는 콘텐츠
hb();
function hb() {
  const hbMenu = document.querySelector('.hb-menu');
  const hbMenuOpen = document.querySelector('.hb-menu-open');
  const hbMenuImg = document.querySelector('.hb-menu-open .img-photo');
  const hbMenuAddress = document.querySelector('.hb-menu-open .address');
  
  hbMenu.addEventListener('click', () => {
    hbMenuBtn();
  });
  
  function hbMenuBtn() {
  
    if (hbMenu.className === 'hb-menu') {
      hbMenu.classList.add('activation')
      hbMenuOpen.classList.add('on');
      hbMenuImg.classList.add('on');
      hbMenuAddress.classList.add('on');
    } else {
      hbMenu.classList.remove('activation');
      hbMenuOpen.classList.remove('on');
      hbMenuImg.classList.remove('on');
      hbMenuAddress.classList.remove('on');
    }

  };
}