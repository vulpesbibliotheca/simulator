/**
* Template Name: Mentor - v2.0.0
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i><img src="./Library/Images/icons8-menu-arredondado-32.png"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Initi AOS
  $(window).on('load', function() {
    AOS.init({
      duration: 1000,
      once: true
    });
  });

})(jQuery);

//Versão '?'
$(document).ready(function() {
  //variaveis utilizadas
  var $conteudo = $(".content");
  var $details = $(".details > p");
  var $show = $(".show");
  
  //esconde os detalhes
  $details.hide();
   
  //evento de mostrar e esconder ao clicar
   $show.click(function(e) {
     e.preventDefault();  
    $details.stop(true, false).slideToggle("slow");
  });
});

// New PopUp
function newPopup(elementIdName){
  var popup = document.getElementById(elementIdName);
  popup.classList.toggle("show");
  setTimeout(function(){ popup.classList.toggle("show"); }, 3000);
}

// URLs
var url = "none";
var btn = document.querySelector("#btn");

function openDoc(book) {

  switch (book) {
    case "Negro":
        url = "./Library/Documents/O Negro - Cruz e Souza.pdf";
        break;
    case "De amor e amizade":
      url = "./Library/Documents/De Amor e amizade - Clarice Lispector.pdf";
        break;
    case "Fazenda Modelo":
        url = "./Library/Documents/Fazenda Modelo - Chico Buarque de Holanda.pdf";
        break;
    case "O vendedor de passados":
        url = "./Library/Documents/O Vendedor De Passados - Jose Eduardo Agualusa.pdf";
        break;
    case "Paulicieia desvairada":
        url = "./Library/Documents/Paulicéia Desvairada, de Mário de Andrade.pdf";
        break;
    case "Ânsia Eterna":
        url = "./Library/Documents/Ânsia Eterna - Julia Lopes de Almeida.pdf";
        break;
    case "Boca do Inferno":
        url = "./Library/Documents/Boca do Inferno - Ana Miranda.pdf";
        break;
    case "Tratado sobre a Tolerância":
        url = "./Library/Documents/Tratado sobre a tolerância - Voltaire.pdf";
        break;
    case "Ética a Nicômaco":
        url = "./Library/Documents/Ética a Nicômaco - Aristóteles.pdf";
        break;
    default:
        url = "none";
}

  var win = window.open(url, '_blank');
  win.focus();
}

btn.addEventListener('click', function() {
    
  openDoc(url);

});
