var c = document.getElementById( 'home' );
var ctx = c.getContext('2d');
ctx.beginPath();      // Tete corps
ctx.fillStyle ='#976F0F';
ctx.arc(180,130,30,0,Math.PI*2,false);
ctx.fill();
ctx.closePath();
ctx.moveTo(90,150);
ctx.lineTo(270,150);
ctx.quadraticCurveTo(290,160,270,170); //bras droit
ctx.lineTo(210,170);
ctx.lineTo(210,280);
ctx.quadraticCurveTo(200,290,190,280); //pied droit
ctx.lineTo(190,260);
ctx.quadraticCurveTo(180,240,170,260);
ctx.lineTo(170,280);
ctx.quadraticCurveTo(160,290,150,280); //pied gauche
ctx.lineTo(150,170);
ctx.lineTo(90,170);
ctx.quadraticCurveTo(70,160,90,150); //bras droit
ctx.fill();
ctx.closePath();
ctx.beginPath();      // la bouche
ctx.strokeStyle = 'red';
ctx.moveTo(170,140);
ctx.quadraticCurveTo(180,145,190,140); //bras droit
ctx.quadraticCurveTo(180,152,170,140); //bras droit
ctx.stroke();
ctx.closePath();
ctx.beginPath();      // sourcil gauche
ctx.strokeStyle = 'white ';
ctx.moveTo(165,115);
ctx.quadraticCurveTo(170,110,175,115); //bras droit
ctx.stroke();
ctx.closePath();
ctx.beginPath();      // sourcil droit
ctx.moveTo(185,115);
ctx.quadraticCurveTo(190,110,195,115); //bras droit
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //les yeux
ctx.fillStyle ='white';
ctx.arc(170,122,5,0,Math.PI*2,false);
ctx.arc(190,122,5,0,Math.PI*2,false);
ctx.fill();
ctx.closePath();
ctx.beginPath(); //les boutons
ctx.fillStyle ='#7A2975';
ctx.arc(180,180,5,0,Math.PI*2,false);
ctx.arc(180,200,5,0,Math.PI*2,false);
ctx.fill();
ctx.closePath();
