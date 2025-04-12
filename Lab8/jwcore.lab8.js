let bool = true;
window.onload = function(){
    function calcScore(input){
        let compInput = Math.floor(Math.random() * 3);
        if(compInput == 0){
            compInput = "rock";
        }else if(compInput == 1){
            compInput = "paper";
        }else if(compInput == 2){
            compInput = "scissors";
        }
        if(input == compInput){
            return("You chose " + input + ". The computer chose " + compInput + ". It's a tie!");  
        }
        if(input == "rock" && compInput == "scissors"){
            return("You chose " + input + ". The computer chose " + compInput + ". The user wins!");  
        }else if(input == "scissors" && compInput == "paper"){
            return("You chose " + input + ". The computer chose " + compInput + ". The user wins!");  
        }else if(input == "paper" && compInput == "rock"){
            return("You chose " + input + ". The computer chose " + compInput + ". The user wins!");  
        }else if(compInput == "rock" && input == "scissors"){
            return("You chose " + input + ". The computer chose " + compInput + ". The computer wins!");  
        }else if(compInput == "scissors" && input == "paper"){
            return("You chose " + input + ". The computer chose " + compInput + ". The computer wins!");
        }else if(compInput == "paper" && input == "rock"){
            return("You chose " + input + ". The computer chose " + compInput + ". The computer wins!");
        }
    }
    const rock = (document.getElementsByClassName("rock"));
    rock[0].addEventListener("click", ()=>{
        let ele = document.getElementsByClassName("answer")[0];
        ele.innerText = calcScore("rock");
    });
    const paper = (document.getElementsByClassName("paper"));
    paper[0].addEventListener("click", ()=>{
        let ele = document.getElementsByClassName("answer")[0];
        ele.innerText = calcScore("paper");
    });
    const scissors = (document.getElementsByClassName("scissors"));
    scissors[0].addEventListener("click", ()=>{
        let ele = document.getElementsByClassName("answer")[0];
        ele.innerText = calcScore("scissors");
    });
}