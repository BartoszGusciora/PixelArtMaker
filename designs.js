// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {

var canvas, cell, gridHeight, gridWidth, rows;

	canvas = $('#pixel_canvas');
	gridHeight =$('#input_height').val().max="50";
	gridWidth = $('#input_width').val().max="50";

	canvas.children().remove()

	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}

	rows = $('tr');

	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	}

	cell = canvas.find('td');



canvas.on("click", "td", function() {
  var color = $("#colorPicker").val();
  $(this).attr("bgcolor", color);
});

}

var submit = $("input[type=submit]")
      submit.click(function(event) {
          event.preventDefault();

          console.log("Dziala przerywanie");
          $("body").css("background-color","#ffffff");
          $("h1").css("color", "red");
          console.log("Dziala przycisk");
          makeGrid();
});
