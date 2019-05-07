let stand;
let walk
var speed;
var x, y;
var imgSize;
let dateJosh;
let dateYu;
let dateXiaoFen;
let dateYeFan;
let dateLiu;
var textXpos;

var font;
var walkbutton;

var date1 = 0;
var date2 = 0;
var date3 = 0;
var date4 = 0;
var date5 = 0;


var xiranchatbox;
var datechatbox;
var yuchatbox;
var xiaofengchatbox;
var Yefanchatbox;
var Liulaoshichatbox;
var canvas;


var touched = false;
var conversation = false;

var stage = 0;

var fadespeed = 550;
function preload() {

  dateYu = createImg("images/dates/date1.gif");
  dateJosh = createImg("images/dates/date2.gif");
  dateXiaoFen = createImg("images/dates/date3.gif");
  dateYeFan = createImg("images/dates/date4.gif");
  dateLiu = createImg("images/dates/date5.gif");


  stand = loadImage("images/stand.png");
  walk = createImg("images/walk.gif");

  font = loadFont("images/Dokdo/Dokdo.ttf");
}

function setup() {


canvas =  createCanvas(windowWidth, windowHeight);
canvas.id('mycanvas');
  xiranchatbox = document.getElementById('xiranchatbox');
  datechatbox = document.getElementById('joshchatbox');
  yuchatbox = document.getElementById('yuchatbox');
  xiaofengchatbox = document.getElementById('xiaofengchatbox');
  Yefanchatbox = document.getElementById('Yefanchatbox');
  Liulaoshichatbox = document.getElementById('Liulaoshichatbox');

  walk.style('display', 'none');
  dateJosh.style('display', 'none');

  dateYu.style('display', 'none');
  dateXiaoFen.style('display', 'none');
  dateYeFan.style('display', 'none');
  dateLiu.style('display', 'none');
  speed = createVector(15, 0);
  x = -50;

  imgSize = 300;

  textXpos = windowWidth + 600;
  y = height / 2 - imgSize / 3;


}

function touchStarted(){
console.log("touching");

touched = true;
}


function touchEnded() {
console.log("touchend");
touched = false;

}
function draw() {
  // console.log(conversation);
  // console.log(newdate)
  background(224, 26, 79, 150);
    textFont(font);

push();
  fill(247, 179, 23);
textSize(width / 14);
  text("Road to Successful Marriage", 20, 20);



pop();
push();
fill(247, 179, 23,200);
textSize(width / 20);
text("Tap your phone to walk", 100, 50);
textFont(font);
pop();



  walk.size(imgSize, imgSize);
  dateJosh.size(imgSize, imgSize);
  dateYu.size(imgSize, imgSize);
  dateYeFan.size(imgSize, imgSize);
  dateXiaoFen.size(imgSize, imgSize);
  dateLiu.size(imgSize, imgSize);
  // walk.display ="none";

  if (touched == true && conversation == false) {
  // if (keyIsPressed === true && keyCode === RIGHT_ARROW) {
    walk.show();
    walk.position(x, y);
    x += speed.x;

    textXpos -= speed.x;
    walk.position(x, y);


    dateJosh.show();
    dateJosh.position(textXpos, y);

    console.log("DatePos:" + textXpos);
    console.log("myPos:" + x);
    console.log(textXpos - x);

  } else {
    walk.style('display', 'none');
    image(stand, x, y, imgSize, imgSize);
  }
    var distance1 = textXpos - x;
    if (distance1 < 80) {

      date1 = 1;

      dateYu.show();
      dateYu.position(textXpos + 501, y);
    }


    if (stage==0 && date1 == 1 && !conversation) {

      conversation = true;
      console.log(conversation);
      console.log("triggerthetalk1")
    var xiranchatbox = document.getElementById('xiranchatbox');
      // window.location = 'talktoJoshua.html';
      xiranchatbox.style.display = "none";
      $('#talkingtoJosh').fadeTo(fadespeed*4, 1.0, "swing", function() {
        var talkingtoJosh = document.getElementById('talkingtoJosh');
        talkingtoJosh.style.display = "block";


        var groupA = document.getElementsByClassName('groupA');
        var i;

        for (i = 0; i < groupA.length; i++) {
          groupA[i].style.display = "block";
        }
      });
    }




    if (distance1 < -450) {
      date2 = 1;

      dateXiaoFen.show();
      dateXiaoFen.position(textXpos + 1001, y);

    }

    if (stage ==1&&date2 == 1&&!conversation) {

          conversation = true;
    var xiranchatbox2 = document.getElementById('xiranchatbox2');
      console.log("triggerthetalk2")
      // window.location = 'talktoJoshua.html';
      xiranchatbox2.style.display = "none";
      $('#talkingtoYu').fadeTo(fadespeed*4, 1.0, "swing", function() {
        var talkingtoYu = document.getElementById('talkingtoYu');
        talkingtoYu.style.display = "block";


        var groupE = document.getElementsByClassName('groupE');
        var i;

        for (i = 0; i < groupE.length; i++) {
          groupE[i].style.display = "block";
        }
      });
    }

    if (distance1 < -950) {
      date3 = 1;

      dateYeFan.show();
      dateYeFan.position(textXpos + 1600, y);

    }

    if (stage ==2&&date3 == 1&&!conversation) {
      conversation = true;

      var xiranchatbox3=document.getElementById('xiranchatbox3');
      xiranchatbox3.style.display = 'none';
      $('#talkingtoXiaofen').fadeTo(fadespeed*4, 1.0, "swing", function() {
        var talkingtoXiaofen = document.getElementById('talkingtoXiaofen');
        talkingtoXiaofen.style.display = "block";


        var groupI = document.getElementsByClassName('groupI');
        var i;

        for (i = 0; i < groupI.length; i++) {
          groupI[i].style.display = "block";
        }
      });


    }


    if (distance1 < -1550) {
      date4 = 1;

      dateLiu.show();
      dateLiu.position(textXpos + 2100, y);

    }

    if (stage==3&&date4 == 1&&!conversation) {
      conversation = true;
      newdate = true;
      console.log("triggerthetalkyefan")
      var xiranchatbox4=document.getElementById('xiranchatbox4');
      xiranchatbox4.style.display = 'none';
      // window.location = 'talktoJoshua.html';
      $('#talkingtoYefan').fadeTo(fadespeed*4, 1.0, "swing", function() {
        var talkingtoYefan = document.getElementById('talkingtoYefan');
        talkingtoYefan.style.display = "block";


        var groupM = document.getElementsByClassName('groupM');
        var i;

        for (i = 0; i < groupM.length; i++) {
          groupM[i].style.display = "block";
        }
      });


    }

    if (distance1 < -2050) {
      date5 = 1;
    }
///here to ending
    if(distance1< -2600){
       window.location = 'ending.html';
    }


    if (stage==4&&date5 == 1&&!conversation) {

      conversation = true;
      var xiranchatbox5=document.getElementById('xiranchatbox5');
      xiranchatbox5.style.display = 'none';
      $('#talkingtoLiulaoshi').fadeTo(fadespeed*4, 1.0, "swing", function() {
        var talkingtoLiulaoshi = document.getElementById('talkingtoLiulaoshi');
        talkingtoLiulaoshi.style.display = "block";


        var groupR = document.getElementsByClassName('groupR');
        var i;

        for (i = 0; i < groupR.length; i++) {
          groupR[i].style.display = "block";
        }
      });


    }


    if (x >= width - ((imgSize / 3) * 4)) {
      x = width - ((imgSize / 3) * 4);

  }
}





