class Player {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update()
    {

      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        
      });
    }

    static getPlayerInfo()
    {

      var ref = database.ref("players");
      ref.on('value',(data)=>
      {

        allPlayers = data.val();

      });

    }


}