"use strict"
var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };
if (isMobile.any()){
      document.body.classList.add('_mobile');
}else{
      document.body.classList.add('_ps');
}
// Скрипт проверки устройства

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
      const headMenu = document.querySelector('.header__nav');
      iconMenu.addEventListener("click", function(e){
            iconMenu.classList.toggle('_active');
            headMenu.classList.toggle('_active');
      });
}
if (iconMenu.classList.contains('_active')){
      
}

// SLIDER

const block = document.querySelectorAll('.reviews__card');
const button = document.querySelectorAll('#button');
const positionClass = document.querySelector('.reviews__cards');
let num = 1;
let position;
block[num].className += ' reviews__card-active';
positionFunct()
function positionFunct(){
    function positionTimeout(){
        position = (window.outerWidth - parseFloat(block[num].offsetWidth)) / 2 - parseFloat(block[num].offsetLeft);
        // console.log(position);
        positionClass.style.setProperty('--position', position + 'px');
    }
    setTimeout(positionTimeout, 400);
};

button[0].addEventListener('click', (e) => {
    console.log('Prev')
    prevClick()
})
button[1].addEventListener('click', (e) => {
    console.log('Next')
    nextClick()
})
function nextClick(){
    if(num < block.length - 1){
    block[num].className = 'reviews__card';
    num++;
    block[num].className += ' reviews__card-active';
    positionFunct();
    }else{
        console.log('No next');
    }
}
function prevClick(){
    if(num > 0){
    block[num].className = 'reviews__card';
    --num;
    block[num].className += ' reviews__card-active';
    positionFunct()
    }else{
        console.log('No prev');
    }
}

// console.log(`ширена окна:${window.outerWidth} ширена блока:${parseFloat(block[num].offsetWidth)} / 2  отступ от левого края ${parseFloat(block[num].offsetLeft)} = ${position}`);
// console.log(block.length);



