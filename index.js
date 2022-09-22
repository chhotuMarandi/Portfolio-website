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

const counters = document.querySelectorAll('.counter-number');

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const dataCount = Number(counter.getAttribute('data-target'));
    // console.log(dataCount);

    const initialData = Number(counter.innerHTML);
    const increamentData = dataCount / 100;

    if (initialData < dataCount) {
      counter.innerHTML = `${Math.round(initialData + increamentData)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerHTML = dataCount;
    }
  };

  updateCounter();
});

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
