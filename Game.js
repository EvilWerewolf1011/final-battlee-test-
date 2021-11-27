class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
         gameStateRef.on("value",function(data){
          gameState = data.val();
      })
  
    }

    async start()
    {

      if(gameState === 0)
      {   
        player = new Player();
        player.getCount();
        console.log(playerCount);
        form = new Form();
        form.display();
      }
    }

    play()
    {

      form.hide();
      Player.getPlayerInfo();
      if(allPlayers !== undefined)
      {
        image(backgroundImage,0,0,displayWidth,disssplayHeight);
      }
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

}