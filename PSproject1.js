let xLine = 3;
let yLine = 3;

let currentPiece;
let blankPiece;

// let moves = 0;



let puzzle = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

// let finalPuzzle = ["1", "2", "3", "4", "5", "6","7","8","9"];
// let rightCombination = [];
// console.log(finalPuzzle)



// function start(){

// }

///////BOARD FUNCTIONALITY/////////////////////////////////////
window.onload = function(){
    for (let i=0; i < xLine; i++){
        for (let j=0; j < yLine; j++){

            let piece = document.createElement('img');
            piece.id = i.toString() + "-" + j.toString();
            piece.src = puzzle.shift() + ".jpg";

            // let finalPiece ;
            // finalPiece.id = i.toString() + "-" + j.toString();
            // finalPuzzle.push(finalPiece.src)
            

           
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

    

}

function dragStart()
{
    currentPiece = this; //piece being selected by clicking
    console.log(currentPiece)
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

    let isAdjacent = leftMove || rightMove || upMove || downMove;//CHANGE THE NAME OF THIS*******


     if(isAdjacent){

        let movedPiece = currentPiece.src;
        let replacedPiece = blankPiece.src;
        

        currentPiece.src = replacedPiece;
        blankPiece.src = movedPiece;

        // moves += 1;
        // document.getElementById("moves").innerText=moves;

    }

}

//////////////////////////////////TIMER/////////////////////////////////////////////
const keepPlaying = document.querySelector("#continue");

keepPlaying.addEventListener("click",  function(){
 timer(1)
});

function timer(minutes){
    let seconds = 10;
    let min = minutes;

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

            alert("Game Over")

        }

        
    }
    ticking();

}

// timer(1)

//////////////////////////////RESTART GAME//////////////////////////////////////////////

function restart()
{

}
///////////////////////////////GAME WON///////////////////////////////////////////////
function win()
{

    
    const areArraysEqual = puzzle.every((element, index) => {
        return element === finalPuzzle[index];
        });
  
        // console.log(areArraysEqual); // true

    if(areArraysEqual){

        alert("you won")
        

    }

}

//  win()
///////////////////////////////GAME LOST/////////////////////////////////////////////
function lose()
{

}


