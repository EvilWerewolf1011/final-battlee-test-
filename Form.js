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
      this.title.html("γπβπΌΓπ½πβπΈπΓπΉπΈππππΌγ");
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
        this.greeting.html("α΄‘α΄Ιͺα΄ΙͺΙ΄Ι’ κ°α΄Κ κ±α΄κ±α΄α΄α΄")
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
  