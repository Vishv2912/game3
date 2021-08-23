class Player{
    constructor(){
           this.name = null;
           this.x = null;
           this.y = null;
           this.character = null;
           this.index = null;

    }




    getPlayerCount(){
        
        database.ref("playerCount").on("value",(data)=>{
        playerCount=data.val();
        console.log("PlayerCount", playerCount)
        })}
        
        
        updatePlayerCount(count){
        database.ref("/").update({
        playerCount:count
        
        })
        
        }
        
        updateInfo(){
        var playerRef="players/player"+player.index 
        database.ref(playerRef).set({
        character:this.character
        })
        }
}