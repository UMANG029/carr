let restart=document.querySelector("button");
let left=document.querySelector(".left");
let right=document.querySelector(".right");



let lost=document.querySelector(".lost");
let scorediv=document.querySelector(".score");



let board=document.querySelector("canvas");


//let image=document.querySelector("img");
let y=200;
let vcar1=0;
let vcar2=0;
let vcar3=0;
let carx=175;
let pos1=75;
let score=0;
let pos2=175;
let random=Math.random();
let win=true;
let image=new Image();
image.src="car-2030056_1920.png";

let imagee=new Image();
imagee.src="auto-1941992_1920.png";

let no;
umang();


function umang(){
  
    board.height=530; 
    board.width=400;
    context=board.getContext("2d");
  
    setInterval(roadmove,50);


   
    setInterval(()=>{
 no=check(vcar1,vcar2,pos1,pos2);
console.log(no);
        if(no){
            move();
        }

    },30);

    



}



function move(){
  
if(check(vcar1,vcar2,pos1,pos2)){
    vcar1+=10;
    vcar2+=10;
    vcar3+=10;
}
else win=false;
    let random1=Math.random();

if(vcar1>539){
    score++;
    scorediv.innerText=score;
    if(random1<=0.2){
        pos1=175;
    
        }
        if(random1>0.2&&random1<=0.6){
            pos1=275;
        }
  if(random1>0.6&&random1<1.0){
       pos1=75;
                }
        
    vcar1=(random1*100);

  

}

if(vcar2>539){
    score++;
    scorediv.innerText=score;
   if(random1<=0.2){

pos2=75;
}
if(random1>0.2&&random1<=0.6){
  
    pos2=175;
    }
    if(random1>0.6&&random1<1.0){
     
        pos2=275;
        }


vcar2=random1*50;
}
display(vcar1,vcar2,pos1,pos2);

};

function display(car1,car2,pos1,pos2){
  
   // document.addEventListener("keydown",keymove);
    context.fillStyle="green";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle="black";
    context.fillRect(50,0,300,board.height);

    // context.fillStyle="red";
    // context.fillRect(230,ycor,40,40);
  draw(imagee,pos1,car1,60,60);

    // context.fillStyle="blue";
    // context.fillRect(370,sec,40,40);
    draw(imagee,pos2,car2,60,60);
    
  
    // context.fillStyle="orange";
    // context.fillRect(carx,450,40,40);

    draw(image,carx,450,60,75);
    road();

};
let roady;
function roadmove(){
roady+=10;
road(roady);

}



function road(arr){
  

let strip=0;
for(let i=0;i<8;i++){


    context.fillStyle="white";
    context.fillRect(150,strip,10,60);
    strip+=70;
}

strip=0;
for(let i=0;i<8;i++){


    context.fillStyle="white";
    context.fillRect(250,strip,10,60);
    strip+=70;
}

}
left.addEventListener("click",()=>{
    console.log("click");
    if(carx==175&&no==1){
          carx=carx-100;
 }
if (carx==275&&no==1) {          
     carx=carx-100;
              }

})
right.addEventListener("click",()=>{
console.log("hey");
    if(carx==175&&no==1){
                          carx=carx+100;
     } if(carx==75&&no==1){
                       carx=carx+100;         }
})
function keymove(e){
    if(carx==175&&win==true){
        if(e.code=="ArrowLeft")
                     carx=carx-100;
        }                if(carx==275&&win==true) {               if(e.code=="ArrowLeft")             carx=carx-100;  }    if(carx==175&&win==true){      if(e.code=="ArrowRight")                                         carx=carx+100;     } if(carx==75&&win==true){     if(e.code=="ArrowRight")                                         carx=carx+100;
              }
    };
    function draw(src,x,y,w,h){
        context.drawImage(src,x,y,w,h);

    }
    function check(car1y,car2y,car1x,car2x){
if(car1x==carx){
if(car1y>=395){
    lost.style.visibility="visible";
      //  console.log("touch");
return 0;
}
}
if(car2x==carx){
    if(car2y>=395){
        lost.style.visibility="visible";
      //  console.log("touch");
        return 0;
    }
    }
// console.log("car1y=",car1y);

// console.log("my car=",450);
return 1;
    }

    restart.addEventListener("click",()=>{

        lost.style.visibility="hidden";


    });
