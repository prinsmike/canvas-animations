
cw = 3;				// Cell width.
v = 0.6;			// Velocity.
d = 1;				// Direction.
l = 8;				// The particle trail length.
color_step = 255 / l;

window.onload = function() {
	c = document.getElementById('gc');
	ctx = c.getContext('2d');

	w = c.width;
	h = c.height;

	init();
}

function init() {

	createParticle();

	requestAnimationFrame(update);
}

function createParticle() {
	p = [];
	for (var i = l-1; i >= 0; i--)
		p.push({x:i, y:5});
}

function update() {

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.strokeStyle = "#00ff00";
	ctx.strokeRect(0, 0, w, h);

	if (d == 1)
		for (var i = 0; i < p.length; i++)
			p[i].x = p[i].x + v;
	else if (d == -1)
		for (var i = 0; i < p.length; i++)
			p[i].x = p[i].x - v;

	for (var i = 0; i < p.length; i++)
		if (d == 1)
			drawCell(p[i].x, p[i].y, 255 - color_step * i);
		else
			drawCell(p[i].x, p[i].y, 0 + color_step * i);

	if (p[0].x < 0)
		d = 1;
	else if (p[l-1].x > w / cw)
		d = -1;

	ctx.fillStyle = 'rgba(0, 255, 0, 255)';
	ctx.fillText("Prototype: Particle Trail", 50, 50);

	requestAnimationFrame(update);
}

function drawCell(x, y, a) {
	ctx.fillStyle = "rgba(0, "+a+", 0, " + a + ")";
	ctx.fillRect(x*cw, y*cw, cw, cw);
}
