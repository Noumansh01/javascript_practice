let userScore=0;
let compScore=0;

let select = document.querySelectorAll(".select");
let msg = document.getElementById("msg");
let userScoreid= document.getElementById("user-score");
let compScoreid= document.getElementById("comp-score");


let compChoice=()=>{
    const option=["rock","paper","scissor"];

        const ranNum= Math.floor(Math.random()*3);
        return option[ranNum];

}

const draw = ()=>{
    userScore = 0;
    compScore = 0;
    msg.innerText="Game Draw! Play Again";
    msg.style.backgroundColor="chartreuse";
};

const showwinner=(userWin)=>{
if(userWin){
    userScore++;
    userScoreid.innerText=userScore;
    msg.innerText="You win";
    msg.style.backgroundColor="green";

}else{
    compScore++;
    compScoreid.innerText=compScore;
    msg.innerText="You lose";
    msg.style.backgroundColor="red";
}

};

function playGame(userid){
   const compValue= compChoice();
   if(userid===compValue){
    // game draw
    draw();

   }else{
    let userwin = true;
    if(userid==="rock"){
        userwin = compValue === "paper"? false : true ; 
    }
    else if(userid=== "paper"){
        userwin = compValue === "scissor"? false : true ; 
    }else{
        userwin = compValue === "rock"? false : true ; 
    }
    showwinner(userwin);
   } 
};

select.forEach((sel)=>{
    
    sel.addEventListener("click",()=>{
        const id=sel.getAttribute("id");
            playGame(id);
    });
});