var Trex;
var running;
var piso, pisoImagen;

function preload(){//precarga
 running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
 pisoImagen = loadImage("ground2.png")
}

function setup(){//configuración del juego
 createCanvas(600,200);
 Trex = createSprite(50,160,10,30);
 Trex.addAnimation("corriendo", running);
 Trex.scale=0.5;
 
 piso = createSprite(300,180,600,10);
 piso.shapeColor="brown";
 piso.addImage(pisoImagen);
}

function draw(){//Dibujar
 background("gray");
 drawSprites();

 if(keyDown("space")){
   Trex.velocityY= -10;
 }
 
 Trex.velocityY = Trex.velocityY + 0.8;
 Trex.collide(piso);
}
