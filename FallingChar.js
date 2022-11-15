export default class FallingChar { 
    constructor(x, y, value, speed, fontsize){
        this.x = x;
        this.y = y;
        this.value = value;
        this.speed = speed;
        this.fontsize = fontsize
    };

    draw(ctx){
        ctx.shadowColor = "green"
        ctx.shadowBlur = Math.random()*15;

        ctx.fillStyle = "green";
        ctx.font = this.fontsize + "px sans-serif";
        ctx.fillText(this.value, this.x, this.y);

        this.y += this.speed;

        if(this.y >= innerHeight+this.fontsize){
            this.y = 0;
            this.x = Math.floor(Math.random()*innerWidth);
            this.speed = Math.random()*4+3
            this.fontsize = Math.random()*25
        };
    };
};