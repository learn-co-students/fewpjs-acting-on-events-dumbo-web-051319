// Your code here

var dodger = document.getElementById("dodger");
dodger.innerHTML = '<img src= "http://files.softicons.com/download/animal-icons/meow-icon-set-by-iconka/png/256x256/cat_walk.png" width = 30, height = 30/> ';
dodger.style.bottom = "10px";
dodger.style.backgroundColor = "RGB(17,17,17)"

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}

function moveDodgerBottom() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 10}px`;
  }
}

 function moveDodgerUp() {
  var topNumbers = dodger.style.bottom.replace("px", "");
  var up = parseInt(topNumbers, 10);
  if (up < 380) {
    dodger.style.bottom = `${up + 10}px`;
  }
}
// function moveDodgerRight() {
//   var rightNumbers = dodger.style.right.replace("px", "");
//   var right = parseInt(rightNumbers, 10);
//   if (right > 0) {
//     dodger.style.right = `${left + 1}px`;
//   }
// }

document.addEventListener("keydown", function(e){
  if (e.key === "a") {
    moveDodgerLeft();
  }
  if (e.key === "d") {
    moveDodgerRight();
  }
  if (e.key === "w") {
    moveDodgerUp();
  }
  if (e.key === "s") {
    moveDodgerBottom();
  }
})
