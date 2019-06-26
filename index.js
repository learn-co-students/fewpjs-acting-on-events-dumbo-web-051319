// Your code here
var dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";

// dodger.style.left; // "180px"
// dodger.style.bottom; // "0px"

// dodger.style.bottom = "100px";
dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//   console.log(e.key);
// });

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 8}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 8}px`;
  }
}
