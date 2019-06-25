// Parts
var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#111111";
dodger.innerText = "🐈";
dodger.style.zoom = 2;



// My pixels are max/min pixels are different because I increased the size of my div using zoom
// Also changed the amount my div can travel
function moveDodgerLeft() {
  //we take out take the number out of the string
  var leftNumbers = dodger.style.left.replace("px", "");
  //we have to parse the current number
  var left = parseInt(leftNumbers, 10);
  //check to see if the dodger's left edge is not past the edge of the container
  if (left > -10 ) {
    //convert this back into a px string and move to the left by subtracting 1
    dodger.style.left = `${left - 10}px`;
  }
}
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  if (left < 170) {
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

function moveDogerUp() {
  var topNumbers = dodger.style.bottom.replace("px", "");
  var up = parseInt(topNumbers, 10);
  if (up < 180) {
    dodger.style.bottom = `${up + 10}px`;
  }
}

// BONUS???
var catOp = 1;
function freeCat() {
  if (catOp > 0) {
    catOp -= .075;
    setTimeout(function(){freeCat()}, 100);
  }
  dodger.style.opacity = catOp;
}

function goodBye() {
  let farewell = document.createElement('p');
  farewell.innerHTML = "Well Done!<br> Made By Daniela 🌱";
  document.body.append(farewell)
}

document.addEventListener("keydown", function(e) {
  //get the left arrow key
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowDown") {
    moveDodgerBottom();
  }
  if (e.key === "ArrowUp") {
    moveDogerUp();
  }
  if (e.key === "Escape") {
    alert("🎉 You freed this cat! ٩(ˊᗜˋ*)و🎉")
    alert("🐱: Farewell....");
    freeCat();
    goodBye();
    // window.location.reload();
  }
});

// bottom max 380 px
// left max equals 360 px
