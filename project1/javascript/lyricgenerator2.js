// lyric generator for isaac brock

// get first element by class
x = document.getElementsByClassName('isaac')[0];
y = document.getElementsByClassName('bradford')[0];
z = document.getElementsByClassName('malkmus')[0];

// properties for Isaac
isaacBeginning = [
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

isaacMiddle = [
    "the years go fast and the days go so slow,",
    "and I called god", 
    "and this isn't heaven this isn't hell,", 
    "and I'm going nowhere", 
    "I guess we were just lucky",
    "I can't hear you over the sound of you,",
    "and I just don't know", 
    "Well...", 
    "I don't feel and that feels great,",
    "I do lines", 
    "but you gotta live in the city,",
    "no one's taking showers anymore,"
];

isaacEnd = [
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

// properties for Brad
bradBeginning = [
    "I was sixteen",
    "I was sick, I was dead, ",
    "I'm not mad about anything, ",
    "This is where love has left me, ",
    "Please leave me alone, ",
    "I'm just a poorboy from a poor family",
    "A couple of girls I knew from way back, ",
    "What direction should we choose? ",
    "Drive alone, drive straight home, ",
    "No one ever talked to me, ", 
    "I'm saved, oh I'm saved!",
    "Come on little boy, "
];

bradMiddle = [
    "I felt his presence near me",
    "I'm my dreams oh little dreams,", 
    "take my hand and pray with me,", 
    "we might have made a mistake", 
    "I was sixteen in a hospital bed",
    "please don't take off your clothes, ",
    "I had to make a choice,", 
    "nothing ever happened to me,", 
    "I'll give what I have left,",
    "for a year I was queer,", 
    "in the bluffs they know my name,",
    "I grew tired of Little Five Points,",
];

bradEnd = [
    " near the peachtree I saw your empty face.",
    " not alone anymore, but I found it such a bore.", 
    " for a drunk I was young, for a month I was punk.", 
    " Inman park dwellers know where to find me.",
    " why do you live this way?",
    " my angel is broken.", 
    " when I found fame it was already too late.",
    " your pain is probably equal.",
    " I lived in Hazel street.", 
    " when one life is over a new one begins.",
    " I saw your face melt like the ocean.",
    " I walked around like a walker."
];

// properties for Malkmus
malkmusBeginning = [
    "Blind date with a chancer, ",
    "I'd like to check out your public protests, ",
    "Come one darling, ",
    "We need secrets se-crets se-se-se-secrets, ",
    "Oh you ignorant soul, believe in what you want to do, ",
    "Don't take your pawnshop home, ",
    "This is the city, ",
    "You kiss like a rock but you know, ",
    "Let's talk about leaving, ",
    "I was dressed for success, but success it never comes, ", 
    "Relationships hey-hey-hey",
    "There's ways of living and this is the way I'm living, "
];

malkmusMiddle = [
    "I know, oh trust me baby I know, ",
    "underneath the fake oil burning lamps,", 
    "everywhere eyes, nowhere to die,", 
    "your lowlife opinions", 
    "talk about your family,",
    "I wouldn't wanna shake your hand,",
    "a little indian christian lie, ", 
    "out on tour with the smashing pumpkins, ", 
    "your jokes are always bad",
    "and there's 40 different shades of black,", 
    "it's a brand new era, but it came too late,",
    "if I could settle down,",
];

malkmusEnd = [
    " I see the sunshine in your eyes.",
    " and you can never quarantine the past.", 
    " and this emory board is giving me a rash.", 
    " dreaming a dream dream dream.",
    " ta-da-da-de-doo",
    " because you are in such high protein plans.", 
    " maybe we could dance?",
    " dying doesn't meet my expectations.",
    " don't listen to your grandmother's advice.", 
    " you're so beautiful to look at when you cry.",
    " let's spend our last quarter stance randomly.",
    " tension and fame is our career."
];

function getLines(arr1, arr2, arr3) { // generate the lyric from random bits
    var currentMsg = document.getElementById("first_line");
    currentMsg.innerHTML ="...";
    var elem = document.getElementById("clicked");
    var msg = '';
    var num1 = Math.floor((Math.random() * 11) + 1);
    var num2 = Math.floor((Math.random() * 11) + 1);
    var num3 = Math.floor((Math.random() * 11) + 1);
    msg += arr1[num1] + '\n' + arr2[num2] + '\n' + arr3[num3];
    message(msg);
}

function message(arg) { // put the message in the textbox
    var elem = document.getElementById("first_line");
    var elemContent = elem.firstChild.nodeValue;
    elemContent = elemContent.replace('...', arg);
    elem.firstChild.nodeValue = elemContent;
    if (x.id === 'clicked') {
        x.id = 'isaacpic';
    }
     if (y.id === 'clicked') {
        y.id = 'bradpic';
    }
     if (z.id === 'clicked') {
        z.id = 'malkmuspic';
    }
}

var ready = document.getElementById("button"); //get button id
ready.addEventListener('click', function() //check which button was clicked and call getlines
{
    if (x.id === 'clicked') {
        getLines(isaacBeginning, isaacMiddle, isaacEnd);
    }
     if (y.id === 'clicked') {
        getLines(bradBeginning, bradMiddle, bradEnd);
    }
     if (z.id === 'clicked') {
        getLines(malkmusBeginning, malkmusMiddle, malkmusEnd);
    }
}, false);

