// header
const btnOpn = document.querySelector('.btn-opn');
const btnCls = document.querySelector('.btn-cls');
const nav = document.querySelector('.nav');
const bgOverlay = document.querySelector('.bg-overlay');

window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    if(this.window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 서브메뉴 위치 리셋
function closeAllSubMenus() {
    $('.gnb li .sub').slideUp(300); // 300ms 동안 슬라이드 업
    $('.btn-more').removeClass('active'); // 모든 .tit 요소에서 active 클래스 제거
}

btnOpn.addEventListener('click', () => {
    nav.classList.add('slide'); // 네비게이션 열기
    bgOverlay.classList.add('show'); // 배경 오버레이 보이기
});

btnCls.addEventListener('click', () => {
    nav.classList.remove('slide'); // 네비게이션 닫기
    bgOverlay.classList.remove('show'); // 배경 오버레이 숨기기
    closeAllSubMenus(); // 모든 서브 메뉴 닫기
});

// 배경 클릭 시 닫기
bgOverlay.addEventListener('click', () => {
    nav.classList.remove('slide'); // 네비게이션 닫기
    bgOverlay.classList.remove('show'); // 배경 오버레이 숨기기
    closeAllSubMenus(); // 모든 서브 메뉴 닫기
});

// 서브 메뉴 토글
function handleHover() {
    const isDesktop = window.innerWidth >= 1024;

    // 모든 이전 이벤트 제거
    $('.btn-more').unbind();
    $('.gnb li').unbind();

    if (isDesktop) {
        // 데스크탑 모드: 호버 이벤트 설정
        $('.gnb li').on('mouseover', function () {
            $(this).children('.sub').stop().slideDown();
        }).on('mouseout', function () {
            $(this).children('.sub').stop().slideUp();
        });
    } else {
        // 모바일 모드: 클릭 이벤트 설정
        $(".btn-more").on("click", function() {
            const $sub = $(this).closest('li').find('.sub');
            const $thisTit = $(this);

            if ($sub.is(':visible')) {
                $sub.slideUp(300);
                $thisTit.removeClass("active");
            } else {
                $('.gnb li .sub').slideUp(300);
                $('.btn-more').removeClass("active");
                $sub.slideDown(300);
                $thisTit.addClass("active");
            }
        });
    }
}

// 디바운스를 사용하여 resize 이벤트 최적화
function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 페이지 로드 및 창 크기 조정 시 실행
$(function () {
    handleHover();
    $(window).on('resize', debounce(handleHover, 300));
});

// 검색창
$(document).ready(function() {
    // .btn-search button을 클릭하면 .user-input 열기
    $('.btn-search button').on('click', function(event) {
        event.preventDefault(); // 기본 동작 방지
        $('.user-input').addClass('show'); // .user-input 보여주기
    });

    // Close .user-input when .btn-search-cls is clicked
    $('.btn-search-cls').on('click', function(event) {
        event.preventDefault(); // 기본 동작 방지
        $('.user-input').removeClass('show'); // .user-input 숨기기
    });
});

// main banner
$(function(){
    var swiper = new Swiper('.slide ', {
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        pagination: {//블릿 버튼
            el: '.slide .swiper-pagination',
            clickable: true,
        },
    });
});

// section1, section3
$(function(){
    var swiper = new Swiper('.gallery_inner', {
        slidesPerView: 2, // 기본값
        spaceBetween: 10,
        speed: 1500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        pagination: {
            el: '.gallery .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            570: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });
});

// section5
$(function(){
    var swiper = new Swiper('.event_inner ', {
        slidesPerView: 1,//보여지는 갤러리 수
        spaceBetween: 0,//갤러리 사이 간격
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        pagination: {//블릿 버튼
            el: '.event .swiper-pagination',
            clickable: true,
        },
    });
});

// section6
$(function(){
    var swiper = new Swiper('.flowslide_inner1', {
        slidesPerView: 5,
        spaceBetween: -820,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: -620,
            },
            1024: {
                spaceBetween: -300,
            }
        }
    });
    // $('.flowslide1 .swiper-slide').on('mouseover', function(){
    //     swiper.autoplay.stop();
    // });
    // $('.flowslide1 .swiper-slide').on('mouseout', function(){
    //     swiper.autoplay.start();
    // });
});

$(function(){
    var swiper = new Swiper('.flowslide_inner2', {
        slidesPerView: 5,
        spaceBetween: -820,
        speed: 3500,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: -620,
            },
            1024: {
                spaceBetween: -300,
            }
        }
    });
    $('.flowslide2 .swiper-slide').on('mouseover', function(){
        swiper.autoplay.stop();
    });
    $('.flowslide2 .swiper-slide').on('mouseout', function(){
        swiper.autoplay.start();
    });
});

// aos
AOS.init({
    duration: 1200 //aos 나타나는 속도
})