var ball;
var position,database;
var game,form,player,gameState=0,playerCount=0;
var allplayers;
var cars,car1,car2,car3,car4;
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-20);
   game=new Game();
   game.getstate();
   game.start();
}

function draw(){
    background("white");
if(playerCount===4){

    game.update(1);
}
if(gameState===1){
game.play();
}   
}

