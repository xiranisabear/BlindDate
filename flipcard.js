$(document).ready(function(){
  console.log("ready")
var cards = document.getElementsByClassName("card");
console.log(cards)
var i;
for (i = 0; i < cards.length; i++) {
  cards[i].style.display = "none";
}

// var lornacard = document.getElementById('lornacard');

$("#character2").click(function(){
console.log("hi");
cards[0].style.display = "block";
});

$(".closecard").click(function(){
console.log("hi");
var i;
for (i = 0; i < cards.length; i++) {
  cards[i].style.display = "none";
}

});

$(".flip").click(function(){
  $(this).parents(".card").toggleClass("flipped");
});
$(".clickcard").click(function(){
  $(this).toggleClass("flipped");
});



});
