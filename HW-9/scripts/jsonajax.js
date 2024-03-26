 $(document).ready(function () {
            $("button").click(function () {
                $("#rickAndMortyInfo").load("data/rickAndMorty.json", fadeText, function(responseText){
                    var ram = JSON.parse(responseText);
                    $("#rickAndMortyInfo").html("id: " + ram.id 
                    + "<br>Name:" + ram.name + "<br>Air Date:" + ram.air_date + "<br>Episode:" 
                    + ram.episode + "<br>Characters:<br>" +
                    ram.characters[0] + "<br>" + ram.characters[1] + "<br>" + ram.characters[2] + "<br>" + ram.characters[3] + "<br>" + ram.characters[4]+ "<br>" + ram.characters[5]+ "<br>" + ram.characters[6]+ "<br>" + ram.characters[7]+ "<br>" + ram.characters[8]+ "<br>" + ram.characters[9]+ "<br>" + ram.characters[10]+ "<br>" + ram.characters[11]+ "<br>" + ram.characters[12]+ "<br>" + ram.characters[13]
                    + "<br>Created" + ram.created);
                });
            });
        });
// $(document).ready(function(){
//     $("button").click(function(){
//       $.getJSON("data/rickAndMorty.json", function(result){
//         $.each(result, function(i, field){
//           $("rickAndMortyInfo").append(field + " ");
//         });
//       });
//     });
//   });

       function fadeText()
        {
            $("#rickAndMortyInfo").hide().fadeIn("slow");
        }
        