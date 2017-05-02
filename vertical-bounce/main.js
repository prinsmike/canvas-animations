
bd=10;	// Ball diameter.
by=50;	// Ball Y position.
yv=5;	// Y velocity.

window.onload = function() {
	c = document.getElementById('gc');
	ctx = c.getContext('2d');
	setInterval(update, 1000/30);
}

function update() {

	by += yv;

	if (by < 0 && yv < 0) {
		yv = -yv;
	}
	if (by > c.height && yv > 0) {
		yv = -yv;
	}

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = '#00ff00';
	ctx.fillRect(c.width/2 - bd/2, by-bd/2, bd, bd);
	ctx.fillText("Prototype: Vertical Bounce", 50, 50);
}
