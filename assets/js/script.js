// 햄버거
let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".header-nav");

const body = document.body;
let menuLinks = document.querySelectorAll(".header-menu li a");
let btnIcon = btn.querySelector('i');

function toggleMenu() {
    menu.classList.toggle("on");
    body.classList.toggle("menu-open");

    if (menu.classList.contains("on")) {
        btnIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        btnIcon.classList.replace("fa-xmark", "fa-bars");
    }
}

btn.addEventListener('click', toggleMenu);

menuLinks.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
});

// 탭버튼
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

// 슬라이더
var productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".product-next",
        prevEl: ".product-prev",
    },
    pagination: {
        el: ".product-swiper-pagination",
    }
});

var reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".review-next",
        prevEl: ".review-prev",
    },
    pagination: {
        el: ".review-swiper-pagination",
    }
});

// 폼
$(function () {
    $("#fastform").on("submit", function (e) {
        e.preventDefault();

        let nameVal = $("#name").val();
        let phoneVal = $("#phone").val();
        let methodVal = $("#method").val();
        let modelVal = $("#model").val();

        let agreeChecked = $("#agree").prop("checked");

        if (nameVal === "" || phoneVal === "" || methodVal === "" || modelVal === "" || !agreeChecked) {


            if (nameVal === "") {
                $("#name").focus();
            } else if (phoneVal === "") {
                $("#phone").focus();
            } else if (methodVal === "") {
                $("#method").focus();
            } else if (modelVal === "") {
                $("#model").focus();
            } else if (!agreeChecked) {
            }
            return;
        }

        alert("접수되었습니다.");
    });
});