$(function(){

  //メインイメージ
var $width =100 + '%'; 
var $height =700; 
var $interval = 3000; 
var $fade_speed = 1000; 
$("#slide ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
$("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
$("#slide ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#slide ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);

  //アコーディオン
  $('.faq-list-item').click(function() {

    var $answer = $(this).find('.answer');

    if($answer.hasClass('open')) {

      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
      
    } else {

      $answer.addClass('open'); 
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });
});