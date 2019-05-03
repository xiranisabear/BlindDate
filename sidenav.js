
$(document).ready(function(){
  console.log("ready")
var cards = document.getElementsByClassName("cardcontainer");
console.log(cards)
var i;
for (i = 0; i < cards.length; i++) {
  cards[i].style.display = "none";
}

// var lornacard = document.getElementById('lornacard');
$("#character1").click(function(){
console.log("hi");
cards[0].style.display = "block";
});

$("#character2").click(function(){
console.log("hi");
cards[1].style.display = "block";
});

$("#character3").click(function(){
console.log("hi");
cards[2].style.display = "block";
});

$("#character4").click(function(){
console.log("hi");
cards[3].style.display = "block";
});

$("#character5").click(function(){
console.log("hi");
cards[4].style.display = "block";
});

$("#character6").click(function(){
console.log("hi");
cards[5].style.display = "block";
});

$("#character7").click(function(){
console.log("hi");
cards[6].style.display = "block";
});

$("#character8").click(function(){
console.log("hi");
cards[7].style.display = "block";
});

$(".closecard").click(function(){
console.log(this);
console.log("close"+cards);

var i;
for (i = 0; i < cards.length; i++) {
  cards[i].style.display = "none";
}

});

$(".flip").click(function(){
  console.log(this);
  $(this).parents(".card").toggleClass("flipped");
});
});
