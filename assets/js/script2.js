var c = document.getElementById( 'ufo' );
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.fillStyle ='#e0e1f3';
ctx.bezierCurveTo(100, 200, 200, 150, 300, 200 );
ctx.bezierCurveTo(300, 200, 200, 270, 100, 200 );
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle ='white';
ctx.bezierCurveTo(175, 180, 200, 120, 225, 180 );
ctx.fill();
ctx.closePath();
