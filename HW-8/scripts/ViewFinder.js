var myArray = new Array();

class ViewFinder{
    constructor(selector, image){
        
        this.selector = selector;
        this.image = image;

    }


//    imageDisplay(){
//     let imageArray = [images/img1.jpg, images/img2.jpg, images/img3.jpg, images/img4.jpg, images/img5.jpg]
//     let firstImage = imageArray[0];
//    }

    
   //image = [images/img1.jpg, images/img2.jpg, images/img3.jpg, images/img4.jpg, images/img5.jpg];
}



// this function is called in the body of the HTML page so that the objects are created and added to the 
// array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    var myViewFinder = new ViewFinder("#pic",'<img src="images/dbz.jpg">');
    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("#pic",'<img src="images/img2.jpg">');
    var myViewFinder2 = new ViewFinder("#pic",'<img src="images/img3.jpg">');
    // add the first object to the array
    myArray.push(myViewFinder);
    // add the second object to the array
    myArray.push(myViewFinder1);
    myArray.push(myViewFinder2);
}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
   document.getElementById("img").innerHTML = myArray[randomNumber].toString();
  

}

