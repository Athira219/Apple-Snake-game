//varaiable declaration

var cvs = document.getElementById("canvas").getContext("2d");
var sposx = 80;
var sposy = 80;
var nposx = 0;
var nposy = 0;
var fposx = 140;
var fposy = 140;
var snakeTail = [];
var snakeSize = 1;
var score = 0;
var gameStatus = "Play again";




//onload function

window.onload = function(){
    document.addEventListener("keydown",inputControl);
    function inputControl(e){
        //console.log(e.keyCode);
       // console.log(e.key);
    
        switch(e.keyCode) {
        
        case 38:
            
                //UP
                nposy -= 20;
                nposx =0;
                break;
        
    
            case 40:
                 //down
                nposy += 20;
                nposx =0;
                break;
            
            
    
            case 39:
                //RIGHT
                nposx += 20;
                nposy =0;
                break;
            
            case 37:
            
                //LEFT
                nposx -= 20;
                nposy =0;
                break;
            }
        }


       

    game = setInterval(mainGame,200);
    
    }

//main game
function mainGame()
{
    document.getElementById("game-status").innerHTML = gameStatus;
    document.getElementById("score").innerHTML = score;
    // move snake
    sposx += nposx;
    sposy += nposy;

    
     //control snake movement
    
     if(sposx>400){
         sposx=0;
    }
    if(sposy>400){
        sposy=0;
    }
    
    if(sposx<0){
         sposx=400;
    }
    if(sposy<0){
         sposy=400;
    }

    //game area   
    //background
    cvs.fillStyle = "black";
    cvs.fillRect(0,0,400,400);



//gride line
for(var cl=0; cl<400; cl+=20){
    cvs.moveTo(cl,0);
    cvs.lineTo(cl,400);
}

for(var rl=0; rl<400; rl+=20){
    cvs.moveTo(0,rl);
    cvs.lineTo(400,rl);
}

cvs.strokeStyle="gray";
cvs.stroke();

//snake
cvs.fillStyle = "yellow";
cvs.fillRect(sposx,sposy,20,20);

for(var i=0; i<snakeTail.length;i++){
    cvs.fillRect(snakeTail[i].x,snakeTail[i].y,20,20);
     
    if(sposx == snakeTail[i].x&&
        sposy == snakeTail[i].y&&
        snakeSize>1
        ){
            clearInterval(game);
            gameStatus = 'Game Over';
            document.getElementById('game-status').innerHTML = gameStatus;

        }
}



//fruit
cvs.fillStyle = "red";
cvs.fillRect(fposx,fposy,20,20);


//if snake eat fruit
if(sposx==fposx && sposy==fposy)
{
    snakeSize++;
    score ++;
     
    fposx = Math.floor(Math.random()*20)*20;
    fposy = Math.floor(Math.random()*20)*20;
}

snakeTail.push({x:sposx, y:sposy});
    while(snakeTail.length > snakeSize){
        snakeTail.shift();

    }
    
   

}
