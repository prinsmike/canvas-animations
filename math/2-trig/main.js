
window.onload = function() {
	var c = document.getElementById('c');
	var ctx = c.getContext('2d');
	var width = c.width = window.innerWidth;
	var height = c.height = window.innerHeight;

	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, width, height);

	ctx.translate(0, height / 2);
	ctx.scale(1, -1);				// Flip the sign wave.

	for (var angle = 0; angle < Math.PI * 2; angle += .01) {
		var x = angle * 200;
		var y = Math.sin(angle) * 200;

		ctx.fillStyle = "#0f0";
		ctx.fillRect(x, y, 5, 5)
	}
};
