//mecanismo de fisica
const Engine = Matter.Engine;
//mundo fisico
const World = Matter.World;
//objeto fisico
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;
var caixa1,caixa2,solo,pig,tronco,tronco2
,caixa3,caixa4,pig2,bird,back,troncofixo
,slingshot,barranco,parede1,parede2,teto;
var bg = 'sprites/bg.png'
var gameState = 'sling';
var score = 0;


function preload(){

//back = loadImage('sprites/bg.png');
gettiming()

}

function setup() {
 createCanvas(1200,400);
 

 engine = Engine.create();
 world  = engine.world;

caixa1 = new Box(600,375,50,50);
caixa2 = new Box(800,375,50,50);
solo = new Solo(width/2,395,width,10);
pig = new Pig(700,375);
tronco = new Tronco(700,350,250,PI/2);
bird = new Bird(100,100);
caixa3 = new Box(600,300,50,50);
caixa4 = new Box(800,300,50,50);
pig2 = new Pig(700,280);
tronco2 = new Tronco(700,270,250,PI/2);
//troncofixo = new Tronco(100,100,100,PI/2);
slingshot = new Slingshot(bird.body,{x:200,y:100});
barranco = new Solo(90,350,300,150);
parede1 = new Solo(1,138,10,275) ;
parede2 = new Solo(600,5,1300,10);
teto = new Solo(1195,200,10,400);

}

function draw() {
if (back){
background(back);


}

//atualizar mecanismo fisico
Engine.update(engine);

textSize(20)
text("score: "+ score,50,50)



caixa1.display();
caixa2.display();
caixa1.score();
caixa2.score();
solo.display();
pig.display();
pig.score();
tronco.display();
tronco.score();
caixa3.display();
caixa4.display();
caixa3.score();
caixa4.score();
pig2.display();
pig2.score();
tronco2.display();
tronco2.score();
bird.display();
//troncofixo.display();
slingshot.display();
barranco.display();
parede1.display();
parede2.display();
teto.display();



//text(mouseX +',' + mouseY,mouseX,mouseY) 

}
function mouseDragged(){
if(gameState !== 'noSling'){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}
}

function mouseReleased(){
gameState = 'noSling'
slingshot.fly();

}
function keyPressed(){
    if (keyCode === 32 && bird.body.speed < 3){
     
        Matter.Body.setPosition(bird.body,{x:200,y:110});
        slingshot.prender(bird.body)
        gameState = 'sling';
        bird.trajetoria = [];
    }


}

async function gettiming(){
var resposta = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
var respostajson = await resposta.json()
var datetime = respostajson.datetime;
var hora = datetime.slice(11,13)
if (hora>=06 && hora<=18){

  bg = "sprites/bg.png"

}else{

bg = "sprites/bg2.jpg"

}
back = loadImage(bg);

}
