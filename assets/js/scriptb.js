var c = document.getElementById('logo');
    var ctx = c.getContext('2d');
    //LE E
     ctx.beginPath();
     ctx.strokeStyle = "#000000";
     ctx.lineWidth = 5;
     ctx.moveTo(360, 130);
     ctx.lineTo(180, 130);
     ctx.lineTo(180, 390);
     ctx.lineTo(360, 390);
     ctx.stroke();
     ctx.beginPath();
     ctx.strokeStyle = "#000000";
     ctx.moveTo(180, 270);
     ctx.lineTo(360, 270);
     ctx.stroke();
     //LE N
     ctx.strokeStyle = "#000000";
     ctx.lineWidth = 5;
     ctx.moveTo(655, 390);
     ctx.lineTo(655, 130);
     ctx.lineTo(900, 390);
     ctx.lineTo(900, 130);
     ctx.stroke();
     //LE 2
     ctx.beginPath();
     ctx.strokeStyle = "#ea4e1d";
     ctx.lineWidth = 15;
     ctx.moveTo(360,130);
     ctx.quadraticCurveTo(1000,-100,279,450);
     ctx.stroke();
     ctx.beginPath();
     ctx.strokeStyle = "#ea4e1d";
     ctx.lineWidth = 15;
     ctx.moveTo(279,450);
     ctx.quadraticCurveTo(500,380,500,400);
     ctx.stroke();
     //LE TEXTE
     ctx.font = " 50px Verdana, serif";
     ctx.fillStyle = "#8c8c8c";
     ctx.fillText("École du numérique", 635,440);
     ctx.fillText("du Noyonnais", 635,485);
     //LES HEXAGONES
       //CELUI DU HAUT
     ctx.beginPath();
     ctx.fillStyle = "#ebebeb";
     ctx.moveTo(980,140);
     ctx.lineTo(980,160);
     ctx.lineTo(965,170);
     ctx.lineTo(950,160);
     ctx.lineTo(950,140);
     ctx.lineTo(965,130);
     ctx.lineTo(980,140);
     ctx.fill();
       //LES 2 JUXTAPOSÉS
     ctx.beginPath();
     ctx.fillStyle = "#dbdadb";
     ctx.moveTo(960,175);
     ctx.lineTo(960,195);
     ctx.lineTo(945,205);
     ctx.lineTo(930,195);
     ctx.lineTo(930,175);
     ctx.lineTo(945,165);
     ctx.lineTo(960,175);
     ctx.fill();
     ctx.beginPath();
     ctx.fillStyle = "#595656";
     ctx.moveTo(1000,175);
     ctx.lineTo(1000,195);
     ctx.lineTo(985,205);
     ctx.lineTo(970,195);
     ctx.lineTo(970,175);
     ctx.lineTo(985,165);
     ctx.lineTo(1000,175);
     ctx.fill();
       //CELUI DU MILIEU
     ctx.beginPath();
     ctx.fillStyle = "#ea4e1a";
     ctx.moveTo(980,210);
     ctx.lineTo(980,230);
     ctx.lineTo(965,240);
     ctx.lineTo(950,230);
     ctx.lineTo(950,210);
     ctx.lineTo(965,200);
     ctx.lineTo(980,210);
     ctx.fill();
     //LES 2 JUXTAPOSÉS A LA FIN
   ctx.beginPath();
   ctx.fillStyle = "#878787";
   ctx.moveTo(960,245);
   ctx.lineTo(960,265);
   ctx.lineTo(945,275);
   ctx.lineTo(930,265);
   ctx.lineTo(930,245);
   ctx.lineTo(945,235);
   ctx.lineTo(960,245);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#ececec";
   ctx.moveTo(1000,245);
   ctx.lineTo(1000,265);
   ctx.lineTo(985,275);
   ctx.lineTo(970,265);
   ctx.lineTo(970,245);
   ctx.lineTo(985,235);
   ctx.lineTo(1000,245);
   ctx.fill();
   //LES 3 PETITS HEXAGONES
   ctx.beginPath();
   ctx.fillStyle = "#efefef";
   ctx.moveTo(1016,190);
   ctx.lineTo(1016,195);
   ctx.lineTo(1010,200);
   ctx.lineTo(1004,195);
   ctx.lineTo(1004,190);
   ctx.lineTo(1010,185);
   ctx.lineTo(1016,190);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#bbbbbb";
   ctx.moveTo(1022,202);
   ctx.lineTo(1022,207);
   ctx.lineTo(1016,212);
   ctx.lineTo(1010,207);
   ctx.lineTo(1010,202);
   ctx.lineTo(1016,197);
   ctx.lineTo(1022,202);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#ea4e1a";
   ctx.moveTo(1031,193);
   ctx.lineTo(1031,198);
   ctx.lineTo(1025,203);
   ctx.lineTo(1019,198);
   ctx.lineTo(1019,193);
   ctx.lineTo(1025,188);
   ctx.lineTo(1031,193);
   ctx.fill();
