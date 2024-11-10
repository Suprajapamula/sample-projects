let boxs=document.querySelectorAll(".box")
let isClicked=true;
let winner=document.querySelector(".winner")
let winningPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let resetBtn=document.getElementById("resetBtn")
resetBtn.innerHTML="Reset";
resetBtn.classList.add("btn-danger")
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clicked");
        if(isClicked){  //First player
            box.innerHTML="X";
            isClicked=false
        }
        else{
            box.innerHTML="O";
            isClicked=true
        }
        box.disabled=true;

        checkWinner()
    })
})

function checkWinner(){
    for(let pattern of winningPatterns){
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxs[pattern[0]].innerHTML,boxs[pattern[1]].innerHTML,boxs[pattern[2]].innerHTML)

        let pos1Val=boxs[pattern[0]].innerHTML;
        let pos2Val=boxs[pattern[1]].innerHTML;
        let pos3Val=boxs[pattern[2]].innerHTML;

        if((pos1Val !="" && pos2Val!="" && pos3Val!="") && ((pos1Val===pos2Val) && (pos2Val===pos3Val))){
            // console.log(`winner ${pos1Val}`)
            winner.innerHTML=`Winner is ${pos2Val}`;
            boxs.forEach((box)=>{
                box.disabled=true;
            })
            resetBtn.innerHTML="New Game"
            resetBtn.classList.add("btn-success");
            resetBtn.classList.remove("btn-danger")
        }
    }
}


resetBtn.addEventListener("click",()=>{
    boxs.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
        winner.innerHTML="";
        resetBtn.innerHTML="Reset"
        resetBtn.classList.add("btn-danger")
    })
})
