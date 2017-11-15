var source = document.getElementById('ab1');
var karmina = document.getElementById('ab2');
var voltage = document.getElementById('ab3');
var title = document.getElementById('title');
var right = document.getElementById('right');
var font = document.getElementById('font');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');
var dark = document.getElementById('dark');
var white = document.getElementById('white');
var rectangle = document.getElementsByClassName('rectangle');
var wrap = document.getElementsByClassName('wrap');
var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');

source.onclick = function() {
    title.style.fontFamily = "source-sans-pro";
    title.style.fontWeight = "normal";

    font.innerHTML = "Source SansNormal";

}

karmina.onclick = function() {
    title.style.fontFamily = "karmina";
    title.style.fontWeight = "bold";

    font.innerHTML = "Karmina Bold";

}

voltage.onclick = function() {
    title.style.fontFamily = "voltage";
    title.style.fontWeight = "normal";

    font.innerHTML = "Voltage Normal";

}

blue.onclick = function() {

    right.style.background = "#4990e2";

}

green.onclick = function() {

    right.style.background = "#1fcc6d";

}

yellow.onclick = function() {

    right.style.background = "#f1c40f";

}

dark.onclick = function() {

    right.style.background = "#34495e";

}

white.onclick = function() {

    right.style.background = "#ecf0f1";

}


function makeActiveBorder(className, object) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.borderStyle = 'initial';
    }
    object.style.borderStyle = 'solid';
}


document.getElementById("rec1").onclick = function() {

    makeActiveBorder('rectangle', this);
    f3.style.color = "#a6a6a6";
    f3.style.display = "block";

}

document.getElementById("rec2").onclick = function() {

    makeActiveBorder('rectangle', this);
    f3.style.color = "#a6a6a6";
    f3.style.display = "block";
}

document.getElementById("rec3").onclick = function() {

    makeActiveBorder('rectangle', this);
    f1.style.color = "#000";
    f2.style.color = "#a6a6a6";
    f3.style.display = "none";
    title.style.fontStyle = "normal";

}

makeActiveBorder('rectangle', document.getElementById("rec1"));




function makeActiveColor(className, object) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = 'transparent';
    }
    object.style.color = 'white';
}


document.getElementById("fa1").onclick = function() {
    makeActiveColor('fa', this);
}

document.getElementById("fa2").onclick = function() {
    makeActiveColor('fa', this);
}

document.getElementById("fa3").onclick = function() {
    makeActiveColor('fa', this);
}
document.getElementById("fa4").onclick = function() {
    makeActiveColor('fa', this);
}
document.getElementById("fa5").onclick = function() {
    makeActiveColor('fa', this);
}

makeActiveColor('fa', document.getElementById("fa1"));




document.getElementById("f1").onclick = function() {
    f1.style.color = "#000";
    f2.style.color = "#a6a6a6";
    f3.style.color = "#a6a6a6";
    title.style.fontWeight = "normal";
    title.style.fontStyle = "normal";
}

document.getElementById("f2").onclick = function() {
    f1.style.color = "#a6a6a6";
    f2.style.color = "#000";
    f3.style.color = "#a6a6a6";
    title.style.fontWeight = "bold";
    title.style.fontStyle = "normal";
}

document.getElementById("f3").onclick = function() {
    f1.style.color = "#a6a6a6";
    f2.style.color = "#a6a6a6";
    f3.style.color = "#000";
    title.style.fontStyle = "italic";
}


f1.style.color = "#000";