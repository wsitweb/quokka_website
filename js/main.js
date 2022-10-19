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

// Скрипт добавления стиля по клику