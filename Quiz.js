class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
      background("yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(20);
    fill("black");
    text("*Result Of Quiz",400,50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){

      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct is highlighted in green colour!",130,230);
      
    
    for(var plr in allContestants){
      
      var correctAns = "3";
      if(correctAns === allContestants[plr].answer){
        fill("Green");
        text(allContestants[plr].name + ": "+allContestants[plr].answer,350,300)
      }
        
        
      else{
        fill("red");
        text(allContestants[plr].name + ": "+allContestants[plr].answer,200,300)
      }
        

     

    }
  }
  }

}
