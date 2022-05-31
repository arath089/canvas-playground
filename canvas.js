var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var maxRadius = 30; 

var colorArray = [
    '#ffaa33',
    '#99ffaa',
    '#bb2376',
    '#0ff000',
    '#411aa1'
];

var mouse = {                        //Get x and y value of our mouse
    x: undefined,
    y: undefined
}
//Event Listener for Interactivity
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

// Circle Object
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){       //Anonymous Draw function for drawing circles
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update= function(){    //Update function to update the values
        if( this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
            this.dx = -this.dx;
        }
        if( this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if( mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if (this.radius < maxRadius ){
                this.radius += 1;
            }
        }
        else if (this.radius > this.minRadius ){
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

for( var i= 0; i< 800; i++){
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2 ) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));                //circleArray is going to push a new circle each time this for loop is ran through
}


function animate(){             //creating an animate loop
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for( var i=0; i< circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();