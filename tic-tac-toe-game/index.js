let boxes= document.querySelectorAll(".box");
let btn= document.querySelector("#reset-btn");
let msg= document.querySelector("#msg");
let msg_box= document.querySelector(".msg-box");
let new_btn= document.querySelector("#new-btn");


let turn0= true;
let count = 0;

const gameWinPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

const reset=()=>{
    turn0=true;
    enablebtn();
    msg_box.classList.add("hide");
}

boxes.forEach((box)=>{
box.addEventListener("click", ()=>{
    
    if(turn0){
        box.innerText="O";
        box.style.color="blue";
        turn0=false;
    }else{
        box.innerText="X";
        box.style.color="pink";
        turn0=true;
    }
        box.disabled=true;

        count++;
        if(count===9){
           checkDraw();
        }else{

            checkWinner();
        }

        
        
})
})

function disablebtn(){
for(let box of boxes){
    box.disabled=true;
}
}
function enablebtn(){
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
}

function showWinner(winner){
    msg_box.classList.remove("hide");
    msg.innerText=`${winner} is winner`;
    disablebtn();
    
}

function checkWinner(){
    for(let pattern of gameWinPattern){
    

      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            
            showWinner(pos1);
            
        }
      }
    }

}
function checkDraw(){
    msg_box.classList.remove("hide");
    msg.innerText="Game Draw";
    disablebtn();
}

btn.addEventListener("click",reset);
new_btn.addEventListener("click",reset);
