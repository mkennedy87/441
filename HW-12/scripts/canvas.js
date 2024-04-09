var canvas;
var ctx;
var x = 50;
var y = 50;
var square1;
var direction;
var questions;
var squareArray = [];
var goodSquareArray = [];
var lives = 3;
var score = 0;

$(document).ready(function(){
    
    setup(); 
//    setupGood(); 
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});


function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,120,50,50,"#0000FF");
    square2 = new Square(650,25,100,100,"#FF0000");
    square3 = new Square(500,500,250,250,"#00FF00");

    $.getJSON("data/information.json", function(data) {
        for(let i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
    // square3 = new Square(500,500,500,500,"#00FF00");
    $.getJSON("data/goodSquareInfo.json", function(data) {
        for(let i = 0; i < data.goodSquares.length; i++)
        {
            goodSquareArray.push(new Square(data.goodSquares[i].x,data.goodSquares[i].y, data.goodSquares[i].h, data.goodSquares[i].w, data.goodSquares[i].color));
        }
        // drawGoodSquare();
        drawSquare();
    });
    

    
}
// function setupGood()
// {
//     canvas = document.getElementById("myCanvas");
//     ctx = canvas.getContext("2d");
// $.getJSON("data/goodSquareInfo.json", function(data) {
//     for(let i = 0; i < data.goodSquares.length; i++)
//     {
//         goodSquareArray.push(new Square(data.goodSquares[i].x,data.goodSquares[i].y, data.goodSquares[i].h, data.goodSquares[i].w, data.goodSquares[i].color));
//     }
//     drawGoodSquare();
//     //drawSquare();
// });


// }

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
   var test = hasCollided(square1,square2);
   var test2 = false;
   var test3 = hasCollidedGood(square1, square3);
   var test4 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
        //console.log(test2);
    }

    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
    for( var i = 0; i < goodSquareArray.length; i++){
        test4 = hasCollidedGood(square1, goodSquareArray[i]);
        if(test4 == true)
        {
           // goodSquareArray.remove(i);
            break;
        }
    }
    if(test3 || test4)
    {
        score++;
    //    goodSquareArray.remove(i);
        // collected();
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
   // goodSquareArray.remove(i);
    drawSquare(); 
    //drawGoodSquare();
    
}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
      for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }
    ctx.fillStyle = square3.mainColor;
    ctx.fillRect(square3.x, square3.y, square3.width, square3.height);
    for(var i = 0; i < goodSquareArray.length; i++)
    {
        ctx.fillStyle = goodSquareArray[i].mainColor;
        ctx.fillRect(goodSquareArray[i].x, goodSquareArray[i].y, goodSquareArray[i].width, goodSquareArray[i].height);
    }


    
    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);
    ctx.fillText("Score: " + score, 10, 100);    

}

// function drawGoodSquare(){

//     ctx.fillStyle = square3.goodMainColor;
//     ctx.fillRect(square3.x, square3.y, square3.width, square3.height);
//     for(let i = 0; i < goodSquareArray.length; i++)
//     {
//         ctx.fillStyle = goodSquareArray[i].goodMainColor;
//         ctx.fillRect(goodSquareArray[i].x, goodSquareArray[i].y, goodSquareArray[i].width, goodSquareArray[i].height);
//     }

// }



function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function hasCollidedGood(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
    
}

// function collected(){
//     if(hasCollidedGood){
        
//     }
// }