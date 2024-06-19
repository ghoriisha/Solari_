
$(document).ready(function () {
    
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);

    $('#portfolio').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive:{
            1440:{
                items:4
            },
            992:{
                items:3
            },
            768:{
                items:2
            },
            320:{
                items:1
            }
        }
    })
    $('#blog').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 10,
        nav: false,
        autoplay: true,
        // responsive:{
        //     600:{
        //         items:1
        //     }
        // }
    })
});

$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0";
  
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
  
      const increment = target / 200;
      console.log(increment);
  
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
  
    updateCounter();
  });