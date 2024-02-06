function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Disney") {
        document.getElementById("story").innerHTML = "Are you compelled by the lamp or Pride Rock?";
        document.getElementById("choice1").innerHTML = "Lamp";
        document.getElementById("choice2").innerHTML = "Pride Rock";
    } else if (choice == 2 && answer2 == "DreamWorks") {
        document.getElementById("story").innerHTML = "What's more appealing, a swamp or a castle?";
        document.getElementById("choice1").innerHTML = "Swamp";
        document.getElementById("choice2").innerHTML = "Castle";
    } else if (choice == 1 && answer1 == "Lamp") {
        document.getElementById("story").innerHTML = "You picked the Genie!";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Pride Rock") {
        document.getElementById("story").innerHTML = "You Picked Pumba!";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
   /* } else if (choice == 1 && answer1 == "Go ahead and be brave") {
        document.getElementById("story").innerHTML = "Pugster decides to go in even with hesitation to make new friends.  Will it work?'";
        document.getElementById("choice1").innerHTML = "Yes it will work";
        document.getElementById("choice2").innerHTML = "No it will not work";
    } else if (choice == 2 && answer2 == "Scan the situation") {
        document.getElementById("story").innerHTML = "Pugster decides to just look around for the moment. What should Pugster do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
        */
    }
    // need to do these
    else if (choice == 1 && answer1 == "Swamp") {
        document.getElementById("story").innerHTML = "You picked Shrek!!!";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Castle") {
        document.getElementById("story").innerHTML = "You Picked Fiona!";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
   // } else if (choice == 1 && answer1 == "Go for a swim") {
      //  document.getElementById("story").innerHTML = "Pugster decides that swimming sounds most fun" + "<br>Restart?";
      //  document.getElementById("choice1").innerHTML = "Yes restart";
      //  document.getElementById("choice2").innerHTML = "No quit";
  //  } else if (choice == 2 && answer2 == "Get a drink") {
   //     document.getElementById("story").innerHTML = "Pugster decides it's time to drink" + "<br>Restart?";
   //     document.getElementById("choice1").innerHTML = "Yes restart";
   //    document.getElementById("choice2").innerHTML = "No quit";
  //  } else if (choice == 1 && answer1 == "Yes it will work") {
  //      document.getElementById("story").innerHTML = "Pugster thinks, yeah this will work out." + "<br>Restart?";
  //      document.getElementById("choice1").innerHTML = "Yes restart";
   //     document.getElementById("choice2").innerHTML = "No quit";
   // } else if (choice == 2 && answer2 == "No it will not work") {
    //    document.getElementById("story").innerHTML = "Pugster thinks, I don't think this will work out." + "<br>Restart?";
    //    document.getElementById("choice1").innerHTML = "Yes restart";
    //    document.getElementById("choice2").innerHTML = "No quit";
   // } else if (choice == 1 && answer1 == "Watch from afar") {
    //    document.getElementById("story").innerHTML = "Pugster decides it's time to just watch from a distance for safety." + "<br>Restart?";
    //    document.getElementById("choice1").innerHTML = "Yes restart";
    //    document.getElementById("choice2").innerHTML = "No quit";
   // } else if (choice == 1 && answer1 == "Lamp") {
       // document.getElementById("story").innerHTML = "You picked the Genie!";
       // document.getElementById("choice1").innerHTML = "Yes restart";
       // document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "It's time to pick out a cartoon character, which studio do you prefer?";
        document.getElementById("choice1").innerHTML = "Disney";
        document.getElementById("choice2").innerHTML = "DreamWorks";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Skrek is life!";

    }


}