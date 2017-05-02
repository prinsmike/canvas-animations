
bd=10;	// Ball diameter.
by=50;	// Ball Y position.
yv=5;	// Y velocity.

bx=50	// Ball X position.
xv=10;	// X velocity.

window.onload = function() {
	c = document.getElementById('gc');
	ctx = c.getContext('2d');
	setInterval(update, 1000/30);
}

function update() {

	by += yv;
	bx += xv;

	if (by < 0 && yv < 0) {
		yv = -yv;
	}
	if (by > c.height && yv > 0) {
		yv = -yv;
	}

	if (bx < 0 && xv < 0) {
		xv = -xv;
	}
	if (bx > c.width && xv > 0) {
		xv = -xv;
	}

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = '#00ff00';
	ctx.fillRect(c.width/2 - bd/2, by-bd/2, bd, bd);
	ctx.fillRect(bx-bd/2, c.height/2 - bd/2, bd, bd);
	ctx.fillText("Prototype: Cross Bounce", 50, 50);
}
