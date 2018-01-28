$(function() {
    $("#searchButton").on("submit", function (event) {
        event.preventDefault();
        console.log("#searchButton was clicked!");
    });  // #searchButton.onClick end

    $("#subButton").on("submit", function (event) {
        event.preventDefault();
        console.log("#subButton was clicked!");

        var newEvent = {
            event_name: $("#eventName").val().trim(),
            event_date: $("#eventDate").val().trim(),
            format: $(".dropdown-menu").val(),
        }; //var newEvent end

        var roundData = {
            coverage_link: 
        }; //roundData end
    });  //#subButton.onClick end

}); //end function