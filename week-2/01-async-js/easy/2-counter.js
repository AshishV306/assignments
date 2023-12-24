// 
function countForWithoutSetInterval(seconds) {
    let count = 1;
    function printCounter() {
      console.log(`Counter: ${count}`);
      count++;
  
      if (count <= seconds) {
        setTimeout(printCounter, 1000);
      }
    }
    printCounter();
  }
  countForWithoutSetInterval(10);