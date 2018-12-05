function roomPage() {
  const number = "(0/2)";
  $("#canvas").empty();
  const ajaxGetData = "Chris";
  $("#canvas").append(
    $("<div>").append(
      $("<p>")
        .attr("id", "welcome")
        .text("Welcome " + ajaxGetData)
        .css("font-size", "70px")
        .css("text-align", "center"),
      $("<p>")
        .attr("id", "choose")
        .text("Which room would you like to play in?")
        .css("font-size", "30px")
        .css("text-align", "center")
        .css("margin-top", "30px"),
      $("<div>")
        .addClass("roomGroup")
        .append(
          $("<div>")
            .addClass("row")
            .append(
              $("<div>")
                .addClass("roomBorder col s4")
                .append(
                  $("<button>")
                    .addClass("btn btn-large waves-effect waves-teal btn-flat")
                    .text(`Room number 1` + `${number}`)
                ),
              $("<div>")
                .addClass("roomBorder col s4")
                .append(
                  $("<button>")
                    .addClass("btn btn-large waves-effect waves-teal btn-flat")
                    .text(`Room number 2` + `${number}`)
                )
            ),

          $("<div>")
            .addClass("row")
            .append(
              $("<div>")
                .addClass("roomBorder col s4")
                .append(
                  $("<button>")
                    .addClass("btn btn-large waves-effect waves-teal btn-flat")
                    .text(`Room number 3` + `${number}`)
                ),
              $("<div>")
                .addClass("roomBorder col s4")
                .append(
                  $("<button>")
                    .addClass("btn btn-large waves-effect waves-teal btn-flat")
                    .text(`Room number 4` + `${number}`)
                )
            )
        ),
      $("<button>")
        .attr("id", "selectButton2")
        .text("Select")
        .addClass("btn waves-effect waves-light")
    )
  );
}
