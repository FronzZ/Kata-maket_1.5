let swiper = null; // Объявляем переменную swiper

// ----->   Функция для инициализации Swiper   <-----
function initSwiper() {
    swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1.3,
        spaceBetween: 16,
    });
}

// ----->   Функция для уничтожения Swiper   <-----

function destroySwiper() {
    if (swiper !== null) {
        swiper.destroy(true, true);
        swiper = null;
    }
}

// ----->   Проверяем ширину экрана и инициализируем/уничтожаем Swiper   <-----

function checkScreenWidth() {
    if (window.innerWidth <= 767) {
        if (swiper === null) {
            initSwiper();
        }
    } else {
        destroySwiper();
    }
}

// ----->   Инициализация при загрузке страницы   <-----

checkScreenWidth();

// ----->   Слушаем изменения размера окна   <-----

window.addEventListener('resize', checkScreenWidth);

// ----->   Кнопка Показать все   <-----

const slideShowMore = document.querySelector('.slide-show-more');
const swiperWrapper = document.querySelector('.swiper-wrapper');
let slideShowMoreIcon = slideShowMore.querySelector('.slide-show-more__icon');
let slideShowMoreText = slideShowMore.querySelector('span');

slideShowMore.addEventListener('click', function() {
    if (slideShowMoreText.textContent === 'Показать все') {
        swiperWrapper.style.height = '100%'
        slideShowMoreText.textContent = 'Скрыть'
        slideShowMoreIcon.style.transform = 'rotate(180deg)'
    } else {
        swiperWrapper.style.height = '160px'
        slideShowMoreText.textContent = 'Показать все'
        slideShowMoreIcon.style.transform = 'rotate(0deg)'
    }
});
