var c = document.getElementById( 'home' );
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.fillStyle = '#AA6522';
ctx.moveTo(150, 200);
ctx.lineTo(230, 200);
ctx.lineTo(190, 320);
ctx.lineTo(150, 200);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = '#8A0908';
ctx.moveTo(150, 200);
ctx.quadraticCurveTo(190, 50, 230, 200);
ctx.fill();
ctx.closePath();
