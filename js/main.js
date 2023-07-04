$(document).ready(function(){
    $("#photo-carousel").owlCarousel({
        items: 1,
        loop: true
    });
  });


  $(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
    e.preventDefault();
    var t = 1000;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({ scrollTop: $(d).offset().top -200 }, t);
    });
    });



    $(document).ready(function(){
      $("#photo-carousel-2").owlCarousel({
          items: 1,
          loop: true
      });
    });

    $(document).ready(function(){
      $("#photo-carousel-mobile-1").owlCarousel({
          items: 1,
          loop: true
      });
    });
  
    $(document).ready(function(){
      $("#photo-carousel-mobile-2").owlCarousel({
          items: 1,
          loop: true
      });
    });
  


    const nav = document.querySelector('.mobile-nav');
    const navBtn = document.querySelector('.menu');
    const closeBtn = document.querySelector(".close")
    const link = document.querySelector(".mobile-nav__list")
    
    navBtn.onclick = ()=>{
        nav.classList.toggle('open')
    }
    
    closeBtn.onclick = () => {
        nav.classList.toggle('open')
    }

    link.onclick = () => {
      console.log(1)
      nav.classList.toggle('open')
    }

    

