import FallingChar from "./FallingChar.js";

const canvas = document.querySelector("#matrix");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight

window.addEventListener("resize", () => { 
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

let charARR = [];
let newCharARR = [];
let maxCharCount =  1000;

for(let i = 32; i < 127; i++){
    charARR.push(String.fromCharCode(i));
};

function gameLoop(){
    ctx.shadowBlur = 0;
    ctx.fillStyle = `rgba(0, 0, 0, ${Math.random()*0.2})`;
    ctx.fillRect(0, 0, innerWidth, innerHeight)

    if(newCharARR.length < maxCharCount){
        let fallingChar = new FallingChar(
            Math.floor(Math.random()*innerWidth),
            0,
            charARR[Math.floor(Math.random()*charARR.length)],
            Math.random()*4+3,
            Math.random()*25
        );
        newCharARR.push(fallingChar)
    };

    newCharARR.forEach((value) => {
        value.draw(ctx)
    });

    requestAnimationFrame(gameLoop);
};

gameLoop();