$(document).ready(function () {

    $("#submitbutton").on("submit", function (event) {
        event.preventDefault();

        var eventData = {
            coverage_provider: $("#coverage_provider").val().trim(),
            event_sponsor: $("#event_sponsor").val().trim(),
            event_name: $("#event_name").val().trim(),
            event_date: $("#event_date").val().trim(),
            format: $("#format").val().trim()
        };

        console.log(postEvent)
        $.ajax({
            method: "POST",
            url: "/events/create"
        }).then(function (data) {
            // reload submission page
            location.reload();
        })

    })
});
