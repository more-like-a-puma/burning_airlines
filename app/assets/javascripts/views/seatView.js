// user reservation collection
var app = app || {};


//when things load - check if a seat is free.  Seat will be free if it doesn't appear in the reservation table.  SEARCH RESERVATION TABLE.  Continually poll the reservation table

//show the seats on the page in an grid layout GENERATE SEAT PLAN FUNCTION DONE

// distinguishing between seats which are free and seats which are not free
// select seat - DONE
//book seat - need to save the seat selected back to the database  NOT DONE
//


app.reservationView = Backbone.View.extend({
    // events: {
    //   'click button' : createReservation,
    //   //
    //       $seatDiv.addClass("reserved");
    //       },
    //
    // //check to see if the reservation table has seats booked.  Will be booked if appears in the table and not booked if doesn't appear
    //   checkForSeats: function (  ) {
    //
    //
    //     }
    //   },


    generateSeatPlan: function(row, columns) {

        var SEAT_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 1; i <= rows; i++) {
            var rowNumber = i;
            var $rowDiv = $("<div>").addClass("row");
            $rowDiv.text("Row: " + rowNumber);
            $rowDiv.data({
                rowNumber: rowNumber
            });

            for (var j = 1; j <= columns; j++) {
                var columnNumber = j;
                var columnLetter = SEAT_LETTERS[j - 1];
                var seatID = rowNumber + columnLetter;
                var $columnDiv = $("<div>").addClass("column");
                $columnDiv.text("Column: " + columnNumber + "(" + columnLetter + ")");
                $columnDiv.data({
                    columnNumber: columnNumber
                });
                var $seatDiv = $("<div>").addClass("seat");
                $seatDiv.text(rowNumber + "" + columnLetter);
                $seatDiv.data({
                    columnNumber: columnNumber,
                    rowNumber: rowNumber
                });
                $seatDiv.attr("id", seatID);
            }
        }


        //
        //     createReservation: function () {
        //
        // });


        reservation.save();
        app.reservation.add(secret);
        this.$el.find("textarea").val('').focus();



        el: "#seatViewResults",

            render: function() {
                var reservationInputViewTemplate = $("#reservationInputViewTemplate").html();
                this.$el.html(secretInputViewTemplate);
            }
    }
});
