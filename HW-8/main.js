var picSelector = "#pic";
var allPics = new Array();
class PicInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var pic = new PicInfo("#pic", "images/dbz.jpg");
    allPics.push(pic);

}
$(document).ready(function(){
    initializeArray();
    console.log(allPics.length);
    console.log(allPics[0].toString());
    console.log(allPics[0].theSelector);
    console.log(allPics[0].theImagePath);
    
    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allPics[0].theSelector).attr("src", allPics[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
        
        $(allPics[0].theSelector).fadeOut().fadeIn();
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}

