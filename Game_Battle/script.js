var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var ryuStats = document.getElementById('ryuStats');
var ryuHP = document.getElementById('ryuHP');
var akuHP = document.getElementById('akuHP');
var ryuMoves = document.getElementById('ryuMoves');
var speMoves = document.getElementById('speMoves');

var music_status = "on";
var musicControls = document.getElementById("music-controls");
var battleMusic = document.getElementById("myAudio");

var RyuHP = 100;
var AkumaHP = 100;

function beginBattle() {
    bottomRow.innerHTML = "Pick Ryu's ability by clicking the button above.";
    for (var x = 0; x < stats.length; x++) {
        stats[x].style.visibility = "visible";
    }
    battleMusic.play();
    battleMusic.volume = 0.2;
}

function akuAttack() {
    var attackchoice = Math.round(Math.random() * 3);
    if (attackchoice == 1) {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 7) {
            var dmg = Math.round(Math.random() * 10) + 10;
            RyuHP -= dmg;
            if (RyuHP < 0) {
                RyuHP = 0;
            }
            bottomRow.innerHTML += "<br>Akuma hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + RyuHP + " " + "hp.";
            var ryuHPBarWidth = (RyuHP / 100) * 300;
            ryuHP.style.width = ryuHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Akuma missed!";
        }
    } else if (attackchoice == 2) {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 7) {
            var dmg = Math.round(Math.random() * 15) + 15;
            RyuHP -= dmg;
            if (RyuHP < 0) {
                RyuHP = 0;
            }
            bottomRow.innerHTML += "<br>Akuma hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + RyuHP + " " + "hp.";
            var ryuHPBarWidth = (RyuHP / 100) * 300;
            ryuHP.style.width = ryuHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Akuma missed!";
        }
    } else {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 3) {
            var dmg = Math.round(Math.random() * 20) + 20;
            RyuHP -= dmg;
            if (RyuHP < 0) {
                RyuHP = 0;
            }
            bottomRow.innerHTML += "<br>Akuma hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + RyuHP + " " + "hp.";
            var ryuHPBarWidth = (RyuHP / 100) * 300;
            ryuHP.style.width = ryuHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Akuma missed!";
        }
    }
    if (RyuHP == 0) {
        bottomRow.innerHTML += "<br>Akuma has defeated you!!!<br><button onclick='restartGame()'>Play Again?</button>";
        ryuMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";

    }
}

function attack() {
    var hitChance = Math.round(Math.random() * 10);
    if (hitChance <= 7) {
        var dmg = Math.round(Math.random() * 10) + 10;
        AkumaHP -= dmg;
        if (AkumaHP < 0) {
            AkumaHP = 0;
        }

        bottomRow.innerHTML = "You hit Akuma with your Punch, doing" + " " + dmg + " " + "damage. Akuma now has" + " " + AkumaHP + " " + "hp.";
        var akuHPBarWidth = (AkumaHP / 100) * 300;
        akuHP.style.width = akuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (AkumaHP == 0) {
        bottomRow.innerHTML += "<br>You have successfully defeated Akuma!!!!!<br><button onclick='restartGame()'>Play Again?</button>";
        ryuMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";

    } else {
        akuAttack()
    }
}

function special() {
    var hitChance = Math.round(Math.random() * 20);
    if (hitChance <= 7) {
        var dmg = Math.round(Math.random() * 20) + 20;
        AkumaHP -= dmg;
        if (AkumaHP < 0) {
            AkumaHP = 0;
        }
        bottomRow.innerHTML = "You hit Akuma with your Blast, doing" + " " + dmg + " " + "damage. Akuma now has" + " " + AkumaHP + " " + "hp.";
        var akuHPBarWidth = (AkumaHP / 100) * 300;
        akuHP.style.width = akuHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (AkumaHP == 0) {
        bottomRow.innerHTML += "<br>You have successfully defeated Akuma!!!!!<br><button onclick='restartGame()'>Play Again?</button>";
        ryuMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";
    } else {
        akuAttack()
    }
}

function mute() {
    if (music_status == "off") {
        music_status = "on";
        musiccontrol.innerHTML = "<img src='unmute.png' onclick='mute();' class='music-icon'>"
        battlemusic.play();
        battlemusic.volume = 0.2;
    } else {
        music_status = "off";
        musiccontrol.innerHTML =
            "<img src='mute.png' onclick='mute();' class='music-icon'>"
        battlemusic.pause();
    }
}

function restartGame() {
    RyuHP = 100;
    AkumaHP = 100;
    var ryuHPBarWidth = (RyuHP / 100) * 300;
    ryuHP.style.width = ryuHPBarWidth + "px";
    var akuHPBarWidth = (AkumaHP / 100) * 300;
    akuHP.style.width = akuHPBarWidth + "px";
    ryuMoves.style.visibility = "visible";
    speMoves.style.visibility = "visible";
    beginBattle();
}