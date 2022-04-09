// colour select
let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];

// background colour changes when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
// select a random number between 0-6
    let index = parseInt((Math.random()*colors.length)+1);
// gets the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`;
})