// lyrics generator 

// get first element by class
x = document.getElementsByClassName('isaac')[0];
y = document.getElementsByClassName('bradford')[0];
z = document.getElementsByClassName('malkmus')[0];
v = document.getElementsByClassName('mangum')[0];

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
    "Well I hope that you like it here, ",
    "There's so much beauty it can make you cry"
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
    "no one's taking showers anymore,",
    "need more sleep than coke and meth, "
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
    " this boat's sinking and I ain't got shit to do with that.", 
    " I'm out of gas."
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
    "Come on little boy, ",
    "Why does it have to be so brutal?, "
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
    "pray for the sea,"
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
    " I walked around like a walker.",
    " so many useless bodies."
];

// properties for Malkmus
malkmusBeginning = [
    "Blind date with a chancer,",
    "I'd like to check out your public protests,",
    "Come on darling,",
    "We need secrets se-crets se-se-se-secrets,",
    "Oh you ignorant soul, believe in what you want to do,",
    "Don't take your pawnshop home,",
    "This is the city,",
    "You kiss like a rock but you know,",
    "Let's talk about leaving,",
    "I was dressed for success, but success it never comes,", 
    "Relationships hey-hey-hey",
    "There's ways of living and this is the way I'm living,",
    "No more absolutes,"
];

malkmusMiddle = [
    " I know, oh trust me baby I know, ",
    " underneath the fake oil burning lamps,", 
    " everywhere eyes, nowhere to die,", 
    " your lowlife opinions", 
    " talk about your family,",
    " I wouldn't wanna shake your hand,",
    " a little indian christian lie, ", 
    " out on tour with the smashing pumpkins, ", 
    " your jokes are always bad",
    " and there's 40 different shades of black,", 
    " it's a brand new era, but it came too late,",
    " if I could settle down,",
    " god struck by the first valley"
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
    " tension and fame is our career.", 
    " kiss me into the past."
];

// properties for mangum
mangumBeginning = [
    "The only girl I ever loved, ",
    "When you were young, ",
    "What a beautiful face I have found in this place, ",
    "I can hear as you tap on your jar, ", 
    "Daddy please hear the song that I sing, ",
    "Oh holy rattlesnakes, ",
    "This is the room one afternoon I knew I could love you, ", 
    "I love you Jesus Christ, ",
    "One day we will die and our ashes will fly", 
    "I am listening to hear where you are, ", 
    "Two-headed boy, put on sunday shoes, ", 
    "Sweetness sings from every corner, ",
    "You're riding alone in the back of a steamer"
    ];

mangumMiddle = [
    " she goes and she knows she'll never be afraid,",
    " and she was born in a bottlerocket in 1929,",
    " I know she will never die,",
    " and I will love you for the rest of your life",
    " and when we break,",
    " in my dreams you are alive and you are crying,", 
    " how you loved to find your tongue in his teeth,", 
    " now she is a little boy in spain playing pianos filled with flames,", 
    " but now we must pick up every piece,",
    " there are lights in the clouds,", 
    " dee-dee-deee-dee-deeeee ", 
    " your mom will stick a fork right into daddy's shoulder,",
    " the milky delight inviting us all, "
    ];

mangumEnd = [
    " slam me into the ditch of debris.",
    " into you I will glow.",
    " so pretty, so empty.",
    " please, don't leave me here.", 
    " don't hate her when she gets up to leave.",
    " how strange it is to be anything at all.",
    " when we meet on a cloud I'll be laughing out loud.",
    " semen stains the mountain tops.",
    " I will take you and leave you alone.",
    " I will bury you in time.", 
    " dee-dee-dee-de-deee.",
    " god is a place you will wait for the rest of your life.",
    " your head is filled with flames."
    ];

function getLines(arr1, arr2, arr3) { // generate the lyric from random bits
    var currentMsg = document.getElementById("first_line");
    currentMsg.innerHTML ="...";
    var msg = '';
    var num1 = Math.floor((Math.random() * 12) + 1);
    var num2 = Math.floor((Math.random() * 12) + 1);
    var num3 = Math.floor((Math.random() * 12) + 1);
    msg += arr1[num1] + '\n' + arr2[num2] + '\n' + arr3[num3];
    message(msg);
};

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
    if (v.id === 'clicked') {
        v.id = 'mangumpic';
    }
};

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
    if (v.id ==='clicked') {
        getLines(mangumBeginning, mangumMiddle, mangumEnd);
    }
}, false);

