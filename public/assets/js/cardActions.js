$(function() {
    $("#cardButton").on("submit", function(event) {
        event.preventDefault();
        console.log("#cardButton was clicked!");
        //collect form info into a variable
        var cardQuery = {
            card: $("#cardSearch").val().trim()
        }

        $.ajax("/cards/params", {
            type: "GET",
            data: cardQuery
        }).then(
            function() {
                console.log("search successful");
            }
        ); //.then end

    }); // end cardButton onSubmit
}); //end function