var backgroundImage;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var database;
var form, player, game;
var rasengan, shadow_clone, fire_ball, chidori;
var naruto,sasuke;

function preload()
{
  
  naruto = loadAnimation("naruto/rasengan_frames/r1.png");
  sasuke = loadAnimation("sasuke/fire ball frames/fire1.png");
  backgroundImage = loadImage("background.PNG");
  
}
function setup() 
{
  canvas = createCanvas(displayWidth - 20 , displayHeight - 110);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() 
{
  background(255,255,255);  

  if(playerCount === 2)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }

  drawSprites();
}

