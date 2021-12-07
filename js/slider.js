$(document).ready(function() { 

// ------------------scroll Scripts
var scrollLink = $('.scroll');

scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 500);
});


$(window).scroll(function() {
  var scrollBarLocation = $(this).scrollTop();
  scrollLink.each(function() {
    var divOffset = $(this.hash).offset().top

    if ( divOffset <= scrollBarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

// --------End----------scroll Scripts


$(".left-owl").owlCarousel({
            loop:true,
            autoplay:true,
            mouseDrag: false,
            autoplayTimeout: 5000,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            }
      }
});

$(".right-owl").owlCarousel({
            loop:true,
            autoplay:true,
            mouseDrag: false,
            autoplayTimeout: 5000,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            }
      }
});

$('.sticker-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});


$('.otskheli-images').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});

$('.chkadua-images').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});

$('.firosmani-images').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});

// Burger Menu
let burger = document.querySelector('#burger');
let hiddenBar = document.querySelector('#hidden-bar');
let menuBar = document.querySelector('.menu-bar');
let showSocialBox = document.querySelector('#show-social-box');
let showHiddenNameMenu = document.querySelector("#show-hidden-name-menu");
let menuItems = document.querySelector('.menu-item');

let desktopMenuSettings = function() {
    // Show hidden bar
    burger.addEventListener("click", burgerSettings);
    // Show social icons
    showSocialBox.addEventListener("click", socialBox);
    // Show artists name
    showHiddenNameMenu.addEventListener("click", artistsName);
}

let burgerSettings = function() {
    burger.classList.toggle("active");
    hiddenBar.classList.toggle("active");
};
let socialBox = function() {
    showSocialBox.classList.toggle("active");
};
let artistsName = function() {
    showHiddenNameMenu.classList.toggle("active");
};

desktopMenuSettings();

window.addEventListener("click", (e) => {

    // if(e.target != burger && e.target.parentNode != burger) {
    //     burger.classList.remove("active");
    //     hiddenBar.classList.remove("active");
    // } else {
    //     burger.classList.add("active");
    //     hiddenBar.classList.add("active");
    // }

    // if( (burger.classList.contains('active') && hiddenBar.classList.contains('active')) && ) {
        
    // }
    
});


// Mobile menu settings
let mobileBurger = document.querySelector("#mobile-burger");
let mobileHiddenBar = document.querySelector("#mobile-hidden-bar");
let showMobileSocialBox = document.querySelector("#show-mobile-social-box");

function responsiveMenuSettings(){

    mobileBurger.addEventListener("click", () => {
        mobileBurger.classList.toggle("active");
        mobileHiddenBar.classList.toggle("active");
    });
    // 
    showMobileSocialBox.addEventListener("click", () => {
        showMobileSocialBox.classList.toggle("active");
    });
}
responsiveMenuSettings();




// animate.css
$(".about-text h1").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInLeft",
    offset: 100
});

$(".about-text p").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInRight",
    offset: 100
});


$(".mobile-slider-wrapper").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInRight",
    offset: 100
});

$(".painter-img").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
});

$(".painter-text").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
});

$(".painter-slider").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
});


});  //  End ready
