$(function(){

$('.reviews-slider').slick({
   /* infinite:true,
    speed:700,
    slidesToShow:2,
    slidesToScroll:2,
    arrows:false,
    dots:true,
    arrows:true*/
    slidesToShow:2,
    slidesToScroll:2,
    dots:true,
    centerMode:false,
    responsive: [
        {
          breakpoint: 1340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
    ]

});

$('.menu__btn').click(function(event)
{
    $('.menu__list').slideToggle();
    $('body').toggleClass("scroll"); 

});




});