function textBigger() {
    document.getElementById("textbox").style.fontSize = "24pt";
}

function addFancy() {
    document.getElementById("textbox").style.fontWeight = "bold";
    document.getElementById("textbox").style.color = "blue";
    document.getElementById("textbox").style.textDecoration = "underline";
}

function addBoring() {
    document.getElementById("textbox").style.fontWeight = "normal";
    document.getElementById("textbox").style.color = "black";
    document.getElementById("textbox").style.textDecoration = "none";
}

function changeText() { 
    document.getElementById("textbox").style.textTransform = "uppercase";
    var str = document.getElementById("textbox").value;
    var sentence = str.split(".");
    str = sentence.join("-Moo.");
    document.getElementById("textbox").value = str;
}
