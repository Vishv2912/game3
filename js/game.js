class Game{
    constructor(){



    console.log("New Game")

    }

    getGameState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val()
            console.log("Game State", gameState)
        })
    }


    updateGameState(state){
        database.ref("/").update({
            gameState:state
      })  
      }

   start(){
    if(gameState==0){
       player = new Player();
     player.getPlayerCount();
      form=new Form();
       form.display();

 }
  }   


play(){
    

console.log("play state is on")




}






}