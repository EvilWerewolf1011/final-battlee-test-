class Form {

    constructor() {

      this.reset = createButton('Reset');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
    }
    hide(){
      this.greeting.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("『𝕋ℍ𝔼×𝔽𝕀ℕ𝔸𝕃×𝔹𝔸𝕋𝕋𝕃𝔼』");
      this.title.position(displayWidth/2 - 170, 0);
  
      this.reset.position(displayWidth - 100,20);
  
      playerCount+=1;
      console.log(playerCount);
      if (playerCount === 1)
      {
        player.name = "Naruto"

      }else{

        player.name = "Sasuke"

      }

      console.log(player.name);
        
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("ᴡᴀɪᴛɪɴɢ ꜰᴏʀ ꜱᴀꜱᴜᴋᴇ")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.reset.mousePressed(()=>
        {
          game.update(0);
          player.updateCount(0);
          //Player.deleteAllPlayers();
          //Player.updateCarsAtEnd(0);
  
        });
  
    }
  }
  