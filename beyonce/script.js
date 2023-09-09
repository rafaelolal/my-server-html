let text = document.querySelector(".box p");
text.innerHTML = "Beyoncé Giselle Knowles Carter, the most awarded female music artist in history. As an American singer, songwriter, actress, and dancer. Beyoncé has been noted for her boundary-pushing artistry and her vocal ability. Her success has made her a cultural icon and earned her the nickname 'Queen Bey'.";


var header = document.getElementById("head");

header.onmouseover = function() {
    header.style.fontSize = "115px";
};

header.onmouseout = function() {
    header.style.fontSize = "110px";
};

//discography


var divLength = document.querySelectorAll('.song').length;
console.log(divLength)

for(var i=0; i<divLength; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
  var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src = 'music/beyhitsdil.mp3';

var song2 = new Audio();
song2.src = 'music/djvubey.mp3';

var song3 = new Audio();
song3.src = 'music/iambey.mp3';

var song4 = new Audio();
song4.src = 'music/4bey.mp3';

var song5 = new Audio();
song5.src = 'music/beyoncebey.mp3';

var song6 = new Audio();
song6.src = 'music/lemonbey.mp3';

var song7 = new Audio();
song7.src = 'music/renebey.mp3';

var song8 = new Audio();
song8.src = 'music/beyhitsdil.mp3';

function playsong(){
  var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.play();
   break;

  case "b":
   song2.play();
   break;

  case "c":
   song3.play();
   break;

  case "d":
   4.play();
   break;

  case "e":
   song5.play();
   break;

  case "f":
   song6.play();
   break;

  case "g":
   song7.play();
   break;

  case "h":
   song8.play();
   break;

  default:
   console.log("wrong input");
   break;
 }
}

function pausesong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.pause();
   break;

  case "b":
   song2.pause();
   break;

  case "c":
   song3.pause();
   break;

  case "d":
   song4.pause();
   break;

  case "e":
   song5.pause();
   break;

  case "f":
   song6.pause();
   break;

  case "g":
   song7.pause();
   break;

  case "h":
   song8.pause();
   break;

  default:
   console.log("wrong input");
   break;
 }
}



