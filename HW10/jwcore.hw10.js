let bool = true;
 do{
    let input;
    do{
        input = prompt("Rock, Paper, or Scissors?");
        input = input.toLowerCase();
        if(input == "rock" || input == "paper" || input == "scissors"){ 
                bool = false;
        } else{ 
            console.error("The value you entered was not paper, rock, or scissors. Please try again.");  

        }
    }while(bool == true);
    let compInput = Math.floor(Math.random() * 3);
    if(compInput == 0){
        compInput = "rock";
    }else if(compInput == 1){
        compInput = "paper";
    }else if(compInput == 2){
        compInput = "scissors";
    }
    console.log("user chose: " + input);
    console.log("computer chose: " + compInput);  
    if(input == compInput){
        console.log("Tie!");  
    }
    if(input == "rock" && compInput == "scissors"){
        console.log("User Wins!");  
    }else if(input == "scissors" && compInput == "paper"){
        console.log("User Wins!");  
    }else if(input == "paper" && compInput == "rock"){
        console.log("User Wins!");  
    }else if(compInput == "rock" && input == "scissors"){
        console.log("Computer Wins!");  
    }else if(compInput == "scissors" && input == "paper"){
        console.log("Computer Wins!");  
    }else if(compInput == "paper" && input == "rock"){
        console.log("Computer Wins!");  
    }
    let text = "If you would like to play again, press Ok. Otherwise, press cancel."
    if(confirm(text) == true){
        bool = true;
    } else{
        bool = false;
    }

} while(bool == true);