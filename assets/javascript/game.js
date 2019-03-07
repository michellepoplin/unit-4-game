
$(document).ready(function(){
    var currentScore = 0;
    var targetScore = 0;
    var randomNum = randomNumGen();
    var winCount = 0;
    var lossCount = 0;
    var crystals;
});

        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random()* 12) + 1,
            
            if (this.crystalValues.includes(number)) {
                i--;
            } else {
                this.crystalValues[i] = number;
            }
        }
        
        this.targetNumber = Math.floor(Math.random()*(121-19) + 19);
        $("#totalScore").text(this.score);
        $("#numberStart").text(this.targetNumber);
        $("#winner").text(this.wins);
        $("#loser").text(this.losses);
    
    
        $("#your-score").text(currentScore);
        $("#target-score").text(targetScore);
        
        var checkWin = function(){
    
    
        if (this.score === this.targetNumber) {
            this.wins++;
            this.gameSet();
            alert("Congrats You Won!");
            console.log("Your Score: " + currentScore);
        } 
        else if (this.score > this.targetNumber) {
            this.losses++;
            this.gameSet();
            alert("Sorry you Lose!");
            console.log("Your Score: " + currentScore);
        }
    }
    
$("document").ready( function() {
    
   var startGame = function(){

    currentScore = 0;
    
    $("#crystalOne").click(function() {
        game.guessDisplay(game.crystalValues[0]);
    });
    
    $("#crystalTwo").click(function() {
        game.guessDisplay(game.crystalValues[1]);
    });
    
    $("#crystalThree").click(function() {
        game.guessDisplay(game.crystalValues[2]);
    });
    
    $("#crystalFour").click(function() {
        game.guessDisplay(game.crystalValues[3]);
    });
    
    
}



























  
 















