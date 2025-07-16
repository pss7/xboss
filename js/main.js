
$(function () {

  $(window).load(function () {
    $('#visualWrap').addClass('active');
  });

  $('.mainBox .leftBox .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.mainBox .leftBox .count').html('<em>' + i + '</em> / ' + slick.slideCount);

    var $text = $('.mainBox .leftBox .slideText');
    $text.removeClass('active').eq(currentSlide || 0).addClass('active');
  });

  $(".mainBox .leftBox .slick").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    speed: 1500,
    prevArrow: $('.mainBox .leftBox .prev'),
    nextArrow: $('.mainBox .leftBox .next'),
  });

  $('.mainBox .leftBox .control button').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('pause')) {
      $(this).hide();
      $('.mainBox .leftBox .control .play').show();
      $('.mainBox .leftBox .slick').slick('slickPause');
    } else if ($(this).hasClass('play')) {
      $(this).hide();
      $('.mainBox .leftBox .control .pause').show();
      $('.mainBox .leftBox .slick').slick('slickPlay');
    }
  });

});
