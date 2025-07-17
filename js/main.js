
$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 1000
    });
  });

  $('.counter').counterUp({
    delay: 20,
    time: 1500
  });

});
