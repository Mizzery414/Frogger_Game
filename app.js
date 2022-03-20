const timeLeftDisplay = document.querySelector("time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");

let currentIndex = 76; //starting block index is 76
console.log("squares");

function moveFrog(e) {
  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      break;
    case "ArrowRight":
      console.log("move right");
      break;
    case "ArrowUp":
      console.log("move up");
      break;
    case "ArrowDown":
      console.log("move down");
  }

  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);
