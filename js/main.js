// $(".category__item--nav").on(click, function (){
//   $(".category__sublist--nav").addClass(visible)
// });
$(function() {

  $(".reviews__slider").slick({
    infinite: true,
    fade: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  });

});