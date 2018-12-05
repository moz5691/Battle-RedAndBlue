function characterPage() {
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
        .text("Please choose your charater")
        .css("font-size", "30px")
        .css("text-align", "center")
        .css("margin-top", "30px"),

      $("<div>")
        .addClass("charGroup")
        .append(
          $("<div>")
            .addClass("row s3")
            .append(
              $("<img src = 'assets/ship_1.png'>").addClass("charImage col s1"),
              $("<img src = 'assets/ship_2.png'>").addClass("charImage col s1"),
              $("<img src = 'assets/ship_3.png'>").addClass("charImage col s1")
            ),
          $("<div>")
            .addClass("row s3")
            .append(
              $("<img src = 'assets/ship_4.png'>").addClass("charImage col s1"),
              $("<img src = 'assets/ship_5.png'>").addClass("charImage col s1"),
              $("<img src = 'assets/ship_6.png'>").addClass("charImage col s1")
            )
        ),
      $("<button>")
        .attr("id", "selectButton")
        .text("Select")
        .addClass("btn waves-effect waves-light")
    )
  );
}

$(document).on("click", "#selectButton", function() {
  roomPage();
});

// room
// registeration
// character
// main screen
