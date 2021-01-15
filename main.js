const canvas=document.querySelector("canvas");
const input=document.querySelector("input");
const ctx=canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var x="";
ctx.lineWidth=6;
// All Arrays
const fontstyle=["Georgia","Times New Roman","Garamond","Verdana","Helvetica","Brush Script MT","Lucida Handwriting","Papyrus","Copperplate"]

const textarr=[];

const box=[];

const pyramid=[];

const colors=["	orangered","darkorange","black","blue","grey","purple","voilet","yellow","lime","springgreen","olive","darkturquoise","blue","indigo","magenta","deeppink","saddlebrown"];
window.addEventListener("resize",()=>{
    canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
})

// Text constructor
function text(word,x,y,c,ff){
    this.word=word;
    this.x=x;
    this.y=y;
    this.c=c;
    
    this.dx=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*6+1);

    this.dy=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*5+1);
    this.ff=ff;
    this.width=ctx.measureText(this.word).width;
//    console.log(this.width);
    this.draw=()=>{
        ctx.fillStyle=this.c;
        ctx.font = `35px ${this.ff}`;
    ctx.fillText(this.word,this.x,this.y);
    }
    this.animate=()=>{

        if(this.x+this.width>canvas.width||this.x<0)
        {
            this.dx=-this.dx;
        }
        if(this.y>canvas.height||this.y-20<0)
        {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
        }
    }
const addtext=()=>{
    word=input.value;
    input.value="";
    let x=Math.floor(Math.random()*canvas.width);
    let y=Math.floor(Math.random()*canvas.height);
    let c=colors[Math.floor(Math.random()*colors.length)];
    var ff=fontstyle[Math.floor(Math.random()*fontstyle.length)];
    textarr.push(new text(word,x,y,c,ff));
}

// Circle
function Circle(x,y,c){
    this.x=x;
    this.y=y;
    this.c=c;
    this.r=30;
   
    this.dx=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*6+1);

    this.dy=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*5+1);
    
    // console.log("working");
    this.draw=()=>{
        ctx.beginPath();
        ctx.strokeStyle=this.c;
        ctx.arc(this.x,this.y,30,0,Math.PI*2);
        ctx.stroke();
    }
    this.animate=()=>{
    
    if(this.x+this.r>canvas.width||this.x-this.r<0)
    {
        this.dx=-this.dx;
    }
    if(this.y+this.r>canvas.height||this.y-this.r<0)
    {
        this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
    }
}
const balls=[];
const addcircle=()=>{
    let c=colors[Math.floor(Math.random()*colors.length)];
    let x=Math.floor(Math.random()*canvas.width);
    let y=Math.floor(Math.random()*canvas.height);
    balls.push(new Circle(x,y,c))
}


// #Sqaures
function sqaure(x,y,c)
{
    this.x=x;
    this.y=y;
    this.c=c;
     
    this.dx=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*4+1);

    this.dy=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*4+1);

    this.draw=()=>{
        ctx.beginPath();
        ctx.strokeStyle=this.c;
        ctx.strokeRect(this.x,this.y,40,40);
    }
    this.animate=()=>{
    
    if(this.x+40>canvas.width||this.x-40<0)
    {
        this.dx=-this.dx;
    }
    if(this.y+40>canvas.height||this.y-40<0)
    {
        this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
    }
}

const addsquare=()=>{
    let x=Math.floor(Math.random()*canvas.width);
    let y=Math.floor(Math.random()*canvas.height);
    let c=colors[Math.floor(Math.random()*colors.length)];
    box.push(new sqaure(x,y,c));
    
}
// TRinagle
function triangle(x,y,c)
{
    this.x=x;
    this.y=y;
    this.c=c;
    
    this.dx=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*4+1);

    this.dy=(Math.floor(Math.random()*2)==1?1:-1)*(Math.random()*4+1);

    this.draw=()=>{
        
        ctx.strokeStyle=this.c;
        ctx.beginPath();
        ctx.moveTo(this.x,this.y+30);
        ctx.lineTo(this.x+60,this.y+30);
        ctx.lineTo(this.x+30,this.y);
        ctx.lineTo(this.x,this.y+30);
        ctx.stroke();
        ctx.closePath();

    }
    this.animate=()=>{
    
    if(this.x+50>canvas.width||this.x-50<0)
    {
        this.dx=-this.dx;
    }
    if(this.y+50>canvas.height||this.y-50<0)
    {
        this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
    }
}
const addtriangle=()=>{
    let x=Math.floor(Math.random()*canvas.width);
    let y=Math.floor(Math.random()*canvas.height);
    let c=colors[Math.floor(Math.random()*colors.length)];
    pyramid.push(new triangle(x,y,c));
}

const update=()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(var i=0;i<textarr.length;i++)
    {
        textarr[i].animate();
    }
    for(var i=0;i<balls.length;i++)
    {
        balls[i].animate();
    }
    for(var i=0;i<box.length;i++)
    {
        box[i].animate();
    }
    for(var i=0;i<pyramid.length;i++)
    {
        pyramid[i].animate();
        console.log();
    }
    requestAnimationFrame(update);

}
update();