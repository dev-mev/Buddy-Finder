$(document).ready(function () {
  function writeQuestions() {
    const questions = [
      "1) A fun day at the park followed by a moonlit walk sounds like the perfect date.",
      "2) You don’t mind being the one to keep the conversation going.",
      "3) You prefer windows down when driving around.",
      "4) You’re a cuddler.",
      "5) You enjoy tossing the ball around on weekends.",
      "6) You like a partner with big brown eyes.",
      "7) You like making peanut butter cookies, but need someone to lick the spoon.",
      "8) You’ll teach me neat tricks.",
      "9) Fourth of July is your least favorite holiday.",
      "10) You’re brave during thunderstorms."
    ];

    for (const question of questions) {
      $("#questionsDiv").append(
        $("<div class='row'>").append(
          $("<div class='col-md-12'>").append(
            $("<p>").text(question),
            $("<select class='custom-select custom-select-sm col-md-2'>").append(
              $("<option selected>Select an option</option>"),
              $("<option value='1'>1 (Strongly disagree)</option>"),
              $("<option value='2'>2</option>"),
              $("<option value='3'>3</option>"),
              $("<option value='4'>4</option>"),
              $("<option value='5'>5 (Strongly agree)</option>")
            )
          )
        )
      );
    }
  }

  writeQuestions();

  $("#surveyForm").on("submit", function (event) {
    event.preventDefault();
    const newFriend = {
      name: $("#inputName").val().trim(),
      photo: $("#imageLink").val().trim(),
      scores: $(".custom-select").map(function () { return $(this).val(); }).get()
    };

    $.post("/api/friends", newFriend)
      .then(function (data) {
        $("#matchInfo").text(data.name);
        $("#matchImageSpan").empty().append($("<img>").attr("src", data.photo));
        $("#matchModal").modal("toggle");
      });
  });
});
