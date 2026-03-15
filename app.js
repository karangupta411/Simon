let userseq=[];
let gameseq=[];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"]

document.addEventListener('keypress', function (){
 if(started==false)
 {
    console.log("game start")
    started= true;
 }

 levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`
 
    let randInd = Math.floor(Math.random() * 3)
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`)
    gameseq.push(randColor);
    console.log(gameseq)
    gameFlash(randBtn);

}

function checkAns(idx){
   
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelUp,1000)
        }
    } else{
        h2.innerText = `Game Over! Press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
    
}

function btnPress(){
    // console.log(this);
    let btn = this;

    userFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}