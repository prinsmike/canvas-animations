
window.onload = function() {
	var c = document.getElementById('c');
	var ctx = c.getContext('2d');
	var width = c.width = window.innerWidth;
	var height = c.height = window.innerHeight;

	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, width, height);

	ctx.strokeStyle = '#0f0';
	for (var i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.moveTo(Math.random() * width, Math.random() * height);
		ctx.lineTo(Math.random() * width, Math.random() * height);
		ctx.stroke();
	}
};
