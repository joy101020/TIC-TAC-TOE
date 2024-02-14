let boxes = document.querySelectorAll(".minor_class");
let Reset = document.querySelector("#reset");
let new_game_btn = document.querySelector("#new_game");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turn_of_O = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]  
];
let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn_of_O === true){
            box.innerText = "O";
            turn_of_O = false;
        }
        else{
            box.innerText = "X";
            turn_of_O = true;
        }
        box.disabled = true;
        count++;
        checkWinner(count);
    });
});

let disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
let enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
let draw = ()=>{
    msg.innerText = `The Game is a Draw`;
    msgContainer.classList.remove("hide");
    disableBox();
    count = 0;
};
let showWinner = (winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner = (co)=>{
    for(let pattern of winpatterns){

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("Winner",posVal1);
                showWinner(posVal1);
            }
            else if(co === 9){
                console.log("Draw");
                draw();
            }         
        }  
    }
};

let resetGame = ()=>{
    turn_of_O = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

new_game_btn.addEventListener("click",resetGame);
Reset.addEventListener("click",resetGame);
