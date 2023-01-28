"use strict";
//method on the document object is queryselector
/*
console.log(document.querySelector(".message").textContent);
//reads the content in the element.
document.querySelector(".message").textContent = `Correct Number!`;
//sets the content in the element.
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 22;
//the above gets us the text content.

//DOM manipulation
//What is the DOM? Document Object Model - structured representation of HTML documents. Allows JS to access HTML elements to styel and manipulate. Document is the special object that serves as the entry point to the DOM.
// DOM methods and properties are called Web APIs (application programming interface), also timers and fetch API.

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

//event listener is something that happens on the page - a mouse click, keypress, etc. We can wait for a certain event to happen and then run the code. 
*/
let randomNum = Math.floor(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "😖 No number!";
  } else if (guess > randomNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇🏼 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < randomNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇🏼 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === randomNum) {
    document.querySelector(".message").textContent = "👐🏼 Correct number!";
    document.querySelector(".highscore").textContent = score;
    //when player wins
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = guess;
  }
});
