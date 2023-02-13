const accordionItemHeaders = document.querySelectorAll(
  '.accordion-item-header'
);

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      '.accordion-item-header.active'
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle('active');
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

//Setting stopwatch

const countDown = document.querySelector('.timer');
const btnStart = document.querySelector('.button-start');
const btnStop = document.querySelector('.button-stop');
const btnReset = document.querySelector('.button-reset');
const titleOfPage = document.querySelector('.Title');
const containerApp = document.querySelector('body');

const updateCountDown = function () {
  const clock = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    countDown.textContent = `${min}:${sec}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      {
        containerApp.style.backgroundColor = 'Red';
      }
    }
    titleOfPage.textContent = `Keep learning! ${min}:${sec}`;
  };
  let time = 1500;

  const timer = setInterval(clock, 1000);

  const resetCountdown = function () {
    countDown.textContent = `25:00`;
    titleOfPage.textContent = `Take a breatch!`;
    clearInterval(timer);
  };

  btnStop.addEventListener('click', () => {
    clearInterval(timer);
  });

  btnReset.addEventListener('click', function () {
    resetCountdown();
  });

  clock();
};
btnStart.addEventListener('click', () => {
  updateCountDown();
  containerApp.style.backgroundColor = '';
  console.log('welcome');
});
//start counting

const makeNegative = function (e) {
  if (e > 0) {
    console.log(`-${e}`);
  } else {
    console.log(`${e}`);
  }
};

//////////////////////////////
/////// Smooth scrolling//////
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (l) {
  l.addEventListener('click', function (e) {
    e.preventDefault();
    const href = l.getAttribute('href');
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//////////////////////////////
//////Sticky navigation///////
const sectionObserveElement = document.querySelector('.part-1');
const observer = new IntersectionObserver(
  function (e) {
    const ent = e[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.querySelector('.headers').classList.add('sticky');
    }
  },
  {
    //in the view port
    root: null,
    threshold: 0,
  }
);
observer.observe(sectionObserveElement);
