


// var NUMBER_OF_ROWS = 4;
// var NUMBER_OF_COLUMNS = 2;
//
// var generateSeatPlan = function (rows, columns) {
//   var SEAT_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//
//   for (var i = 1; i <= rows; i++) {
//     var rowNumber = i;
//     // console.log( "ROWS: " + i );
//
//     var $rowDiv = $("<div>").addClass("row");
//     $rowDiv.text( "Row: " + rowNumber );
//     $rowDiv.data({ rowNumber: rowNumber });
//     // $("body").append( $rowDiv );
//
//     for (var j = 1; j <= columns; j++) {
//
//       var columnNumber = j;
//       var columnLetter = SEAT_LETTERS[j - 1];
//       // console.log( "COLUMNS: " + j );
//       // console.log( rowNumber + "" + columnNumber );
//       var seatID = rowNumber + columnLetter;
//       console.log( seatID );
//
//       var $columnDiv = $("<div>").addClass("column");
//       $columnDiv.text( "Column: " + columnNumber + "(" + columnLetter + ")" );
//       $columnDiv.data({ columnNumber: columnNumber });
//
//
//        //  You need to create a div with the class of seat
//       var $seatDiv = $("<div>").addClass("seat");
//       $seatDiv.text( rowNumber + "" + columnLetter);
//       $seatDiv.data({columnNumber: columnNumber, rowNumber:rowNumber});
//       $seatDiv.attr("id", seatID);
//
//       var randomNumber = Math.random();
//       if ( randomNumber < 0.3 ) {
//         $seatDiv.addClass("reserved");
//       }
//
//       $seatDiv.appendTo("body");
//       // Set the text to be the row number and the seat letter
//       // Add data attributes - data row and data column should be set
//       // Add an ID - attr("id", "someId")
//       // Put that on the page
//
//       // $("body").append( $columnDiv );
//     }
//     $("body").append("<br />");
//   }
// };
//
// generateSeatPlan( 2, 6 );
//
// $("body").on("click", ".seat", function () {
//   if ( $(this).hasClass("reserved") ) {
//     // If someone else has booked a seat...
//     return alert("Someone has already booked that");
//   }
//   if ( $(this).hasClass("booking") ) {
//     // If you have booked a seat...
//     return alert("You just booked it, idiot");
//   }
//
//   var seatID = $(this).attr("id");
//   $(".fullID span").text(seatID);
//
//   var seatRow = $(this).data("rowNumber");
//   $(".row span").text( seatRow );
//
//   var seatColumn = $(this).data("columnNumber");
//   $(".column span").text( seatColumn );
//
//   if (confirm("Are you sure you want to reserve this seat?")) {
//     // The person really wants to make a reservation...
//     alert("You have reserved this seat");
//     $(this).addClass("booking");
//   }
// });
