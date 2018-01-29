$(function() {
    $("#searchButton").on("submit", function (event) {
        event.preventDefault();
        console.log("#searchButton was clicked!");
        var newSearch = {
            //query: fieldIDs
        };

        $.ajax("", {
            type: "GET",
            data: newSearch
        }).then(
            function() {
                console.log("search successful");
                //$("#responseDiv").html //?
            }
        ); //.then end
    });  // #searchButton.onClick end

    $("#subButton").on("submit", function (event) {
        event.preventDefault();
        console.log("#subButton was clicked!");

    //Collect form information into two variables, one for each table involved.
        var eventData = {
            event_name: $("#eventName").val().trim(),
            event_date: $("#eventDate").val().trim(),
            format: $(".dropdown-menu").val(),
        }; //var eventData end

        var roundData = [
            round1 {
                round_number: "1",
                coverage_link: $("#coverage_linkR1").val().trim(),
                player1_name: $("#player1R1").val().trim(),
                player2_name: $("#player2R1").val().trim(),
                player1_deck: $("#player1deckR1").val().trim(),
                player2_deck: $("#player2deckR1").val().trim()
            },
            round2 {
                round_number: "2",
                coverage_link: $("#coverage_linkR2").val().trim(),
                player1_name: $("#player1R2").val().trim(),
                player2_name: $("#player2R2").val().trim(),
                player1_deck: $("#player1deckR2").val().trim(),
                player2_deck: $("#player2deckR2").val().trim()
            },
            round3 {
                round_number: "3",
                coverage_link: $("#coverage_linkR3").val().trim(),
                player1_name: $("#player1R3").val().trim(),
                player2_name: $("#player2R3").val().trim(),
                player1_deck: $("#player1deckR3").val().trim(),
                player2_deck: $("#player2deckR3").val().trim()
                
            },
            round4 {
                round_number: "4",
                coverage_link: $("#coverage_linkR4").val().trim(),
                player1_name: $("#player1R4").val().trim(),
                player2_name: $("#player2R4").val().trim(),
                player1_deck: $("#player1deckR4").val().trim(),
                player2_deck: $("#player2deckR4").val().trim()
            },
            round5 {
                round_number: "5",
                coverage_link: $("#coverage_linkR5").val().trim(),
                player1_name: $("#player1R5").val().trim(),
                player2_name: $("#player2R5").val().trim(),
                player1_deck: $("#player1deckR5").val().trim(),
                player2_deck: $("#player2deckR5").val().trim()
            },
            round6 {
                round_number: "6",
                coverage_link: $("#coverage_linkR6").val().trim(),
                player1_name: $("#player1R6").val().trim(),
                player2_name: $("#player2R6").val().trim(),
                player1_deck: $("#player1deckR6").val().trim(),
                player2_deck: $("#player2deckR6").val().trim()
            },
            round7 {
                round_number: "7",
                coverage_link: $("#coverage_linkR7").val().trim(),
                player1_name: $("#player1R7").val().trim(),
                player2_name: $("#player2R7").val().trim(),
                player1_deck: $("#player1deckR7").val().trim(),
                player2_deck: $("#player2deckR7").val().trim()
            },
            round8 {
                round_number: "8",
                coverage_link: $("#coverage_linkR8").val().trim(),
                player1_name: $("#player1R8").val().trim(),
                player2_name: $("#player2R8").val().trim(),
                player1_deck: $("#player1deckR8").val().trim(),
                player2_deck: $("#player2deckR8").val().trim()
            },
            round9 {
                round_number: "9",
                coverage_link: $("#coverage_linkR9").val().trim(),
                player1_name: $("#player1R9").val().trim(),
                player2_name: $("#player2R9").val().trim(),
                player1_deck: $("#player1deckR9").val().trim(),
                player2_deck: $("#player2deckR9").val().trim()
            },
            round10 {
                round_number: "10",
                coverage_link: $("#coverage_linkR10").val().trim(),
                player1_name: $("#player1R10").val().trim(),
                player2_name: $("#player2R10").val().trim(),
                player1_deck: $("#player1deckR10").val().trim(),
                player2_deck: $("#player2deckR10").val().trim()
            },
            round11 {
                round_number: "11",
                coverage_link: $("#coverage_linkR11").val().trim(),
                player1_name: $("#player1R11").val().trim(),
                player2_name: $("#player2R11").val().trim(),
                player1_deck: $("#player1deckR11").val().trim(),
                player2_deck: $("#player2deckR11").val().trim()
            },
            round12 {
                round_number: "12",
                coverage_link: $("#coverage_linkR12").val().trim(),
                player1_name: $("#player1R12").val().trim(),
                player2_name: $("#player2R12").val().trim(),
                player1_deck: $("#player1deckR12").val().trim(),
                player2_deck: $("#player2deckR12").val().trim()
            },
            round13 {
                round_number: "13",
                coverage_link: $("#coverage_linkR13").val().trim(),
                player1_name: $("#player1R13").val().trim(),
                player2_name: $("#player2R13").val().trim(),
                player1_deck: $("#player1deckR13").val().trim(),
                player2_deck: $("#player2deckR13").val().trim()
            },
            round14 {
                round_number: "14",
                coverage_link: $("#coverage_linkR14").val().trim(),
                player1_name: $("#player1R14").val().trim(),
                player2_name: $("#player2R14").val().trim(),
                player1_deck: $("#player1deckR14").val().trim(),
                player2_deck: $("#player2deckR14").val().trim()
            },
            round15 {
                round_number: "15",
                coverage_link: $("#coverage_linkR15").val().trim(),
                player1_name: $("#player1R15").val().trim(),
                player2_name: $("#player2R15").val().trim(),
                player1_deck: $("#player1deckR15").val().trim(),
                player2_deck: $("#player2deckR15").val().trim()
            },
            round16 {
                round_number: "16",
                coverage_link: $("#coverage_linkR16").val().trim(),
                player1_name: $("#player1R16").val().trim(),
                player2_name: $("#player2R16").val().trim(),
                player1_deck: $("#player1deckR16").val().trim(),
                player2_deck: $("#player2deckR16").val().trim()
            },
            round17 {
                round_number: "17",
                coverage_link: $("#coverage_linkR17").val().trim(),
                player1_name: $("#player1R17").val().trim(),
                player2_name: $("#player2R17").val().trim(),
                player1_deck: $("#player1deckR17").val().trim(),
                player2_deck: $("#player2deckR17").val().trim()
            },
            round18 {
                round_number: "18",
                coverage_link: $("#coverage_linkR18").val().trim(),
                player1_name: $("#player1R18").val().trim(),
                player2_name: $("#player2R18").val().trim(),
                player1_deck: $("#player1deckR18").val().trim(),
                player2_deck: $("#player2deckR18").val().trim()
            },
            round19 {
                round_number: "19",
                coverage_link: $("#coverage_linkR19").val().trim(),
                player1_name: $("#player1R19").val().trim(),
                player2_name: $("#player2R19").val().trim(),
                player1_deck: $("#player1deckR19").val().trim(),
                player2_deck: $("#player2deckR19").val().trim()
            },
            round20 {
                round_number: "20",
                coverage_link: $("#coverage_linkR20").val().trim(),
                player1_name: $("#player1R20").val().trim(),
                player2_name: $("#player2R20").val().trim(),
                player1_deck: $("#player1deckR20").val().trim(),
                player2_deck: $("#player2deckR20").val().trim()
            }         
        ]; //roundData end
    // POST functionality
        $.ajax("/events/create", {
            type:"POST",
            data: eventData
        }).then(
          $.ajax("/rounds/create", {
              type:"POST",
              data: roundData
          }).then(function test() {
            console.log("both posts made!")
            }) //second.then end
        ); //first.then end
    });  //#subButton.onSubmit end

}); //end function