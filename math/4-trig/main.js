
window.onload = function() {
	var c = document.getElementById('c');
	var ctx = c.getContext('2d');
	var width = c.width = window.innerWidth;
	var height = c.height = window.innerHeight;

	var centerY = height * .5;
	var centerX = width * .5;
	var baseRadius = 100;
	var offset = 50;
	var speed = 0.1;
	var angle = 0;

	render();

	function render() {
		var radius = baseRadius + Math.sin(angle) * offset;

		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, width, height);
		ctx.fillStyle = "#0f0";
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
		ctx.fill();

		angle += speed;

		requestAnimationFrame(render);
	}
};