$(document).ready(function() {
  var xiranchatbox = document.getElementById('xiranchatbox');
  //the conversation  with Joshua
  $('#joshchoice1').click(function() {

    console.log("joshchoice1");
    $("#xiranchatbox").fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox.innerHTML = "Hi, I am Xiran. Nice to meet you.";
      var groupA = document.getElementsByClassName('groupA');
      var i;
      for (i = 0; i < groupA.length; i++) {
        console.log("here");
        groupA[i].style.display = "none";
      }
    });
    $("#xiranchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
      xiranchatbox.innerHTML = "Hi, I am Xiran. Nice to meet you.";

      $("#joshchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
        datechatbox.innerHTML = "I heard that you now work in an international company right? Didn’t they give you an English name?";
      });
      $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
        datechatbox.innerHTML = "I heard that you now work in an international company right? Didn’t they give you an English name?";
        var groupB = document.getElementsByClassName('groupB');
        var i;
        for (i = 0; i < groupB.length; i++) {
          groupB[i].style.display = "block";
        }
      });
    });
  });
  $('#joshchoice2').click(function() {
    console.log("joshchoice1");
    $("#xiranchatbox").fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox.innerHTML = "...";
      var groupA = document.getElementsByClassName('groupA');
      var i;
      for (i = 0; i < groupA.length; i++) {
        groupA[i].style.display = "none";
      }
    });
    $("#xiranchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
      xiranchatbox.innerHTML = "...";

      $("#joshchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
        datechatbox.innerHTML = "I heard that you now work in an international company right? Didn’t they give you an English name?";
        // $(this).remove();
      });
      $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
        datechatbox.innerHTML = "I heard that you now work in an international company right? Didn’t they give you an English name?";
        var groupB = document.getElementsByClassName('groupB');
        var i;
        for (i = 0; i < groupB.length; i++) {
          groupB[i].style.display = "block";
        }
      });
    });
  });
  $('#joshchoice3').click(function() {

    console.log("clicked");
    var groupB = document.getElementsByClassName('groupB');
    var groupC = document.getElementsByClassName('groupC');

    var i;
    for (i = 0; i < groupB.length; i++) {
      groupB[i].style.display = "none";
      // groupC[i].style.display = "block";
    }


    console.log("joshchoice3");

    $("#xiranchatbox").fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox.innerHTML = "Yes, my English name is Sharon.";

      $("#joshchatbox").fadeTo(fadespeed*2, 0.0, 'swing', function() {
        datechatbox.innerHTML = "Then I will call you Sharon.";
        // $(this).remove();
      });

      $("#joshchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
        datechatbox.innerHTML = "Then I will call you Sharon.";
        // $(this).remove();
        for (i = 0; i < groupC.length; i++) {
          groupC[i].style.display = "block";
          // groupC[i].style.display = "block";
        }
      });
    });


  });
  $('#joshchoice4').click(function() {
    console.log("joshchoice4");

    console.log("clicked");
    var groupB = document.getElementsByClassName('groupB');
    var groupC = document.getElementsByClassName('groupC');

    var i;
    for (i = 0; i < groupB.length; i++) {
      groupB[i].style.display = "none";
      // groupC[i].style.display = "block";
    }
    $("#xiranchatbox").fadeTo(fadespeed, 0.0, 'swing', function() {
        xiranchatbox.innerHTML = "No, just Xiran. I feel more comfortable with my original name.";
    });

    $("#xiranchatbox").fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox.innerHTML = "No, just Xiran. I feel more comfortable with my original name.";

      $("#joshchatbox").fadeTo(fadespeed*2, 0.0, 'swing', function() {
        xiranchatbox.innerHTML = "No, just Xiran. I feel more comfortable with my original name.";
        // $(this).remove();


        $("#joshchatbox").fadeTo(fadespeed*2, 0.0, 'swing', function() {
  datechatbox.innerHTML = "What about Sharon? It sounds like your Chinese name and will be a good English name for you.";

        });
        $("#joshchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
          datechatbox.innerHTML = "What about Sharon? It sounds like your Chinese name and will be a good English name for you.";
          // $(this).remove();
          for (i = 0; i < groupC.length; i++) {
            groupC[i].style.display = "block";
            // groupC[i].style.display = "block";
          }
        });
      });


    });
  });
  $('#joshchoice5').click(function() {
    var groupC = document.getElementsByClassName('groupC');
    var i;
    for (i = 0; i < groupC.length; i++) {
      groupC[i].style.display = "none";
    }
    var xiranfinished = false;
    console.log("joshchoice4");
    xiranchatbox.innerHTML = "...";
    $("#joshchatbox").fadeTo(fadespeed*2, 0.0, 'swing', function() {
      datechatbox.innerHTML = "What makes you to go on a blind date? I don't feel like you are that type of people who need it?";
      // $(this).remove();
    });
    $("#joshchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
      datechatbox.innerHTML = "What makes you to go on a blind date? I don't feel like you are that type of people who need it?";
      // $(this).remove();


      $("#xiranchatbox").fadeTo(fadespeed, 0, 'swing', function() {
        xiranchatbox.innerHTML = "Maybe it is just because I like to stay by my own.";
        // $(this).remove();
      });

      $("#xiranchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
        xiranchatbox.innerHTML = "Maybe it is just because I like to stay by my own.";

        $("#xiranchatbox").fadeTo(fadespeed*10, 0, 'swing', function() {
          xiranchatbox.innerHTML = "My mom has been worried about me. I come just to make her feel better...";
          // $(this).remove();
        });


        $("#xiranchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
          xiranchatbox.innerHTML = "My mom has been worried about me. I come just to make her feel better...";

          $("#joshchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
            datechatbox.innerHTML = "Wow. Yah it's same for me. You know, my job can be really busy sometimes. We are pretty similar in terms of that.";
          });
          $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
            datechatbox.innerHTML = "Wow. Yah it's same for me. You know, my job can be really busy sometimes. We are pretty similar in terms of that.";



            $("#xiranchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
              xiranchatbox.innerHTML = "(laugh)Yes I heard that you work in the investment banking industry, no wonder!";
              // $(this).remove();
            });

            $("#xiranchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
              xiranchatbox.innerHTML = "(laugh)Yes I heard that you work in the investment banking industry, no wonder!";

              $("#joshchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {

                datechatbox.innerHTML = "Sorry, I need to pick up an important phone call...";
                // $(this).remove();

                var image = document.getElementById('talkingtoJoshbg');
                image.src = "images/dates/josh-leave.gif";
                console.log(image.src);
              });

              $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                datechatbox.innerHTML = "Sorry, I need to pick up an important phone call...";
                // $(this).remove();

                //xiranresponse
                $("#xiranchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
                  xiranchatbox.innerHTML = "(wait in silence)";
                  // $(this).remove();
                });

                $("#xiranchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                  xiranchatbox.innerHTML = "(wait in silence)";
                  // $(this).remove();
                  //josh comes back
                  $("#joshchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
                    var image = document.getElementById('talkingtoJoshbg');
                    image.src = "images/dates/Josh.gif";
                    datechatbox.innerHTML = "I am so sorry. I have been pretty busy recently.";
                  });
                  $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                    datechatbox.innerHTML = "I am so sorry. I have been pretty busy recently.";

                    //xiranresponse
                    $("#xiranchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
                      xiranchatbox.innerHTML = "It's okay. I understand it.";
                      // $(this).remove();
                    });

                    $("#xiranchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                      xiranchatbox.innerHTML = "It's okay. I understand it.";
                      // $(this).remove();

                      $("#joshchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
                        datechatbox.innerHTML = "Yeah, as you can see, my job...";
                      });

                      $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                        datechatbox.innerHTML = "Yeah, as you can see, my job...";
                      });

                      $("#xiranchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
                        xiranchatbox.innerHTML = "Since you are really busy. I think it would be nice for us to meet at another time.";
                        // $(this).remove();
                      });
                      $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                        var image = document.getElementById('talkingtoJoshbg');
                        image.src = "images/dates/josh-leave.gif";
                        datechatbox.innerHTML = "Sorry, I need to pick up a phone call again...";

                        //groupD buttons popout

                        var groupD = document.getElementsByClassName('groupD');
                        var i;
                        for (i = 0; i < groupD.length; i++) {
                          groupD[i].style.display = "block";
                        }
                      });
                    });
                  });
                });
              });

            });
          });
        });
      });
    });
  });
  $('#joshchoice6').click(function() {
    $("#joshchatbox").fadeTo(fadespeed*4, 0, 'swing', function() {
      var image = document.getElementById('talkingtoJoshbg');
      image.src = "images/dates/Josh.gif";
      datechatbox.innerHTML = "I am so sorry. I have something urgent and I need to go now. It's very nice to meet you. Maybe next time? ";
    });
    $("#joshchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
      datechatbox.innerHTML = "I am so sorry. I have something urgent and I need to go now. It's very nice to meet you. Maybe next time? ";

      $("#talkingtoJosh").fadeTo(3000, 0.0, 'swing', function() {
        var talkingtoJosh = document.getElementById('talkingtoJosh');
        talkingtoJosh.style.display = "none";
      });
    });
leavedialogue();
  });
  $('#exitJosh').click(function() {

    $("#xiranchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
      xiranchatbox.innerHTML = "Since you are really busy. I think it would be nice for us to meet at another time.";
      // $(this).remove();

      // var talkingtoJosh = document.getElementById('talkingtoJosh');
      // talkingtoJosh.style.display = "none";
      $("#talkingtoJosh").fadeTo(3000, 0.0, 'swing', function() {
        var talkingtoJosh = document.getElementById('talkingtoJosh');
        talkingtoJosh.style.display = "none";
      });

    });
leavedialogue();
  });

  $('#yuchoice1').click(function(){
    $('#xiranchatbox2').fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox2.innerHTML = "You are 30 this year right? I heard it from Auntie Wang.";
      var groupE = document.getElementsByClassName('groupE');
      var i;
      for (i = 0; i < groupE.length; i++) {
        groupE[i].style.display = "none";
      }
    });

    $('#xiranchatbox2').fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox2.innerHTML = "You are 30 this year right? I heard it from Auntie Wang.";



            $("#yuchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
              yuchatbox.innerHTML = "That’s true. I mean, it’s okay for guys to be slightly older. I have a very stable job now, considering your age, we should prepare to have children soon after we get married.";
            });
            $("#yuchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
              yuchatbox.innerHTML = "That’s true. I mean, it’s okay for guys to be slightly older. I have a very stable job now, considering your age, we should prepare to have children soon after we get married.";
              var groupF = document.getElementsByClassName('groupF');
              var i;
              for (i = 0; i < groupF.length; i++) {
                groupF[i].style.display = "block";
              }
            });
    });
  });
  $('#yuchoice2').click(function(){
    var xiranchatbox = document.getElementById('xiranchatbox2');

    $("#xiranchatbox2").fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox2.innerHTML = "My age?";
      var groupE = document.getElementsByClassName('groupE');
      var i;
      for (i = 0; i < groupE.length; i++) {
        groupE[i].style.display = "none";
      }
    });

    $("#xiranchatbox2").fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox2.innerHTML = "My age?";
            $("#yuchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
              yuchatbox.innerHTML = "Yes, do you have plans to have a baby? It would be more difficult for women who are over 30, though it is not a big deal for guys.";
            });
            $("#yuchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
              yuchatbox.innerHTML = "Yes, do you have plans to have a baby? It would be more difficult for women who are over 30, though it is not a big deal for guys.";
              var groupF = document.getElementsByClassName('groupF');
              var i;
              for (i = 0; i < groupF.length; i++) {
                groupF[i].style.display = "block";
              }
            });
    });
  });
  $('#yuchoice3').click(function(){

    $("#xiranchatbox2").fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox2.innerHTML = "I actually do not really like kids.";
      var groupF = document.getElementsByClassName('groupF');
      var i;
      for (i = 0; i < groupF.length; i++) {
        groupF[i].style.display = "none";
      }
    });

    $("#xiranchatbox2").fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox2.innerHTML = "I actually do not really like kids.";



      $("#yuchatbox").fadeTo(fadespeed*2, 0.0, 'swing', function() {
        yuchatbox.innerHTML = "My mom wishes to have a grandchild as soon as possible. Later you can take care of the kids at home. Of course I will work hard. Together we can make things much easier. ";
      });

      $("#yuchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
        yuchatbox.innerHTML = "My mom wishes to have a grandchild as soon as possible. Later you can take care of the kids at home. Of course I will work hard. Together we can make things much easier. ";

var groupG = document.getElementsByClassName('groupG');
var i;
for(i=0;i<groupG.length;i++){
  groupG[i].style.display="block";
}

      });





    });

  });
  $('#yuchoice4').click(function(){

    $("#xiranchatbox2").fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox2.innerHTML = "Well, I like kids. But  I think it might be too early for us to discuss about it?";
      var groupF = document.getElementsByClassName('groupF');
      var i;
      for (i = 0; i < groupF.length; i++) {
        groupF[i].style.display = "none";
      }
    });

    $("#xiranchatbox2").fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox2.innerHTML = "Well, I like kids. But  I think it might be too early for us to discuss about it?";



      $("#yuchatbox").fadeTo(fadespeed*2, 0.0, 'swing', function() {
        yuchatbox.innerHTML = "Early? I do not think so. I have calculated. If we have a child now, it is possible that  we have our second kid before you are 30. And…";
      });

      $("#yuchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
        yuchatbox.innerHTML = "Early? I do not think so. I have calculated. If we have a child now, it is possible that  we have our second kid before you are 30. And…";
        var groupG = document.getElementsByClassName('groupG');
        var i;
        for(i=0;i<groupG.length;i++){
          groupG[i].style.display="block";
        }

      });
    });

  });
  $('#yuchoice5').click(function(){
      $("#xiranchatbox2").fadeTo(fadespeed, 0, 'swing', function() {
        xiranchatbox2.innerHTML = "Ok, I got it.  What do you like to do during your spare time?";
        var groupG = document.getElementsByClassName('groupG');
        var i;
        for (i = 0; i < groupG.length; i++) {
          groupG[i].style.display = "none";
        }
      });

      $("#xiranchatbox2").fadeTo(fadespeed, 1.0, 'swing', function() {
        xiranchatbox2.innerHTML = "Ok, I got it.  What do you like to do during your spare time?";


        $("#yuchatbox").fadeTo(fadespeed*2, 0.0, 'swing', function() {
          yuchatbox.innerHTML = "Nothing special. I heard that you loves watching movie? That is great, we can take our kids for movie…";
        });


        $("#yuchatbox").fadeTo(fadespeed*2, 1.0, 'swing', function() {
          yuchatbox.innerHTML = "Nothing special. I heard that you loves watching movie? That is great, we can take our kids for movie…";
          var groupH = document.getElementsByClassName('groupH');
          var i;
          for (i = 0; i < groupH.length; i++) {
            groupH[i].style.display = "block";
          }

        });
      });
        });
  $('#yuchoice6').click(function(){

      $("#xiranchatbox2").fadeTo(fadespeed, 0, 'swing', function() {
        xiranchatbox2.innerHTML = "I think it is really really early. Maybe someone else will be better for you.";
        var groupH = document.getElementsByClassName('groupH');
        var i;
        for (i = 0; i < groupH.length; i++) {
          groupH[i].style.display = "none";
        }
  });
        $("#xiranchatbox2").fadeTo(fadespeed, 1.0, 'swing', function() {
          xiranchatbox2.innerHTML = "I think it is really really early. Maybe someone else will be better for you.";

          $("#talkingtoYu").fadeTo(3000, 0.0, 'swing', function() {
            var talkingtoYu = document.getElementById('talkingtoYu');
            talkingtoYu.style.display = "none";

        });
        });
        leavedialogue();
      });
  $('#exitYu').click(function() {

    $("#talkingtoYu").fadeTo(3000, 0.0, 'swing', function() {
      var talkingtoYu = document.getElementById('talkingtoYu');
      talkingtoYu.style.display = "none";
    });


leavedialogue();
  });


  $('#xiaofengchoice1').click(function(){
    $('#xiranchatbox3').fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox3.innerHTML = "Jiejie? How old are you?";
      var groupI = document.getElementsByClassName('groupI');
      var i;
      for (i = 0; i < groupI.length; i++) {
        groupI[i].style.display = "none";
      }
    });

    $('#xiranchatbox3').fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox3.innerHTML = "Jiejie? How old are you?";

            $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
              xiaofengchatbox.innerHTML = "Haha, don't be mad. I am Xiaofeng, nice to meet you!";
            $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
              xiaofengchatbox.innerHTML = "Haha, don't be mad. I am Xiaofeng, nice to meet you!";

              $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                xiaofengchatbox.innerHTML = "You haircut is so cute. I also like you turtle neck, is it from XXX brand?";
  });

              $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {

                xiaofengchatbox.innerHTML = "You haircut is so cute. I also like you turtle neck, is it from XXX brand?";
                var groupJ = document.getElementsByClassName('groupJ');
                var i;
                for (i = 0; i < groupJ.length; i++) {
                  groupJ[i].style.display = "block";
                }
                });
            });
    });
  });
    });
  $('#xiaofengchoice2').click(function(){
      $('#xiranchatbox3').fadeTo(fadespeed, 0, 'swing', function() {
        xiranchatbox3.innerHTML = ":( I don't like to be called Jiejie. Just call me Xiran.";
        var groupI = document.getElementsByClassName('groupI');
        var i;
        for (i = 0; i < groupI.length; i++) {
          groupI[i].style.display = "none";
        }
      });

      $('#xiranchatbox3').fadeTo(fadespeed, 1.0, 'swing', function() {
        xiranchatbox2.innerHTML = ":( I don't like to be called Jiejie. Just call me Xiran.";
              $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                xiaofengchatbox.innerHTML = "Oh. I am so sorry. If you don't like it. I won't say it anymore."
              $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                xiaofengchatbox.innerHTML = "Oh. I am so sorry. If you don't like it. I won't say it anymore.";

                $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                  xiaofengchatbox.innerHTML = "You haircut is so cute. I also like you turtle neck, is it from XXX brand?";
    });
                $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {

    yuchatbox.innerHTML = "You haircut is so cute. I also like you turtle neck, is it from XXX brand?";
                  var groupJ = document.getElementsByClassName('groupJ');
                  var i;
                  for (i = 0; i < groupJ.length; i++) {
                    groupJ[i].style.display = "block";
                  }
                  });
              });
      });
    });
      });
  $('#xiaofengchoice3').click(function(){
          $('#xiranchatbox3').fadeTo(fadespeed, 0, 'swing', function() {
            xiranchatbox3.innerHTML = "Wow, it is. I don’t know you are so familiar with women’s fashion?";
            var groupJ = document.getElementsByClassName('groupJ');
            var i;
            for (i = 0; i < groupJ.length; i++) {
              groupJ[i].style.display = "none";
            }
          });

          $('#xiranchatbox3').fadeTo(fadespeed, 1.0, 'swing', function() {
            xiranchatbox2.innerHTML = "Wow, it is. I don’t know you are so familiar with women’s fashion?";
                  $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                    xiaofengchatbox.innerHTML = "Haha, I work as a graphic designer for xxx’, I immediately recognize your top when I first saw you. Nice taste."
                  $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                    xiaofengchatbox.innerHTML = "Haha, I work as a graphic designer for xxx’, I immediately recognize your top when I first saw you. Nice taste.";


                      var groupK = document.getElementsByClassName('groupK');
                      var i;
                      for (i = 0; i < groupK.length; i++) {
                        groupK[i].style.display = "block";
                      }
                      });
                  });
          });
        });
  $('#xiaofengchoice4').click(function(){
              $('#xiranchatbox3').fadeTo(fadespeed, 0, 'swing', function() {
                xiranchatbox3.innerHTML = "How do you know? It is not a popular brand though.";
                var groupJ = document.getElementsByClassName('groupJ');
                var i;
                for (i = 0; i < groupJ.length; i++) {
                  groupJ[i].style.display = "none";
                }
              });

              $('#xiranchatbox3').fadeTo(fadespeed, 1.0, 'swing', function() {
                xiranchatbox2.innerHTML = "How do you know? It is not a popular brand though.";
                      $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                        xiaofengchatbox.innerHTML = "Haha, I work as a graphic designer for xxx’, I immediately recognize your top when I first saw you. Nice taste."
                      $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                        xiaofengchatbox.innerHTML = "Haha, I work as a graphic designer for xxx’, I immediately recognize your top when I first saw you. Nice taste.";


                          var groupK = document.getElementsByClassName('groupK');
                          var i;
                          for (i = 0; i < groupK.length; i++) {
                            groupK[i].style.display = "block";
                          }
                          });
                      });
              });
            });
  $('#xiaofengchoice5').click(function(){
                          $('#xiranchatbox3').fadeTo(fadespeed, 0, 'swing', function() {
                            xiranchatbox3.innerHTML = "I feel like we should definitely go shopping together!";
                            var groupK = document.getElementsByClassName('groupK');
                            var i;
                            for (i = 0; i < groupK.length; i++) {
                              groupK[i].style.display = "none";
                            }
                          });

                          $('#xiranchatbox3').fadeTo(fadespeed, 1.0, 'swing', function() {
                            xiranchatbox2.innerHTML = "I feel like we should definitely go shopping together!";
                                  $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                    xiaofengchatbox.innerHTML = "Sure, I would love to!"
                                  $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                    xiaofengchatbox.innerHTML = "Sure, I would love to!";


                                    $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                      xiaofengchatbox.innerHTML = "Jiejie, since I feel like you are a nice person, I just want to be honest with you.";

                                        });

                                        $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                          xiaofengchatbox.innerHTML = "Jiejie, since I feel like you are a nice person, I just want to be honest with you.";

                                          $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                            xiaofengchatbox.innerHTML = "I actually do not like girls. My mom has been worried about my marriage. I don't want to let her down so I came.";

                                              });

                                              $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                                xiaofengchatbox.innerHTML = "I actually do not like girls. My mom has been worried about my marriage. I don't want to let her down so I came.";

                                                $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                                  xiaofengchatbox.innerHTML = "Let’s do each other a favor. Could you go back and tell the parents that you don’t like me because I am too young?  I think you are a nice person. We can still go shopping sometimes!";

                                                    });
                                                    $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                                      xiaofengchatbox.innerHTML = "Let’s do each other a favor. Could you go back and tell the parents that you don’t like me because I am too young?  I think you are a nice person. We can still go shopping sometimes!";
