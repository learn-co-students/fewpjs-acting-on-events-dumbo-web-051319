


  const moveDodgerLeft = () => {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 2}px`;
    }
}


    const moveDodgerRight = () => {
        let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 14);
   
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    
        }
    }