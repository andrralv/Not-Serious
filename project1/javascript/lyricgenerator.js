// lyrics generator 

// get first element by class
x = document.getElementsByClassName('isaac')[0];
y = document.getElementsByClassName('bradford')[0];
z = document.getElementsByClassName('malkmus')[0];
v = document.getElementsByClassName('mangum')[0];
w = document.getElementsByClassName('cuomo')[0];
u = document.getElementsByClassName('elverum')[0];
r = document.getElementsByClassName('bejar')[0];
s = document.getElementsByClassName('pink')[0];

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

// properties for Cuomo
cuomoBeginning = [
    "My girl don't love me, ",
    "I want a girl who will laugh for no one else, ",
    "I don't want to be alone ",
    "Why are you so far away from me? ",
    "Excuse the bitching, ",
    "Feeling is pain, ",
    "Do it to me everytime ",
    "I'm dumb she's a lesbian, ",
    "Married in my mind is no good, ",
    "We should do love to each other, ", 
    "This is such a pity, ",
    "Gimme some of that stuff, ",
    "One more time, I have crossed the line, "
];

cuomoMiddle = [
    "let it go, ",
    "I'm the best that you've ever had, ", 
    "why am I so obviously insane? ", 
    "I'm sorry for what I did, ", 
    "my fashion sense is a little whacked, ",
    "I guess you're as real as me, ",
    "everytime I pin down what I think I want it goes away, ", 
    "baby baby", 
    "tell me there's someone for me",
    "hip hip, ", 
    "come on and kick me,",
    "I can't control my brain,",
    "I'm not having any fun, "
];

cuomoEnd = [
    " I'm sorry for that I did.",
    " baby baby.", 
    " sometimes trying your best is not enough.", 
    " so I apologize to you.",
    " I know that I can be the meanest person in the world.",
    " all of the drugs she does scare me real good.", 
    " now I can never go home.",
    " baby don't you baby on me.",
    " I don't care what they say about us anyway.", 
    " you've got my song.",
    " you half-Japanese girls do it to me every time.",
    " please leave my sweater alone.", 
    " like father, stepfather, the son is drowning in the flood."
];

// properties for Elverum
elverumBeginning = [
    "I took my shirt off in the yard, ",
    "My clothes off me, ",
    "There's no hope for me, ",
    "Mountains and websites, ",
    "Ohhhhh ohhh uohhhhhhh, ",
    "Oh the emptyness, ",
    "It's raining on me but I don't want it to stop, ",
    "There's something glowing in my skin, ",
    "I forgot my songs, ",
    "I am bored, ", 
    "I'll make a coffee while looking out the window, ",
    "My heart beats loudly, ",
    "I thought I felt your shape but I was wrong, "
];

elverumMiddle = [
    "I went back to feeling alone again, ",
    "I have no head to hold in grief, ", 
    "yup, that's a pumpkin I saw, ", 
    "all the thoughts rushing in, ", 
    "we're just floating in space over molten rock",
    "you tore a hole so deep my leak poured out torrentially, ",
    "I cannot get through september without a battle, ", 
    "don't want it to stop, ", 
    "ohhh hhhohhhhhhh",
    "if you swing again I'll duck, ", 
    "*mumble* *mumble* *mumble* *mumble*",
    "I'll be in your bed when you awake, ",
    "compared to you I am small, "
];

elverumEnd = [
    " basically I just want to die naked in a snowy place while people remember me.",
    " there's nothing left except certain death.", 
    " I know no one and no one knows me.", 
    " you deserve yourself.",
    " AHHHHHHHHHHHHHHHHHHHAAA AHHHH umm oh.",
    " I'm not a planet at all.", 
    " I can't believe you actually died.",
    " in contact with the couch with you, a boring face.",
    " and now we both know what we have to do.", 
    " I'm alone except for the sound of insects flying.",
    " *mumble* *mumble*.",
    " oh what a loss.", 
    " can you tell that I'm down here?"
];

