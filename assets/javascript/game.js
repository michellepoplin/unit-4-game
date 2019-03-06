
var game = { 
    crystalValues: [],
    targetNumber: 0,
    score: 0,
    wins: 0,
    losses: 0,
    
    gameSet: function() {
        this.score = 0;
        
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random()*(13 - 1) + 1);
            
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
    },
    
    guessDisplay: function(a) {
        game.score += a;
        $("#totalScore").text(game.score);
        
        game.rules();
    },
    
    rules: function() {
        if (this.score === this.targetNumber) {
            this.wins++;
            this.gameSet();
            alert("Congrats You Won!")
        } else if (this.score > this.targetNumber) {
            this.losses++;
            this.gameSet();
            alert("Sorry you Lose!")
        }
    }
    
};
    



$("document").ready( function() {
    
    game.gameSet();
    
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
    
    
});






























// var game = { 
//     crystalValue: [],
//     wins: 0,
//     loses: 0,
//     score: 0,
//     numberGuess: 0,
//     targetNumber: 0,
    
//     setUp: function() {
//         this.score = 0;
        
//         for (var i = 0; i < 4; i++) {
//             var number = Math.floor(Math.random()*(13 - 1) + 1);
            
//             if (this.crystalValues.includes(number)) {
//                 i--;
//             } else {
//                 this.crystalValues[i] = number;
//             }
//         }
        
//         this.target = Math.floor(Math.random()*(121-19) + 19);
//         $("#totalScore").text(this.score);
//         $("#numberToGuess").text(this.targetNumber);
//         $("#winer").text(this.wins);
//         $("#losser").text(this.loses);
//     },
    
//     display: function(a) {
//         game.score += a;
//         $("#totalScore").text(game.score);
        
//         game.compare();
//     },
    
//     compare: function() {
//         if (this.score === this.targetNumber) {
//             this.wins++;
//             this.gameSet();
//         } else if (this.score > this.targetNumber) {
//             this.loses++;
//             this.gameSet();
//         }
//     }
    
// };
    



// $("document").ready( function() {
    
//     game.gameSet();
    
//     $("#crystalOne").click(function() {
//         game.dispalay(game.crystalValues[0]);
//     });
    
//     $("#crystalTwo").click(function() {
//         game.display(game.crystalValues[1]);
//     });
    
//     $("#crystalThree").click(function() {
//         game.display(game.crystalValues[2]);
//     });
    
//     $("#crystalFour").click(function() {
//         game.display(game.crystalValues[3]);
//     });
    
    
// });







// var game= {
//     crystalVale: [],
//     wins: 0,
//     loses: 0,
//     score: 0,
//     numberGuess: 0,
//     targetNumber: 0,
    
        // gameSet: function() {
        //     this.score = 0;

        //     for (var i = 0; i < 4; i++) {
        //     var number= Math.floor(math.random()*(13 - 1) + 1);
        //     if (this.crystalValue.includes(number)) {
        //          i--;
        //     } else {
        //          this.crystalValue[i] = number;
        //     }
        // }

    //     this.targetNumber = Math.floor (Math.random()*(121-19)+ 19);
    //     $("#totalScore").text(this.score);
    //     $("#numberToGuess").text(this.targetNumber);
    //     $("winner").text(this.wins);
    //     $("loser").text(this.loses);


    // },

    // Display: function (a) {
    //     game.score += a;
    //     $("totalScore").text(game.score);

    //     game.compare();
    // },

//     compare: fuction() {
//         if (this.score === this.targetNumber) {
//             this.wins++;
//             this.gameSet();
//         } else if (this.score > this.targetNumber) {
//             this.loses++;
//             this.gameSet();
//         }
//     }
// };







