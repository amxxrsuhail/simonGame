// declarations
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;



$(document).keydown(function () {
    if (!started) {
        $("h1").text(`Level ${level}`);
        nextSequence();
        started = true;
    }


    $(".btn").click(function () {
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);
    });
});
// functions
function checkAnswer(index) {

    if (userClickedPattern[index] === gamePattern[index]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    }
    else {
        $("h1").text("GAME OVER!!!! Press any key to continue");
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(removeFunction, 200)
        function removeFunction() {
            $("body").removeClass("game-over");
        }

        $(document).keyup(function(){
              window.location.reload();
          })
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("h1").text(`Level ${level}`);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(80).fadeIn(80);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    var pressedButton = $(`.${currentColour}`);
    pressedButton.addClass("pressed");

    setTimeout(removeFunction, 100)
    function removeFunction() {
        pressedButton.removeClass("pressed");
    }
}







