let xLine = 3;
let yLine = 3;

let currentPiece;
let blankPiece;


let originalPuzzle = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
const solutionPuzzle = ["1", "2", "3", "4", "5", "6","7","8","9"];

let puzzle; 
// console.log(puzzle)

let gameStart = false;



/////////////////////////////OVERLAY FUNCTIONALITY//////////////////////////
const startGame = document.querySelector(".overlay-text .visible");
    console.log(startGame) 
    startGame.addEventListener("click",  ()=>{
        // startGame[0].classList.remove("visible")
        alert("hi")
    });
    



///////BOARD FUNCTIONALITY/////////////////////////////////////
window.onload = function loadGame(){
    for (let i=0; i < xLine; i++){
        for (let j=0; j < yLine; j++){

            let piece = document.createElement('img');
            piece.id = i.toString() + "-" + j.toString();
            piece.src = originalPuzzle.shift() + ".jpg";
                   
            //Movement functionality

            piece.addEventListener("dragstart", dragStart);
            piece.addEventListener("dragover", dragOver);
            piece.addEventListener("dragenter", dragEnter);
            piece.addEventListener("dragleave", dragLeave);
            piece.addEventListener("drop", dragDrop);
            piece.addEventListener("dragend", dragEnd);

            document.getElementById("pieces").append(piece);
 
                      
        } 
        
        
    }

    puzzle = document.querySelectorAll("#pieces img" );
    // console.log(puzzle)

    
}

function dragStart()
{
    currentPiece = this; //piece being selected by clicking
    // console.log(currentPiece)
    
}


function dragOver(e)
{
    e.preventDefault()
}

function dragEnter(e)
{
    e.preventDefault()
}

function dragLeave(e)
{
   e.preventDefault()
}

function dragDrop()
{
    blankPiece = this; // piece being replaced
    
}

function dragEnd()

{
    if(!gameStart){
        return
    }
    if(!blankPiece.src.includes("3.jpg")){
        return;
    }

 
    let itemByXandY = currentPiece.id.split("-");   
    // console.log(itemByXandY) 
    let x1 = parseInt(itemByXandY[0]);
    let y1 = parseInt(itemByXandY[1]);

    let itemByX2andY2 = blankPiece.id.split("-");  
    // console.log(itemByX2andY2)  
    let x2 = parseInt(itemByX2andY2[0]);
    let y2 = parseInt(itemByX2andY2[1]);

    let leftMove = x1 == x2 && y2 == y1-1;
    // console.log(leftMove)
    let rightMove = x1 == x2 && y2 == y1+1;
    // console.log(rightMove)

    let upMove = y1 == y2 && x2 == x1-1;
    // console.log(upMove);
    let downMove = y1 == y2 && x2 == x1+1;
    // console.log(downMove)

    let adjacency = leftMove || rightMove || upMove || downMove;


    if(adjacency){

        let movedPiece = currentPiece.src;
        let replacedPiece = blankPiece.src;
        

        currentPiece.src = replacedPiece;
        blankPiece.src = movedPiece;
    }

    

    win()


    
}



//////////////////////////////////TIMER/////////////////////////////////////////////
const keepPlaying = document.querySelector("#continue");

keepPlaying.addEventListener("click",  function(){
 timer(1)
});

function timer(minutes){
    let seconds = 5;
    let min = minutes;
    gameStart = true;

    function ticking () {
        
        let timing = document.getElementById("timer");
        let lapsedMinutes = min -1 
        seconds--;

        timing.innerHTML = lapsedMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

        if(seconds > 0) {
            setTimeout(ticking, 1000)

        }else {
            if(min > 1){
                timer(min - 1);
            }
        }
        if(seconds == 0){

            gameOver()
    
        }

        
        
        
    }
    ticking();
    

}


///////////////////////////////GAME WON///////////////////////////////////////////////
function win()
{    
    // console.log(puzzle, solutionPuzzle)
    for(let i = 0; i< puzzle.length; i++){

        let w = puzzle[i].src.slice(-5, -4);
        // console.log(w + "new loop")

        
        if( w !== solutionPuzzle[i]){
            // alert("wrong call");
            return false;

        }


    }
    alert("CONGRATULATIONS!!! YOU WIN.");
    restart() 
    

    
    
     
    
}

//////////////////////////////RESTART GAME//////////////////////////////////////////////

function restart()
{
    
    let playAgain = prompt("Play again Y/N?");
    console.log(playAgain);

    if(playAgain == "Y")
    {
        location.reload();
    }
     
}




///////////////////////////////GAME LOST/////////////////////////////////////////////
function gameOver()
{
    // alert("game over")
    // restart()
    // ready()
    document.getElementById("game-over-text").addEventListener("visible");
}


