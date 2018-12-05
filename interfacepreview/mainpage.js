function mainPage() {
  $("#canvas").empty();
  $("#canvas").append(
    $("<div>").append(
      $("<h1>").append(
        $("<span>")
          .text(`Blue `)
          .addClass("mainTitle blue-text")
          .css("float", "left"),
        $("<span>")
          .text(`  Vs  `)
          .addClass("mainTitle white-text")
          .css("float", "left"),
        $("<span>")
          .text(` Red`)
          .addClass("mainTitle red-text")
          .css("float", "left")
      ),
      $("<br/>"),
      $("<p>")
        .addClass("enter")
        .text("Press Enter to Start")
        .addClass("center-align startText")
        .append(
          $("<i>")
            .addClass("material-icons iconGo")
            .text("exit_to_app")
        )
    )
  );
}
$(document).keypress(function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    characterPage();
  }
});
mainPage();
