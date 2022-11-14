// declarations
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;
var userIndex=user



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
        checkAnswer();
    });
});

// functions
function nextSequence() {
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(80).fadeIn(80);
    playSound(randomChosenColour);

    $(document).click(function () {
        $("h1").text(`Level ${level}`);
        level++;
    });

}

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    var pressedButton = $(`.${currentColour}`)
    pressedButton.addClass("pressed");

    setTimeout(removeFunction, 100)
    function removeFunction() {
        pressedButton.removeClass("pressed");
    }
}

function checkAnswer() {

    if (userClickedPattern === gamePattern) {
        userClickedPattern = [];
        nextSequence();
    }
    else {
        $(document).click(function () {
            $("h1").text(`GAME OVER!!!!`);
        });
    }
}





