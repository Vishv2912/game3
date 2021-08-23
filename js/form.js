class Form{
constructor(){


this.guard=createButton("Guard");
this.thief=createButton("Thief");
this.story=createElement("a6");
this.inputName=createInput("Enter Name")
this.guardTask=createElement("h3")
this.thiefTask=createElement("h3")
this.playButton=createButton("LET'S PLAY")

}
display(){
/*
this.story.html("There Was a millionaire. He loved diamonds,and all the diamonds were worth crores of rupees./n One day he wanted to go abroad for work, so he put his favorite diamond in a maze and put a guard to protect it./n As soon as a gang of thieves heard this news, they sent 2 of the sharpest thieves in their gang to steal the diamond./n Let's see if the guard catches the thieves or The thief was cleverly stealing diamonds ")
this.story.position(displayHeight/2-900,100)

*/
this.inputName.position(displayWidth/2-50,450)
this.inputName.style("width","100px")
this.inputName.style("height","25px")
this.inputName.style("backgroundColor","yellow")


this.playButton.hide()

this.guard.position(displayWidth/2+150,550)
this.guard.style("backgroundColor","yellow")
this.guard.style("width","200px")
this.guard.style("height","50px")
this.guard.style("borderRadius","10px")

this.thief.position(displayWidth/2-275,550)
this.thief.style("backgroundColor","yellow")
this.thief.style("width","200px")
this.thief.style("height","50px")
this.thief.style("borderRadius","10px")

this.playButton.position(displayWidth/2,500)
        this.playButton.style("backgroundColor","aqua")
        this.playButton.style("width","200px")
        this.playButton.style("height","50px")
        this.playButton.style("borderRadius","100px")



this.guard.mousePressed(()=>{
    player.character = "guard"
    playerCount += 1;
    player.index = playerCount
    player.updatePlayerCount(playerCount)
    player.updateInfo()
    this.guard.hide()
    this.thief.hide()
    this.inputName.hide();
    

    this.guardTask.html("Guard Tasks : The guard should catch the theif without letting him steal the diamond    ")
this.guardTask.position(400,250)
   this.playButton.show()
    

})


    this.thief.mousePressed(()=>{
        
        player.character="theif";
        playerCount += 1;
        player.index = playerCount;
        player.updatePlayerCount(playerCount);
       
        player.updateInfo()
        this.guard.hide();
        this.thief.hide();
        this.inputName.hide();
     
        
        this.thiefTask.html("Tasks For Theif : The theif should to  steal the diamond without getting caught by then guard");
        this.thiefTask.position(400,250)
        
        
    this.playButton.show()

        })
this.playButton.mousePressed(()=>{
gameState=PLAY;
game.updateGameState(2)

})



}



}


