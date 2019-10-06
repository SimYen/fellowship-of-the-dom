console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth

  var section = document.createElement("section");
  section.setAttribute("id", "middle-earth");

  // add each land as an article tag

  for ( var i = 0 ; i < lands.length ; i++) {
    var article = document.createElement("article");
    section.appendChild(article);

  // inside each article tag include an h1 with the name of the land
    var h1 = document.createElement("h1");
    h1.innerHTML = lands[i];
    article.appendChild(h1);
  }

  // append middle-earth to your document body

  document.body.appendChild(section);

}

makeMiddleEarth();


// Part 2

var theShire = document.querySelector("article");

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit

  var ul = document.createElement("ul");

  for (var i = 0 ; i < hobbits.length ; i++) {
    var li = document.createElement("li");
    li.innerHTML = hobbits[i];
    li.classList.add("hobbit");
    ul.appendChild(li);
  }

  theShire.appendChild(ul);

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'

  var div = document.createElement("div");
  div.id = 'the-ring';

  // give the div a class of 'magic-imbued-jewelry'

  div.classList.add('magic-imbued-jewelry');

  // add the ring as a child of Frodo

  var frodo = document.querySelector("li");

  frodo.appendChild(div);

  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  var onClick = document.querySelector("#the-ring");
  onClick.addEventListener("click", nazgulScreech);

}

keepItSecretKeepItSafe();

// Part 4

var rivendell = document.querySelectorAll("article")[1];

function makeBuddies() {
  // create an aside tag

  var aside = document.createElement("aside");

  // attach an unordered list of the 'buddies' in the aside
  var ul = document.createElement("ul");

  for (var i = 0 ; i < buddies.length ; i++) {
    var li = document.createElement("li");
    li.innerHTML = buddies[i];
    ul.appendChild(li);
  }

  aside.appendChild(ul);

  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);

}

makeBuddies();

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = rivendell.querySelectorAll("li")[3];
  strider.innerHTML = "Aragorn";

}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  var assembleHobbits = theShire.querySelector("ul");
  rivendell.appendChild(assembleHobbits);

}

leaveTheShire();

// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowship";

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var fellowship = rivendell.querySelectorAll("li");
  for (var i = 0 ; i < fellowship.length ; i++) {
    theFellowship.appendChild(fellowship[i]);

  // after each character is added make an alert that they have joined your party
    //alert(fellowship[i].innerText + " has joined the fellowship.");
  }

  rivendell.appendChild(theFellowship);

}

forgeTheFellowShip();

// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = rivendell.querySelector("li");
  gandalf.innerHTML = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "solid grey";
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("Horn of Gondor has been blown!");

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromir = rivendell.querySelectorAll("li")[4];
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  var theFellowship = document.getElementById("the-fellowship");
  theFellowship.removeChild(boromir);
}

hornOfGondor();

// Part 10

var mordor = document.querySelectorAll("article")[2];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = rivendell.querySelectorAll("li")[4];
  var sam = rivendell.querySelectorAll("li")[5];

  mordor.appendChild(frodo);
  mordor.appendChild(sam);

  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();

// Part 11

var mountDoom = document.getElementById("mount-doom");

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  mordor.appendChild(gollum);

  // Remove the ring from Frodo and give it to Gollum
  var theRing = document.getElementById("the-ring");
  gollum.appendChild(theRing);

  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  var gollum = document.getElementById("gollum");
  mountDoom.removeChild(gollum)

  // Move all the hobbits back to the shire
  var moveHobbits = document.querySelectorAll(".hobbit");
  console.log(moveHobbits);

  for (var i = 0; i < moveHobbits.length; i++) {
    theShire.appendChild(moveHobbits[i]);
  }
}

thereAndBackAgain();