// properties for Bejar
bejarBeginning = [
    "Shadowy figures babbling on about typical rural shit, ",
    "Typical me, typical me, ",
    "You are alright, ",
    "I made my way through the Union Street design kids, ",
    "You disrupt the world's disorder just by virtue of your grace, ",
    "Distinguished colleagues, dead music-writers' brides - I apologize, ",
    "I don't know, I guess I'm doing alright, ",
    "When I'm at war I insist on slaughter and getting it on with the hangman's daughter, ",
    "Brown paper bag, don't stop me now, ",
    "Hey, there's Christine, ", 
    "Yes, I’m familiar with your scene, ",
    "Now that you got it all... wrong.., ",
    "Listen.. I've been drinking, "
];

bejarMiddle = [
    "desperate times call for desperate measures, ",
    "I can't walk away... ", 
    "I didn't stand a chance I couldn't stand at all, ", 
    "true love regrets to inform you, ", 
    "I was ok and everything as it was, ",
    "it's all very nice, ",
    "it's hell in here, ", 
    "I'm coming home, ", 
    "love is on the run, ",
    "playing the idiot all of your life, this is what you get, ", 
    "the forces of nature in love with the weather station, ",
    "you've been wandering around, ",
    "common scars brought us together, "
];

bejarEnd = [
    " I don't know what I'm doing alone in the dark.",
    " Nah, it’s cool you go, I’ll stay perfectly at home with this dread.", 
    " ta-da-ta-da-daaa.", 
    " sounds, smash hits, melody maker, NME, all sound like a dream to me.",
    " death to the murderers we've loved all our lives.",
    " a bit of tears and a bit of pills.", 
    " baby it's dawn, look what I've become: scum.",
    " let’s face it, old souls like us are being born to die.",
    " words words words...", 
    " I was starving in that shithouse of the world.",
    " you've got to stop calling me honey.",
    " new York City just wants to see you naked (And they will).", 
    " all good things must come to an end, the bad ones just go on forever."
];

// properties for Pink
pinkBeginning = [
    "Talk to me, it's now or never, babe, ",
    "Possum discovered!  ",
    "Tail is frozen, headlights in go over. Einstein was right, ",
    "Yeah, juicy Belladonna, ",
    "I want a girl as beautiful as the sunset, ",
    "Change me, make me gay, ",
    "I'm sorry but it's true, ",
    "Only in my dreams she'll be right there next to me, ",
    "Do you want to be my beefbud? ",
    "They never said I was a good kid, ", 
    "I'm a gothic bomb, ",
    "You're just playing hard to get, ",
    "She's older than me, "
];

pinkMiddle = [
    "I'm gonna work on it, work on it, ",
    "I just wanna see your smile, ", 
    "let's make a toast to glory days when you were 8 and I was only 41, ", 
    "you're in my heart, you're in my dreams, you're in my soul, ", 
    "you're not very nice, ",
    "I mingled with the dead with my Ouija board but not anymore, ",
    "we're best friends, ", 
    "I'm a necro-romantic, Imma suck on your blood, ", 
    "what is this feeling? ",
    "ohhhhhh baby baby, ", 
    "I'm staying home feeling sick with my palm in my pants, ",
    "tie me inside out, ",
    "everything is my fault, "
];

pinkEnd = [
    " c'est la vie baby.",
    " baby, me feast on placenta, PLACENTA!", 
    " SHE NEVER LOVED ME!", 
    " are you going to look after my boys?",
    " I want a chick who puts up with my shit.",
    " life in L.A is so lonely...", 
    " I want my west coast baby.",
    " that's why I'm the sex king.",
    " all I wanted was a girlfriend all of my life.", 
    " penetration time tonight.",
    " I'm breaking windows with my pain.",
    " I'm so done with getting high in the morning.", 
    " I used to hide in the dark."
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
    if (w.id ==='clicked') {
        getLines(cuomoBeginning, cuomoMiddle, cuomoEnd);
    }
    if (u.id ==='clicked') {
        getLines(elverumBeginning, elverumMiddle, elverumEnd);
    }
    if (r.id ==='clicked') {
        getLines(bejarBeginning, bejarMiddle, bejarEnd);
    }
    if (s.id ==='clicked') {
        getLines(pinkBeginning, pinkMiddle, pinkEnd);
    }
}, false);

