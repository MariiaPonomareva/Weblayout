let swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
    }
  }
});


document.querySelectorAll('.how-we-work__step').forEach(function (tabsLink) {
  tabsLink.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.how-we-work__step').forEach(function (link) {
      link.classList.remove('how-we-work__step_active')
    });
    e.currentTarget.classList.add('how-we-work__step_active');
    document.querySelectorAll('.how-we-work__item-wrapper').forEach(function (tabsLink) {
      tabsLink.classList.remove('how-we-work__item_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__item_active');
    });
});


new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion_active'
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav-link');

burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger_active');

    menu.classList.toggle('header__nav_active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {

    burger.classList.remove('burger_active');

    menu.classList.remove('header__nav_active');

    document.body.classList.remove('stop-scroll');
  })
})


let search = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__search-form');
let searchFormClose = document.querySelector('.header__search-close');

search.addEventListener('click',

  function() {

    search.classList.add('header__search_unactive');

    searchForm.classList.add('header__search_active');
  })

  searchFormClose.addEventListener('click',

  function() {

    search.classList.remove('header__search_unactive');

    searchForm.classList.remove('header__search_active');
  })