var groupL = document.getElementsByClassName('groupL');
var i;
for(i=0;i<groupL.length;i++){
groupL[i].style.display = "block";
}                                        });
                                                  });
                                            });
                                      });
                                  });
                          });
                        });
  $('#xiaofengchoice6').click(function(){
                                      $('#xiranchatbox3').fadeTo(fadespeed, 0, 'swing', function() {
                                        xiranchatbox3.innerHTML = "Graphic designer sounds like an interesting job!";
                                        var groupK = document.getElementsByClassName('groupK');
                                        var i;
                                        for (i = 0; i < groupK.length; i++) {
                                          groupK[i].style.display = "none";
                                        }
                                      });

                                      $('#xiranchatbox3').fadeTo(fadespeed, 1.0, 'swing', function() {
                                        xiranchatbox2.innerHTML = "Graphic designer sounds like an interesting job!";
                                              $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                                xiaofengchatbox.innerHTML = "I like it. But my mom doesn't..."
                                              $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                                xiaofengchatbox.innerHTML = "I like it. But my mom doesn't...";


                                                $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                                  xiaofengchatbox.innerHTML = "Jiejie, since I feel like you are a nice person, I just want to be honest with you.";

                                                    });

                                                    $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                                      xiaofengchatbox.innerHTML = "Jiejie, since I feel like you are a nice person, I just want to be honest with you.";

                                                      $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                                        xiaofengchatbox.innerHTML = "I actually do not like girls. My mom has been worried about my marriage. I don't want to let her down so I came.";

                                                          });

                                                          $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                                            xiaofengchatbox.innerHTML = "I actually do not like girls. My mom has been worried about my marriage. I don't want to let her down so I came.";

                                                            $("#xiaofengchatbox").fadeTo(fadespeed*4, 0.0, 'swing', function() {
                                                              xiaofengchatbox.innerHTML = "Let’s do each other a favor. Could you go back and tell the parents that you don’t like me because I am too young?  I think you are a nice person. We can still go shopping sometimes!";

                                                                });
                                                                $("#xiaofengchatbox").fadeTo(fadespeed*4, 1.0, 'swing', function() {
                                                                  xiaofengchatbox.innerHTML = "Let’s do each other a favor. Could you go back and tell the parents that you don’t like me because I am too young?  I think you are a nice person. We can still go shopping sometimes!";
            var groupL = document.getElementsByClassName('groupL');
            var i;
            for(i=0;i<groupL.length;i++){
            groupL[i].style.display = "block";
            }
                                                                    });
                                                              });
                                                        });
                                                  });
                                              });
                                      });

                                    });
  $('#exitXiaofen').click(function() {

    $('#xiranchatbox3').fadeTo(fadespeed, 0, 'swing', function() {
        xiranchatbox3.innerHTML = "Thanks for being honest! Let's go shopping some timt!";
    });

    $('#xiranchatbox3').fadeTo(fadespeed, 1.0, 'swing', function() {
        xiranchatbox3.innerHTML = "Thanks for being honest! Let's go shopping some timt!";

        $("#talkingtoXiaofen").fadeTo(3000, 0.0, 'swing', function() {
          var talkingtoXiaofen = document.getElementById('talkingtoXiaofen');
          talkingtoXiaofen.style.display = "none";
        });
    });
leavedialogue();
  });

