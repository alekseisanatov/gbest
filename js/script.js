$(document).ready(function(){
    $('.carousel__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      adaptiveHeight:true,
      autoplaySpeed: 4000,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
      responsive: [
        {
                breakpoint: 993,
                settings: {
                    dots: true,
                    arrows: false,                   
                }
        }
    ]
    });

    
  $(window).scroll(function() {
    if($(this).scrollTop() > 1600 && $(this).scrollTop() < 4300) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  
  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_link'),
    hamburger = document.querySelector('.hamburger'),
    intro = document.querySelector('.intro'),
    bgImg = document.querySelector(".burger__menu");


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        bgImg.classList.toggle("burger__menu-active");
        
    });

    

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            bgImg.classList.toggle("burger__menu-active");
            
        });
    });
});


// Modal 

  
});


document.addEventListener("touchstart", function() {}, true);
document.addEventListener("touchmove", function() {}, true);



