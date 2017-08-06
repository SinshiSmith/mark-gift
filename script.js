$(function (){ var sound = new Howl({
  src: ['Hey-Jude.mp3']
});

sound.play();
$(window).scroll(function() {
  var x = $(document).scrollTop();
  var z = $(window).innerHeight();
  if (x  > (z*1.5) ){
    $("#w2").css({"opacity" : "1"});
  }
  else {
    $("#w2").css({"opacity" : "0"});
  }
  if (x  > (z*2.5) ){
    $("#w3").css({"opacity" : "1"});
  }
  else {
    $("#w3").css({"opacity" : "0"});
  }
  if (x  > (z*3.5) ){
    $("#w4").css({"opacity" : "1"});
  }
  else {
    $("#w4").css({"opacity" : "0"});
  }
  if (x > (z * 3.5)) {
  $("#massage").css({opacity: (x-3.5*z) / ((3/7) * z)})
}
});
});
