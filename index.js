// ========================================
// creating a portfolio tabbed component
// ========================================

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((currElem) => currElem.classList.remove('p-btn-active'));

  p_btn_clicked.classList.add('p-btn-active');

  //to find the number is data attr..

  const btn_num = p_btn_clicked.dataset.btnNumber;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((currElem) => currElem.classList.add('not-active'));

  img_active.forEach((currElem) => currElem.classList.remove('not-active'));
});

//=================
//Counter animation
//=================

const counterNumber = document.querySelectorAll('.counter-numbers');

const speed = 200;

counterNumber.forEach((currentElm) => {
  const updateNumber = () => {
    const targetNumber = parseInt(currentElm.dataset.number);

    const initialNumber = parseInt(currentElm.innerHTML);

    const increamentNumber = Math.trunc(targetNumber / speed);

    if (initialNumber < targetNumber) {
      currentElm.innerHTML = `${initialNumber + increamentNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper('.mySwiper', {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};
const widthSize = window.matchMedia('(max-width: 780px');
// call listener funtion at run time
myJsmedia(widthSize);
// attach listener function on state change
widthSize.addEventListener('change', myJsmedia);

// ===============
// swiper js code
// ===============

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Scroll top button

const heroSection = document.querySelector('.section-hero');

const footerElement = document.querySelector('.section-footer');

const scrollIcon = document.createElement('div');
scrollIcon.classList.add('scrollTop-style');

scrollIcon.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollIcon);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: 'smooth' });
};

scrollIcon.addEventListener('click', scrollTop);

// ======================
// creating a responsive navbar
// ======================

const mobile_nav = document.querySelector('.mobile-nav-btn');

const headerElm = document.querySelector('.header');

mobile_nav.addEventListener('click', () => {
  headerElm.classList.toggle('active');
});
