var s = 20;

window.onload = function() {
	c = document.getElementById('gc');
	ctx = c.getContext('2d');
	setInterval(update, 1000/30);
}

function update() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = '#00ff00';
	ctx.fillRect(c.width/2 - s/2, c.height/2 - s/2, s, s);
	ctx.fillText("Prototype: Square", 50, 50)
}
