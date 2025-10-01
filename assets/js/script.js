let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".header-nav");

let closeBtn = document.querySelector(".close-btn");
btn.addEventListener('click', function () {
    menu.classList.add("on");
});

closeBtn.addEventListener('click', function () {
    menu.classList.remove("on");
});


const tabs = document.querySelectorAll('.tab-btn');
const slider = document.querySelector('.tab-slider');

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const width = tab.offsetWidth;
        slider.style.width = `${width}px`;
        slider.style.left = `${tab.offsetLeft}px`;
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});