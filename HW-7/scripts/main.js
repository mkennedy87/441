var myArray = new Array();

class ViewFinder{
    constructor(title, image,  description, author, year){
        
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;

    }
    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
        return "Title: " + this.title + "<br>" + this.image + "<br>" + "Description: " +this.description + "<br>" + "Author: " + this.author +"<br>" + "Year: " + this.year  ;    
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
    var myViewFinder = new ViewFinder("Standards of Beauty",'<img src="images/img1.jpg">',"A critique on Japanese beauty standards","Rozeal","2011");
    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("Racism and Immigration",'<img src="images/img2.jpg">',"Poster that calls for a cease to deportation, by a Mexican artist","Rupert García","1973");
    var myViewFinder2 = new ViewFinder("Class and Citizenship",'<img src="images/img3.jpg">',"A pro-socialism self portrait","David Alfaro Siqueiros","1948");
    var myViewFinder3 = new ViewFinder("Healthcare Access",'<img src="images/img4.jpg">',"Shows Pregnant Women under a poster asking 'Do I desrve Healthcare'","Ben Shahn","1941");
    var myViewFinder4 = new ViewFinder("Housing and Homelessnes",'<img src="images/img5.jpg">',"Shows People laying against a wall with a poster advertising entertainment while one person works","Seymour Fogel","1936");
    // add the first object to the array
    myArray.push(myViewFinder);
    // add the second object to the array
    myArray.push(myViewFinder1);
    myArray.push(myViewFinder2);
    myArray.push(myViewFinder3);
    myArray.push(myViewFinder4);

}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myArray[randomNumber].toString();
    // document.getElementById("title").innerHTML = myArray[randomNumber].toString();
//    document.getElementById("description").innerHTML = myArray[randomNumber].toString();
//    document.getElementById("author").innerHTML = myArray[randomNumber].toString();
//    document.getElementById("year").innerHTML = myArray[randomNumber].toString();

}

