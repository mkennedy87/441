var a = 0;
var b = 0;
var c =0;
//let img1 = ;
//let img2 = ;


function disney()
{
    a++;
    window.alert("Memories");
}

function dreamWorks()
{
   //a--
    window.alert("Memes");
    a--;
}

function lamp()
{
    b++;
    window.alert("You ain't never had a friend like me!");
}

function prideRock()
{
    b--;
    window.alert("Hakunamatata!");
}

function swamp()
{
    c++;
    window.alert("hubbahubba!");
}

function castle()
{
    c--;
    window.alert("You lose!");
}

if ( a >= 1, b = 0, c = 0 )
{
    document.getElementById("img1").innerHTML = <img src="./img/Disney/lamp.jpg" width="200">;
    document.getElementByID("top").innerHTML = "Lamp";
}
else if ( a <= -1, b = 0, c = 0 ) 
{
    document.getElementById("img1").innerHTML = <img src="./img/DreamWorks/castle.jpg" width="200">;
    document.getElementByID("top").innerHTML = "Castle";
}

/*
else if ( a >= 1, b >= 1, c = 0 ) 
{
    document.getElementById("img1").innerHTML = <img src="./img/DreamWorks/dragon.jpg" width="200">;
    document.getElementByID("top").innerHTML = "dragon";
}
*/
