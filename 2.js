


//p5-part
let img;
let brain;
let bg;
let button;
var counter=0;
let buttonclicked = false;
$(document).ready(function(){



});
function preload() {
  brain = loadImage('images/brain.png');
  // img = loadImage('images/earth.png');
  // bg = loadImage('images/bg.jpg');

 inconsolata = loadFont('images/Dokdo/Dokdo.ttf');

}

function setup() {

  createCanvas(windowWidth, windowHeight,WEBGL);
  textFont(inconsolata);
   textSize(width / 8);
   textAlign(CENTER, CENTER);
   // button = createButton(" > ");



}

function draw() {
background(247,179,43);
// push();
// texture(bg);
// rect(-width/2,-height/2,windowWidth*1.3, windowHeight)
// pop()
push();
texture(brain);
noStroke();
translate(0,height/2)
rotateZ(frameCount * 0.05);
ellipseMode(CENTER);
ellipse(0,0,1500,1500);
pop();
translate(0,height/2)




rotateZ(frameCount * 0.01 )
text('Am I being\ntoo picky?', 0, -1000);

rotate(-PI/2)
text('It is my fault\nif I still \ndont want to marry\neven if I am about\nto turn 30?', 0, -1200);

rotate(-PI)
text('Do I have to\nget married?', 0, -1000);

rotate(-(PI+PI/2))
text('Should I\nmake some changes?', 0, -1000);


// button.position(width / 2-60, height / 2 - 300);
//
//  button.mousePressed(changePage);
}
 function changePage(){
   console.log("hi")

};




var aText = new Array(
  "Talking with Lorna has got me thinking so much and tons of questions just occupy my brain..."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("page2_text");
// console.log(destination.getBoundingClientRect().top);
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 300);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
}
//console.log(iIndex);
 if(iIndex == 1){
console.log("finished");
// page3button.style.display = "block";
$('canvas').fadeIn(1000);
$("#p5button").fadeIn(5000);

myMove();
 }

}

typewriter();


function myMove() {
  //get the typing text div
  var text = document.getElementById("page2_text");

  var pos = text.getBoundingClientRect().top;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos--;
      text.style.top = pos + "px";
      // elem.style.left = pos + "px";
    }
  }
}
