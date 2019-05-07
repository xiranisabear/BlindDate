
var page3button = document.getElementById('page3_button');
page3button.style.display = "none";
var aText = new Array(
  "~Diary 003~",
  "Once I went to college,",
  "my attentions was drawn to so many new things.",
  "I was busy with tests, clubs, internships and applying towards graduate schools.",
  "I was indulged in my own fantasy that I did not really think about dating someone.",
  "Still I thought it would be nice to have a relationship,",
  "but I was not forcing that to happen.",
  "Gradually, I have come to my late twentieth. Still single…"
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
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
 if(iIndex == 8){
console.log("finished");
page3button.style.display = "block";
 }

}


typewriter();


var doodle1, doodle2, doodle3, doodle4;
var doodleAssets = [];

var Doodle;
var doodles = [];
var doodleNum = 20;

function preload() {
  doodle1 = loadImage("images/college/career.png");
  doodle2 = loadImage("images/college/test.png");
  doodle3 = loadImage("images/college/club.png");
  doodle3 = loadImage("images/college/job.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  doodleAssets = [doodle1, doodle2, doodle3, doodle4];
    for (let i = 0; i < doodleNum; i++) {
    doodles[i] = new Doodle(random(width), random(-height,0), 100, int(random(0, 3)));
    }
}

function draw() {
  background(247,179,43);

  for (let i = 0; i < doodles.length - 1; i++) {
    doodles[i].update();
    doodles[i].checkEdge();
    doodles[i].display();
  }
}


function Doodle(x,y,s,num){
  this.num = num;

   this.pos = createVector(x,y);
  this.vel = createVector(0,random(1,5));
  this.acc = createVector();
  this.s = s;



  this.update = function() {

  this.pos.add(this.vel);
  this.vel.add(this.acc);


  }

  this.checkEdge = function() {
  if (this.pos.y>height){
    this.pos.y = 0;
  }
  }

  this.display = function() {

  image(doodleAssets[this.num], this.pos.x, this.pos.y, this.s, this.s);
  }
}
