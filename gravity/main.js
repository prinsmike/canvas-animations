
a=1;		// Acceleration.
y=50;		// Y position.
v=0;		// Velocity.
d=20;		// Diameter.

window.onload = function() {
	c = document.getElementById('gc');
	ctx = c.getContext('2d');
	setInterval(update, 1000/30);
}

function update() {
	y += v;

	v += a;

	if (y >= c.height - d/2) {
		v = 0;
		a = 0;
		y = c.height - d/2;
	}

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = '#00ff00';
	ctx.fillRect(c.width/2 - d/2, y - d/2, d, d);
	ctx.fillText("Prototype: Gravity", 50, 50)
}
