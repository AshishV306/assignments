// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
function countFor(seconds) {
    let count = 1;
    let intervalId = setInterval(function () {
        console.log(`Counter: ${count}`);
        count++;
    }, 1000);
    setTimeout(() => clearTimeout(intervalId), (seconds + 1) * 1000);
}

countFor(10);