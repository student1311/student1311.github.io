document.getElementById('popup').onclick = function() {
    document.getElementById("popup").disabled = true;
    document.getElementById('p1').style.display = "block";
    if (this == true) {
        this.onclick = null;
    }
    obr();
}

var min = 1;
var sec = 60;



function obr(argument) {
    sec--;
    timer = setTimeout(obr, 1000);
    if (min == 0 && sec == 0) {
        clearInterval(timer);
        document.getElementById('p2').style.display = "block";
        document.getElementById('time').innerHTML = formatTime(min) + ":" + formatTime(sec);
        return;
    }
    if (sec == 0) {
        min = min - 1;
        sec = 10;
    }
    document.getElementById('time').innerHTML = formatTime(min) + ":" + formatTime(sec);
}

function formatTime(timePart) {
    if (timePart < 10) {
        return '0' + timePart.toString();
    }
    return timePart.toString();
}

document.getElementById('stop').onclick = function() {
    clearInterval(timer);
    document.getElementById('p2').style.display = "block";
}

document.getElementById('cross-1').onclick = function() {
    document.getElementById("popup").disabled = false;
    document.getElementById('p1').style.display = "none";
    document.getElementById('p2').style.display = "none";
    min = 1;
    sec = 60;
}