//2019-04-30 here keep working!
$('#yefanchoice1').click(function(){
  $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox4.innerHTML = "Yeah, I am Xiran. I heard that your company is close to mine?";
    var groupM = document.getElementsByClassName('groupM');
    var i;
    for (i = 0; i < groupM.length; i++) {
      groupM[i].style.display = "none";
    }
  });

  $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
    xiranchatbox4.innerHTML = "Yeah, I am Xiran. I heard that your company is close to mine?";

    $('#Yefanchatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
      Yefanchatbox.innerHTML = "Yeah, sort of. ";
    });
    $('#Yefanchatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
      Yefanchatbox.innerHTML = "Yeah, sort of.";

      var groupN = document.getElementsByClassName('groupN');
      var i;
      for (i = 0; i < groupN.length; i++) {
        groupN[i].style.display = "block";
      }
    });
  });

});
$('#yefanchoice2').click(function(){

  $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox4.innerHTML = "Cool so what do you do? Do you also work in an international company?";
    var groupN = document.getElementsByClassName('groupN');
    var i;
    for (i = 0; i < groupN.length; i++) {
      groupN[i].style.display = "none";
    }
  });

  $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
    xiranchatbox4.innerHTML = "Cool so what do you do? Do you also work in an international company?";

    $('#Yefanchatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
      Yefanchatbox.innerHTML = "Well, I work for myself actually. I mean, I am an Airbnb host.";
    });


        $('#Yefanchatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
          Yefanchatbox.innerHTML = "Well, I work for myself actually. I mean, I am an Airbnb host.";
          var groupO = document.getElementsByClassName('groupO');
          var i;
          for (i = 0; i < groupO.length; i++) {
            groupO[i].style.display = "block";
          }

        });
  });

});
$('#yefanchoice3').click(function(){

  $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox4.innerHTML = "Sort of? What do you mean by that?";
    var groupN = document.getElementsByClassName('groupN');
    var i;
    for (i = 0; i < groupN.length; i++) {
      groupN[i].style.display = "none";
    }
  });

  $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
    xiranchatbox4.innerHTML = "Sort of? What do you mean by that?";

    $('#Yefanchatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
      Yefanchatbox.innerHTML = "It is technically not a company, but I got two Airbnb Apartments. My parents have several apartments, and you know, nobody lives there any longer, so I just take the chace to do my own business. ";
    });


        $('#Yefanchatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
          Yefanchatbox.innerHTML = "It is technically not a company, but I got two Airbnb Apartments. My parents have several apartments, and you know, nobody lives there any longer, so I just take the chace to do my own business.";
          var groupO = document.getElementsByClassName('groupO');
          var i;
          for (i = 0; i < groupO.length; i++) {
            groupO[i].style.display = "block";
          }

        });
  });

});
$('#yefanchoice4').click(function(){

  $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox4.innerHTML = "Wow that is pretty cool! You must be earning a lot since your apartments are at good locations?";
    var groupO = document.getElementsByClassName('groupO');
    var i;
    for (i = 0; i < groupO.length; i++) {
      groupO[i].style.display = "none";
    }
  });

  $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
    xiranchatbox4.innerHTML = "Wow that is pretty cool! You must be earning a lot since your apartments are at good locations?";

    $('#Yefanchatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
      Yefanchatbox.innerHTML = "Hehe, it's not bad. But it is a nice job you know. I can just work from home. Pretty flexible. And I can spend more time with my kids.";
    });


        $('#Yefanchatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
          Yefanchatbox.innerHTML = "Hehe, it's not bad. But it is a nice job you know. I can just work from home. Pretty flexible. And I can spend more time with my kids.";
          var groupP = document.getElementsByClassName('groupP');
          var i;
          for (i = 0; i < groupP.length; i++) {
            groupP[i].style.display = "block";
          }

        });
  });

});
$('#yefanchoice5').click(function(){
console.log("choice5isclicked");
  $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox4.innerHTML = "Is that your full-time job? I am just curious...";
    var groupO = document.getElementsByClassName('groupO');
    var i;
    for (i = 0; i < groupO.length; i++) {
      groupO[i].style.display = "none";
    }
  });

  $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
    xiranchatbox4.innerHTML = "Is that your full-time job? I am just curious... ";

    $('#Yefanchatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
      Yefanchatbox.innerHTML = "Well I mean, many people have asked me about that. And yes, though I used to work in a company as well. But the 9-9-6 schedule is just to intense, I need more time with the kids.";
    });


        $('#Yefanchatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
          Yefanchatbox.innerHTML = "Well I mean, many people have asked me about that. And yes, though I used to work in a company as well. But the 9-9-6 schedule is just to intense, I need more time with the kids.";
          var groupP = document.getElementsByClassName('groupP');
          var i;
          for (i = 0; i < groupP.length; i++) {
            groupP[i].style.display = "block";
          }

        });
  });

});
$('#yefanchoice6').click(function(){
console.log("choice5isclicked");
  $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox4.innerHTML = "I am sorry, but did I just hear 'kids'? You have kids?";
    var groupP = document.getElementsByClassName('groupP');
    var i;
    for (i = 0; i < groupP.length; i++) {
      groupP[i].style.display = "none";
    }
  });

  $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
    xiranchatbox4.innerHTML = "I am sorry, but did I just hear 'kids'? You have kids?";

    $('#Yefanchatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
      Yefanchatbox.innerHTML = "Ohh, I am so sorry. I thought they have told you. Yeah, I divorced three years ago and I have a pair of three-year-old twins.";
    });


        $('#Yefanchatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
          Yefanchatbox.innerHTML = "Ohh, I am so sorry. I thought they have told you. Yeah, I divorced three years ago and I have a pair of three-year-old twins.";
          var groupQ = document.getElementsByClassName('groupQ');
          var i;
          for (i = 0; i < groupQ.length; i++) {
            groupQ[i].style.display = "block";
          }

        });
  });

});
$('#yefanchoice7').click(function(){
console.log("choice5isclicked");
  $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox4.innerHTML = "I like kids though. Though it was quite shocking at first. I think you are a nice guy. Maybe we can talk about that a bit more?";
    var groupQ = document.getElementsByClassName('groupQ');
    var i;
    for (i = 0; i < groupQ.length; i++) {
      groupQ[i].style.display = "none";
    }
  });

  $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
    xiranchatbox4.innerHTML = "I like kids though. Though it was quite shocking at first. I think you are a nice guy. Maybe we can talk about that a bit more?";

    $('#Yefanchatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
      Yefanchatbox.innerHTML = "It will be your first marriage right? I know it would be quite difficult for you to accept someone with kids. You should take more time to consider...";
    });


        $('#Yefanchatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
          Yefanchatbox.innerHTML = "It will be your first marriage right? I know it would be quite difficult for you to accept someone with kids. You should take more time to consider...";

          $("#talkingtoYefan").fadeTo(fadespeed*12, 0.0, 'swing', function() {
            var talkingtoYefan = document.getElementById('talkingtoYefan');
            talkingtoYefan.style.display = "none";
          });
        });
        leavedialogue();
  });

});
$('#exitYefan').click(function() {
    $('#xiranchatbox4').fadeTo(fadespeed, 0, 'swing', function() {
        xiranchatbox4.innerHTML = "I didn't expect that you have kids. I respect you as a father... But I think I need more time to think about whether I want to marry someone who has kids. Sorry.";
    });

    $('#xiranchatbox4').fadeTo(fadespeed, 1.0, 'swing', function() {
        xiranchatbox4.innerHTML = "I didn't expect that you have kids. I respect you as a father... But I think I need more time to think about whether I want to marry someone who has kids. Sorry.";

        $("#talkingtoYefan").fadeTo(fadespeed*12, 0.0, 'swing', function() {
          var talkingtoYefan = document.getElementById('talkingtoYefan');
          talkingtoYefan.style.display = "none";
        });
    });
leavedialogue();
  });


