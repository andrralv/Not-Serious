// lyric generator for isaac brock

var beginning = [
    "WELL!, ",
    "The universe is shaped exactly like, ",
    "Here we go!, ",
    "The engine's rusted, ",
    "I gotta go back to sleep before, ",
    "In this place that we call home, ",
    "What a bad thought, ",
    "I tried to get my head clear, ",
    "I'm on my way, ",
    "Are you dead or are you sleeping?, ", 
    "Are you dead?",
    "Well I hope that you like it here, "
];

var middle = [
    "the years go fast and the days go so slow",
    "and I called god", 
    "and this isn't heaven this isn't hell", 
    "and I'm going nowhere", 
    "I guess we were just lucky",
    "I can't hear you over the sound of you",
    "and I just don't know", 
    "Well...", 
    "I don't feel and that feels great",
    "I do lines", 
    "but you gotta live in the city",
    "no one's taking showers anymore"
];

var end = [
    " how can someone inconsistent mess up so consistently?",
    " Oh Well...", 
    " and that's how jesus found me.", 
    " well happy fucking congratulations.",
    " who would want to be such an asshole?",
    " well I just don't understand.", 
    " the days get shorter and the nights get cold.",
    " sometimes I'm so full of shit that it should be a crime.",
    " broken hearts want broken necks.", 
    " opinions are like kittens I just give 'em away.",
    " this car's not working.",
    " this boat's sinking and I ain't got shit to do with that."
];

function getLines(arr1, arr2, arr3) {
    var elem = document.getElementById("first_line");
    elem.innerHTML = '...';
    var msg = '';
    var num1 = Math.floor((Math.random() * 11) + 1);
    var num2 = Math.floor((Math.random() * 11) + 1);
    var num3 = Math.floor((Math.random() * 11) + 1);
    msg += arr1[num1] + '\n' + arr2[num2] + '\n' + arr3[num3];
    message(msg);
}

function message(arg) {
    var elem = document.getElementById("first_line");
    var elemContent = elem.firstChild.nodeValue;
    elemContent = elemContent.replace('...', arg);
    elem.firstChild.nodeValue = elemContent;
}

var ready = document.getElementById("button");
ready.addEventListener('click', function() 
{
    getLines(beginning, middle, end);
}, false);

var resetter = document.getElementById("resetter");
resetter.addEventListener('click', location.reload(), false);
