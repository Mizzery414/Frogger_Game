const timeLeftDisplay = document.querySelector("time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");

let currentIndex = 76; //starting block index is 76
let width = 9; // nine squares from css setting

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");
  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("move right");
      currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("move up");
      currentIndex -= width;
      break;
    case "ArrowDown":
      console.log("move down");
      currentIndex += width;
      break;
  }

  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);
