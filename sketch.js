var playercount = 0;
var gamestate = 0; 
var player,form,game
var database ;
var allplayers ; 
var car1,car2,car3,car4,cars;
var distance = 0;
var c1,c2,c3,c4,track
function preload(){
c1 = loadImage ("images/car1.png");
c2 = loadImage ("images/car2.png");
c3 = loadImage ("images/car3.png"); 
c4 = loadImage ("images/car4.png");
track =loadImage ("images/track.jpg"); 

}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas (displayWidth -20, displayHeight -20);
game = new Game();
game.getState ();
game.Start (); 
  
}

function draw(){
  background("white");
  
  if (playercount === 4  ){
    game.update (1);
  } 
   if (gamestate === 1 ){
     game.play ();
   }   
   if (gamestate === 2){
     game.end ();
   }
  
} 


