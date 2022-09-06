//image 1:
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomSource1 = "/dice" + randomNumber1 + ".png";

var randomImage1 = "/images" + randomSource1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

//image 2:

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSource2 = "/dice" + randomNumber2 + ".png";

var randomImage2 = "/images" + randomSource2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);

//result:

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 wins";
}
else {
  document.querySelector("h1").innerHTML = "draw";
}