const canvas = document.getElementById('simCanvas');
const ctx = canvas.getContext('2d');

let block1, block2, wall;

function startSimulation() {
    // Get user inputs
    const mass1 = parseFloat(document.getElementById('block1Mass').value);
    const vel1 = parseFloat(document.getElementById('block1Vel').value);
    const mass2 = parseFloat(document.getElementById('block2Mass').value);
    const vel2 = parseFloat(document.getElementById('block2Vel').value);
    
    // Initialize blocks and wall
    block1 = new Block(50, 50, 50, mass1, vel1);
    block2 = new Block(300, 50, 50, mass2, vel2);
    wall = canvas.width - 10;  // The wall is at the right edge of the canvas

    // Start animation loop
    requestAnimationFrame(updateSimulation);
}

class Block {
    constructor(x, y, size, mass, velocity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.mass = mass;
        this.velocity = velocity;
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += this.velocity;

        // Check for wall collision
        if (this.x + this.size >= wall) {
            this.velocity *= -1;  // Reverse direction
        }
    }
}

function updateSimulation() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw blocks
    block1.update();
    block1.draw();
    block2.update();
    block2.draw();

    // Request the next frame
    requestAnimationFrame(updateSimulation);
}
