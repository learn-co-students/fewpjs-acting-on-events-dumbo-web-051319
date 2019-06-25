// Your code here
var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


document.addEventListener("keydown", function(e) {
  console.log(e.key);
});

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight" ) {
    moveDodgerRight();
  }
  else if (e.key === "ArrowUp" ) {
    moveDodgerUp();
  }
  else if (e.key === "ArrowDown" ) {
    moveDodgerDown();
  }
});

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);

  if (bottom < 360) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}

function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
}
