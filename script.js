var counter = 1;

function openNav() {
var width = $(document).width();
console.log(width);
// document.getElementById("mySidenav").style.width = (width/3+50)+"px";
document.getElementById("mySidenav").style.width = width+"px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}







$(document).ready(function(){



// open&close side nav

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}



var receive = document.getElementById('receive');
var send = document.getElementById('send');
var button = document.getElementById('buttonsound');
   $("#chatmsg1").fadeIn(1000);
   receive.play();
  var page1button = document.getElementById('page1button');
  page1button.style.display = "none";
 $(".talkingtoLorna").click(function(){
  counter+=1;
if(counter == 2){
  send.play();
 $("#chatmsg2").fadeIn();
}
if(counter == 3){
    send.play();
 $("#chatmsg3").fadeIn();
}
if(counter == 4){
    send.play();
 $("#chatmsg4").fadeIn();
}
if(counter == 5){
     receive.play();
 $("#chatmsg5").fadeIn();
}
if(counter == 6){
     receive.play();
 $("#chatmsg6").fadeIn();
}
if(counter == 7){
     receive.play();
 $("#chatmsg7").fadeIn();
}
if(counter == 8){
     send.play();
 $("#chatmsg8").fadeIn();
}
if(counter == 9){
     receive.play();
 $("#chatmsg9").fadeIn();
}
if(counter == 10){
   receive.play();

 $("#chatmsg10").fadeIn();

 $("#page1button").fadeIn("slow");

}


});

});
