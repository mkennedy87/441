var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "images/blank.png";
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

function createRandomImageArray()
{
    // create an array of actual images
    var actualImagePath = ["images/dog.jpg", "images/tiger.jpeg"];
    // create another array to make sure the images only get added twice
    var count = [0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 12)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 6)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    } 
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed
          
}
