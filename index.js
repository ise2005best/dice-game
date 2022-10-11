// A function that allows you to change the username
var player1 = "Player-1";
var player2 = "Player-2";

function editNames(){
    player1 = prompt("What is your Name? ");
    player2 = prompt("What is your Name? ");

// this selects the class of the html element and mkaes it equals to the player variable in javascript
    document.querySelector("p.Player-1").innerHTML = player1;
    document.querySelector("p.Player-2").innerHTML = player2;
}
editNames();

// a random number generator 
var randomNumber1 = Math.floor(Math.random() * 7); 
var randomNumber2 = Math.floor(Math.random() * 7); 

// this makes the random number generator pick between all png files that start with the name dice
var randomDiceimage = "dice" + randomNumber1 + ".png"; 
// this makes the random dice image pick from the image folder 
var randomImageSrc = "images/" + randomDiceimage;
// This picks the first element of the img tag
var image1 = document.querySelectorAll("img")[0];
// This changes the attribute from one image to our random image generator
image1.setAttribute("src", randomImageSrc);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

// a function to check if player1 or 2 wins or it ends in a draw
function winOrDraw(){
if (randomNumber1 === randomNumber2)
document.querySelector("h1").innerHTML = "DRAW!";

else if (randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML = "Congratulations" + " " + player1 +  " wins 🥳";

else if (randomNumber1 < randomNumber2)
document.querySelector("h1").innerHTML = "Congratulations" + " " + player2 +  " wins 🥳";
}
winOrDraw()