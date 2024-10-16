# physics-simulator
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Physics Simulator</title>
    <style>
        canvas {
            border: 1px solid black;
        }
        .controls {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Physics Simulator: Frictionless Surface</h1>
    <canvas id="simCanvas" width="800" height="400"></canvas>

    <div class="controls">
        <label for="block1Mass">Block 1 Mass:</label>
        <input type="number" id="block1Mass" value="2">
        <label for="block1Vel">Block 1 Velocity:</label>
        <input type="number" id="block1Vel" value="5">

        <label for="block2Mass">Block 2 Mass:</label>
        <input type="number" id="block2Mass" value="3">
        <label for="block2Vel">Block 2 Velocity:</label>
        <input type="number" id="block2Vel" value="-3">

        <button onclick="startSimulation()">Start Simulation</button>
    </div>

    <script src="simulator.js"></script>
</body>
</html>
