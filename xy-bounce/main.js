
bd=10;		// Ball diameter.
bx=500;		// Ball X position.
by=250;		// Ball Y position.
xv=5;		// X velocity.
yv=5;		// Y velocity.

window.onload = function() {
	c = document.getElementById('gc');
	ctx = c.getContext('2d');
	setInterval(update, 1000/30);
}

function update() {
	bx += xv;
	by += yv;

	if (bx < 0 && xv < 0) {
		xv = -xv;
	}
	if (bx > c.width && xv > 0) {
		xv = -xv;
	}
	if (by < 0 && yv < 0) {
		yv = -yv;
	}
	if (by > c.height && yv > 0) {
		yv = -yv;
	}

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = '#00ff00';
	ctx.fillRect(bx - bd/2, by - bd/2, bd, bd);
	ctx.fillText("Prototype: XY Bounce", 50, 50)
}
