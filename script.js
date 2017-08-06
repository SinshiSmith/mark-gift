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
 //  if (x  > (z* 3.8) ) {
 //   $("#massage").fadeIn(1000);
 // }
 // else if (x  < (z* 3.6)) {
 //   $("#massage").fadeOut();
 // }
});
