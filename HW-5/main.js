// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4","image5","image6", "image7", "image 8", "image9", "image10", "image11", "image12"];
// create a variable with the blank image name
var blankImagePath = "images/blank.jpg";
// create a empty array for the actual images
var actualImages = new Array();

function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source 
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}