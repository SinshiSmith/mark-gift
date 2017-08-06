$(window).scroll(function() {
  var x = $(document).scrollTop();
  if (x  > 300){
    $("#w2").css({"opacity" : "1"});
  }
  if (x  > 600){
    $("#w3").css({"opacity" : "1"});
  }
  if (x  > 1000){
    $("#w4").css({"opacity" : "1"});
  }
  console.log(x);
});
