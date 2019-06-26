// Your code here

let dodger = document.getElementById("dodger");
  dodger.style.backgroundColor = "#FF69B4";
  dodger.style.bottom = "0px";

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    console.log(leftNumbers)
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight () {
    let leftNumbers = dodger.style.left.replace("px", "");
    console.log(leftNumbers)
    let left = parseInt(leftNumbers, 10);

    if (left > 0 ) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  // function getCurrendLeftCoordinate() {
  //
  // }
  //
  //
  // function move(toPx) {
  //
  // }

  // function moveDodgerRight() {
  //   var leftNumbers = dodger.style.left.replace('px', '');
  //   var left = parseInt(leftNumbers, 10)
  //   if (left > 0) {
  //     dodger.style.left = `${left + 1}px`
  //   }
  // }


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
