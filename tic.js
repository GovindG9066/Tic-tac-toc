let boxes=document.querySelectorAll(".box");
let msg= document.querySelector(".winner_contaner");
let head=document.querySelector("#win_hed");
let res_btn=document.querySelector("#res_game");
let turnO=true;

const winning=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
const rest_game=()=>{
    turnO=true;
    enabledbox();
    msg.classList.add("hide");
}

const wingame=(winner)=>{
    head.innerText=`The winner is player : ${winner}`;
    msg.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("Button was clicked");
            
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
});

const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkwinner=()=>{
    for(let pattarns of winning){
                    let pos1=boxes[pattarns[0]].innerText;
                    let pos2=boxes[pattarns[1]].innerText;
                    let pos3=boxes[pattarns[2]].innerText;
        
        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                    console.log("Winner",pos1);
                    disabledbox();
                    wingame(pos1);
                    
            }
        }
        
    }
    
};

res_btn.addEventListener("click",rest_game);