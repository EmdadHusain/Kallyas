$(document).ready(function () {
  // $('.main-menu').meanmenu({
  //   meanMenuContainer: '#mobile-menu',
  //   meanScreenWidth: 991,
  // });
  $(window).on('scroll',function(){
    if($(this).scrollTop()>100){
      $(".top-header").addClass("sticky");
      $(".scroll_icn").css("display","block");
    }else{
      $(".top-header").removeClass("sticky");
      $(".scroll_icn").css("display","none");
    }
  });
  $(".scroll_icn").on('click',function(){
    $('html,body').animate({
      scrollTop:0
    },500)
  });
  $('.business-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
  });
  $('.project-titles li').click(function () {
    var selector = $(this).attr('data-filter');
    $('.projects').isotope({
      filter: selector,
    });
  });
  $('.video-play-btn').magnificPopup({
    type: 'video',
  });
});
