const timeLeftDisplay = document.querySelector("time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");

let currentIndex = 76; //starting block index is 76
let width = 9; // nine squares from css setting

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("move right");
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("move up");
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      console.log("move down");
      if (currentIndex + width < width * width) currentIndex += width;
      break;
  }

  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
}

//move the logs
function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"):
  }
}
