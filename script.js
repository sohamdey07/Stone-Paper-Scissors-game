let userScore=0;
let compScore=0;


let choices=document.querySelectorAll(".choice");
let results=document.querySelector("#result");
let yourScore=document.querySelector("#your-score");
let computerScore=document.querySelector("#computer-score");
const genCompChoice=()=>
{
    let option=["rock","paper","scissors"];
    let optIdx=Math.floor(Math.random()*3);
    return option[optIdx]
}


const showWinner=(userWin)=>
{
    if(userWin===true)
        {
            userScore++;
            console.log("You won! score =",userScore);
            results.innerText=("You Win! Congratulation.");
            results.style.backgroundColor="green";
            yourScore.innerText=(userScore);
            
        }
    else{
            compScore++;
            console.log("You loss! computer score =",compScore);
            results.innerText=("You lose!");
            results.style.backgroundColor="red";
            computerScore.innerText=(compScore);

        }
}

const drawGame=()=>
{
    console.log("Game was Draw!")
    results.innerText=("Game was Draw! Try again.")
    results.style.backgroundColor="#081b31"
}

const playGame=(userChoice)=>
{
    console.log("User choice =",userChoice);
    const compChoice=genCompChoice()
    console.log("Computer choice =",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=(compChoice==="scissors")?true:false;
        }
        else if(userChoice==="paper")
        {
            userWin=(compChoice==="rock")?true:false;
        }
        else{
            userWin=(compChoice==="paper")?true:false;
        }
        showWinner(userWin);
    }
    



}

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});