 $(document).ready(function () {
            $("button").click(function () {
                $("#rickAndMortyInfo").load("data/rickAndMorty.json", fadeText, function(responseText){
                    var ram = JSON.parse(responseText);
                    $("#rickAndMortyInfo").html();
                });
            });
        });

       function fadeText()
        {
            $("#rickAndMortyInfo").hide().fadeIn("slow");
        }
        