$('#liuchoice1').click(function(){
  $('#xiranchatbox5').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox5.innerHTML = "Hi, I am Xiran. Let's introduce each other.";
    var groupR = document.getElementsByClassName('groupR');
    var i;
    for (i = 0; i < groupR.length; i++) {
      groupR[i].style.display = "none";
    }
  });

  $('#xiranchatbox5').fadeTo(fadespeed, 1.0, 'swing', function() {
   xiranchatbox5.innerHTML = "Hi, I am Xiran. Let's introduce each other.";

   $('#Liulaoshichatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I am Liu. I am 32. I am currently pursing my chemistry phd in the States. ";
   });

   $('#Liulaoshichatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I am Liu. I am 32. I am currently pursing my chemistry phd in the States. ";

     var groupS = document.getElementsByClassName('groupS');
     var i;
     for (i = 0; i < groupS.length; i++) {
       groupS[i].style.display = "block";
     }

   });

      });
});
$('#liuchoice2').click(function(){
  $('#xiranchatbox5').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox5.innerHTML = "...";
    var groupR = document.getElementsByClassName('groupR');
    var i;
    for (i = 0; i < groupR.length; i++) {
      groupR[i].style.display = "none";
    }
  });

  $('#xiranchatbox5').fadeTo(fadespeed, 1.0, 'swing', function() {
   xiranchatbox5.innerHTML = "...";

   $('#Liulaoshichatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "...well, you also used to study in the US right?";
   });

   $('#Liulaoshichatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "...well, you also used to study in the US right?";

     var groupS = document.getElementsByClassName('groupS');
     var i;
     for (i = 0; i < groupS.length; i++) {
       groupS[i].style.display = "block";
     }

   });

      });
});
$('#liuchoice3').click(function(){
  $('#xiranchatbox5').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox5.innerHTML = "Yeah. I went to graduate school there for two years. When will you finish your degree and what is yoiur plan?";
    var groupS = document.getElementsByClassName('groupS');
    var i;
    for (i = 0; i < groupS.length; i++) {
      groupS[i].style.display = "none";
    }
  });

  $('#xiranchatbox5').fadeTo(fadespeed, 1.0, 'swing', function() {
   xiranchatbox5.innerHTML = "Yeah. I went to graduate school there for two years. When will you finish your degree and what is yoiur plan?";

   $('#Liulaoshichatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I am trying to graduate next year, if everything goes well. My parents hope that I can come back.";
   });

   $('#Liulaoshichatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I am trying to graduate next year, if everything goes well. My parents hope that I can come back.";

     var groupT = document.getElementsByClassName('groupT');
     var i;
     for (i = 0; i < groupT.length; i++) {
       groupT[i].style.display = "block";
     }

   });

      });
});
$('#liuchoice4').click(function(){
  $('#xiranchatbox5').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox5.innerHTML = "Wow, phd! But do you plan to stay there after your program? I assume yes since you came to a blind date?";
    var groupS = document.getElementsByClassName('groupS');
    var i;
    for (i = 0; i < groupS.length; i++) {
      groupS[i].style.display = "none";
    }
  });

  $('#xiranchatbox5').fadeTo(fadespeed, 1.0, 'swing', function() {
   xiranchatbox5.innerHTML = "Wow, phd! But do you plan to stay there after your program? I assume yes since you came to a blind date?";

   $('#Liulaoshichatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I mean, it's hard to say. I would love to work there for a few years but...It is hard to know Chinses women there.";
   });

   $('#Liulaoshichatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I mean, it's hard to say. I would love to work there for a few years but...It is hard to know Chinses women there.";

     var groupT = document.getElementsByClassName('groupT');
     var i;
     for (i = 0; i < groupT.length; i++) {
       groupT[i].style.display = "block";
     }

   });

      });
});
$('#liuchoice5').click(function(){
  $('#xiranchatbox5').fadeTo(fadespeed, 0, 'swing', function() {
    xiranchatbox5.innerHTML = "So? I don't think I will be interested in a long-distance relationship...";
    var groupT = document.getElementsByClassName('groupT');
    var i;
    for (i = 0; i < groupT.length; i++) {
      groupT[i].style.display = "none";
    }
  });

  $('#xiranchatbox5').fadeTo(fadespeed, 1.0, 'swing', function() {
   xiranchatbox5.innerHTML = "So? I don't think I will be interested in a long-distance relationship...";

   $('#Liulaoshichatbox').fadeTo(fadespeed, 0.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I hope to marry a Chinse woman...because I am pretty traditional. I was thinking maybe my wife would come with me to the US.";
   });

   $('#Liulaoshichatbox').fadeTo(fadespeed, 1.0, 'swing', function() {
     Liulaoshichatbox.innerHTML = "I hope to marry a Chinse woman...because I am pretty traditional. I was thinking maybe my wife would come with me to the US.";

     var groupU= document.getElementsByClassName('groupU');
     var i;
     for (i = 0; i < groupU.length; i++) {
       groupU[i].style.display = "block";
     }

   });

      });
});
$('#exitLiulaoshi').click(function() {
  $('#xiranchatbox5').fadeTo(fadespeed, 0, 'swing', function() {
      xiranchatbox5.innerHTML = "I think I would like to stay here with my family. So thank you. Maybe someone else woule be a better choice.";
  });

  $('#xiranchatbox5').fadeTo(fadespeed, 1.0, 'swing', function() {
      xiranchatbox5.innerHTML = "I think I would like to stay here with my family. So thank you. Maybe someone else woule be a better choice.";

      $("#talkingtoLiulaoshi").fadeTo(fadespeed*12, 0.0, 'swing', function() {
        var talkingtoLiulaoshi = document.getElementById('talkingtoLiulaoshi');
        talkingtoLiulaoshi.style.display = "none";
      });
  });

leavedialogue();
});

//end of the keyCode


});

function leavedialogue(){
  console.log("leavecalled");
  conversation = false;
  date1=0;
  date2=0;
  date3=0;
  date4=0;
  date5=0;
  stage+=1;
}
