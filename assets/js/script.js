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


// 슬라이더
let productSwiperInstances = [];

function initProductSwipers() {
    const swiperElements = document.querySelectorAll('.tab-contents .productSwiper');

    swiperElements.forEach((element, index) => {
        let nextEl, prevEl, paginationEl;

        if (index === 0) {
            nextEl = ".skt-next"; prevEl = ".skt-prev"; paginationEl = ".skt-pagination";
        } else if (index === 1) {
            nextEl = ".kt-next"; prevEl = ".kt-prev"; paginationEl = ".kt-pagination";
        } else {
            nextEl = ".uplus-next"; prevEl = ".uplus-prev"; paginationEl = ".uplus-pagination";
        }

        const swiperOptions = {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
            pagination: {
                el: paginationEl,
                clickable: true,
            }
        };

        const swiper = new Swiper(element, swiperOptions);
        productSwiperInstances[index] = swiper;
    });
}

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

// 제이쿼리
$(function () {
    initProductSwipers();

    $('.tab-btn').on('click', function () {

        const $this = $(this);
        const targetIndex = $this.data('index');

        // 탭 버튼 스타일, 슬라이더 이동
        $('.tab-btn').removeClass('active');
        $this.addClass('active');

        const width = $this.outerWidth();
        const left = $this.position().left;

        $('.tab-slider').css({ 'width': width + 'px', 'left': left + 'px' });

        // 탭 내용 전환
        $('.tab-contents .tab-content').addClass('hidden').removeClass('active');
        $('.tab-contents .tab-content[data-content-index="' + targetIndex + '"]').removeClass('hidden').addClass('active');

        $('.product-controls > div[data-index]').addClass('hidden');
        $('.product-controls > div[data-index="' + targetIndex + '"]').removeClass('hidden');

        if (productSwiperInstances[targetIndex]) {
            productSwiperInstances[targetIndex].update();
            productSwiperInstances[targetIndex].el.resize();
            productSwiperInstances[targetIndex].slideTo(0);
        }
    });

    // 폼
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