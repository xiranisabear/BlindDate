var counter = 1;


$(document).ready(function(){
var width = $(".number").width();
console.log(width);
$("#chatmsg1").fadeIn(1000);



 $("body").click(function(){
  counter+=1;

if(counter == 2){
  $("#chatmsg1").fadeOut();
 $("#chatmsg2").fadeIn();
}
if(counter == 3){
$(".number").width(width+30);
 $("#chatmsg2").fadeOut();
 $("#chatmsg3").fadeIn();
}
if(counter == 4){
$(".number").width(width+60);
    $("#chatmsg3").fadeOut();
    $("#chatmsg4").fadeIn();
}
if(counter == 5){
  $("#chatmsg4").fadeOut();
  $("#chatmsg5").fadeIn();
}
if(counter == 6){
  $(".number").width(width+90);
  $("#chatmsg5").fadeOut();
  $("#chatmsg6").fadeIn();
}
if(counter == 7){
  $("#chatmsg6").fadeOut();
  $("#chatmsg7").fadeIn();
}
if(counter == 8){
  $(".number").width(width+120);
  $("#chatmsg7").fadeOut();
  $("#chatmsg8").fadeIn();
}
if(counter == 9){
  $("#chatmsg8").fadeOut();
  $("#chatmsg9").fadeIn();
}
if(counter == 10){
  $(".number").width(width+150);
  $("#chatmsg9").fadeOut();
  $("#chatmsg10").fadeIn();

}
if(counter == 11){

  $("#chatmsg10").fadeOut();
  $("#chatmsg11").fadeIn();

}
if(counter == 12){
  $(".number").width(width+180);
  $("#chatmsg11").fadeOut();
  $("#chatmsg12").fadeIn();

}
if(counter == 13){
  $(".number").width(width+210);
  $("#chatmsg12").fadeOut();
  $("#chatmsg13").fadeIn();

}
if(counter == 14){
  $(".number").width(width+240);
  $("#chatmsg13").fadeOut();
  $("#chatmsg14").fadeIn();

}
if(counter == 15){
  $(".number").width(width+270);
  $("#chatmsg14").fadeOut();
  // $("#chatmsg15").fadeIn();

  $("#chatmsg15").fadeTo(1000, 0.0, 'swing', function() {

    $("#chatmsg15").fadeTo(1000, 1.0, 'swing', function() {
      $('body').fadeOut('slow', newpage);

    });
  });


}


});

function newpage() {
window.location = 'chapter3.html';
}

});
