var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangle
c.fillRect(100, 100, 200, 200);
c.fillRect(300, 300, 200, 200);
c.fillRect(600, 400, 200, 200);

// Multiple Circles at same location

for( var i=0; i<3; i++){
    c.arc(800, 300, 30, 0, Math.PI * 2, false);
    c.stroke();
}