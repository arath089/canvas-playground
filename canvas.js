var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Multiple Circles at same location

// for( var i=0; i<100; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
// }

var radius = 30;
var x = 200;
var dx = 3;
var y = 200;

function animate(){             //creating an animate loop
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, 200, radius, 0, Math.PI * 2, false);
    c.stroke();
    if( x + radius > innerWidth || x - radius < 0 ){
        dx = -dx;
    }
    x += dx;
}

animate();