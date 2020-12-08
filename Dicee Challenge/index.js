// first dice image
var randomNum1 = Math.floor(Math.random()*6)+1;
var randomDiceImg1 = "dice" + randomNum1 + ".png";
var randomImgPath1 = "images/" + randomDiceImg1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgPath1);

// second dice image
var randomNum2 = Math.floor(Math.random()*6)+1;
var randomImgPath2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgPath2);

// if - else conditions

if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "😀 Player 1 Wins!";
}
else if(randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 😀";
}
else {
  document.querySelector("h1").innerHTML = "😁 Draw!";
}