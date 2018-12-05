function renderPage() {
  $("#canvas").append(
    $("<button>")
      .addClass("char")
      .text("char"),
    $("<button>")
      .addClass("room")
      .text("room")
  );
}

$(document).on("click", ".char", characterPage);
$(document).on("click", ".room", roomPage);

renderPage();
