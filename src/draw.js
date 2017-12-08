function drawBalls() {
	fill(255);
	for (var i = 0; i < balls.length; i++) {
		rect(balls[i].x, balls[i].y, balls[i].w, balls[i].w);
	}
}

function drawPaddles() {
	fill(255);
	for (var i = 0; i < paddles.length; i++) {
		rect(paddles[i].x, paddles[i].y, paddles[i].w, paddles[i].h);
	}
}

function setup() {
	createCanvas(canvasW, canvasH);
}

function draw() {
	prepare();
	update();

	// Draw world
	background(0);
	drawPaddles();
	drawBalls();
}