$(function () {

  //메뉴
  $('#headerWrap .depth01 li h2 a').mouseover(function () {
    $('#headerWrap').addClass('active');
    $('.headerBox').addClass('active');
    $('#headerWrap .submenuBox').removeClass('active');
    $(this).parents('li').find('.submenuBox').addClass('active');
  });
  $('#headerWrap').mouseleave(function () {
    $('#headerWrap').removeClass('active');
    $('.headerBox').removeClass('active');
    $('#headerWrap .submenuBox').removeClass('active');
  });

  //모바일 메뉴
  $('#headerWrap .mobileMenuBtn').click(function () {
    $('body').addClass('of');
    $(".mobileMenuBox").animate({
      right: 0
    }, 500)
    $('#headerWrap .bg').show();
  });
  $('.mobileDepth01 li h2 a').click(function () {
    if ($(this).parents('li').find('.mobileDepth02').length) {
      if ($(this).parent('h2').hasClass('active')) {
        $(this).parents('li').find('.mobileDepth02').slideUp();
        $(this).parent('h2').removeClass('active');
      } else {
        $('.mobileDepth01 li').find('.mobileDepth02').slideUp();
        $(this).parents('li').find('.mobileDepth02').slideDown();
        $('.mobileDepth01 li').find('h2').removeClass('active');
        $(this).parent('h2').addClass('active');
      }
      return false;
    }
  });
  $('.mobileCloseBtn').click(function () {
    $('body').removeClass('of');
    $('.mobileMenuBox').animate({
      right: -3000
    }, 500);
    $('#headerWrap .bg').hide();
  });

  /* 사이트맵 */
  $("#headerWrap .sitemap").click(function () {
    $('.sitemapBox').addClass('active');
  });

  $('.sitemapBox .sitemapCloseBtn').click(function () {
    $('.sitemapBox').removeClass('active');
  });

  //스크롤 시 top 버튼 fadeIn, fadeOut
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });

  //상단으로 이동
  $("#top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
  });

  //푸터
  $(".footerBanner .slickWrap .slick").slick({
    variableWidth: true,
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: $('.footerBanner .control .prev'),
    nextArrow: $('.footerBanner .control .next'),
  });

  $('.footerBanner .slickWrap .control button').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('pause')) {
      $(this).hide();
      $('.footerBanner .slickWrap .control .play').show();
      $('.footerBanner .slickWrap .slick').slick('slickPause');
    } else if ($(this).hasClass('play')) {
      $(this).hide();
      $('.footerBanner .slickWrap .control .pause').show();
      $('.footerBanner .slickWrap .slick').slick('slickPlay');
    }
  });

});
