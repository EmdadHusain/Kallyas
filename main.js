$(document).ready(function () {
  $('.main-menu').meanmenu({
    meanMenuContainer: '#mobile-menu',
    meanScreenWidth:767,
  });
  $('.business-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:2500,
   
  });
  $(".project-titles li").click(function(){
    var selector= $(this).attr('data-filter');
    $('.project-lists').isotope({
        filter:selector
    })
})
$('.video-play-btn').magnificPopup({
  type:'video',
})

});

