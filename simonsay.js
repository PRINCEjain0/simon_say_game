let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","orange","purple"]
let randInd;
let randColor;
let randBtn;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        
        started = true;
        levelUp();
    }
   
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");},250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");},250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    randInd = Math.floor(Math.random()*3);
    randColor = btns[randInd];
    randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    
    
}

function checkAns(ind){

    if(userSeq[ind]===gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            
            setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</br> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "grey";  
        },1000);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}