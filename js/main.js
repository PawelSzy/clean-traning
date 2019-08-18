$(document).ready(function(){
    $('.carousel-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev fas fa-angle-left slick-arrow" aria-label="Previous" style="display: block;"></div>',
        nextArrow: '<div class="slick-next fas fa-angle-right slick-arrow" aria-label="Previous" style="display: block;"></div>',
        variableWidth: true,
    });
    $('.explore-link__outside_link').click(function() {
        console.log('test');
        $(this).children('.explore-link__inside-link').toggle();
    });
});
