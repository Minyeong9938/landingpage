let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".header-nav");
let closeBtn = document.querySelector(".close-btn");

const body = document.body;

let menuLinks = document.querySelectorAll(".header-menu li a");

btn.addEventListener('click', function () {
    menu.classList.add("on");
    body.classList.add("menu-open");
});

closeBtn.addEventListener('click', function () {
    menu.classList.remove("on");
    body.classList.remove("menu-open");
});

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove("on");
        body.classList.remove("menu-open");
    });
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


var reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".review-next",
        prevEl: ".review-prev",
    }
});


var productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".product-next",
        prevEl: ".product-prev",
    }
});

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