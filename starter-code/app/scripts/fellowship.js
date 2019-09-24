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

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit

  var ul = document.createElement("ul");

  for (var i = 0 ; i < hobbits.length ; i++) {
    var li = document.createElement("li");
    li.class = "hobbit";
    li.innerHTML = hobbits[i];
    ul.appendChild(li);
  }

  var theShire = document.querySelector("article");
  console.log(theShire);

  theShire.appendChild(ul);

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'

  var div = document.createElement("div");
  div.id = 'the-ring';

  // give the div a class of 'magic-imbued-jewelry'

  div.setAttribute ('class', 'magic-imbued-jewelry');

  // add the ring as a child of Frodo

  var frodo = document.querySelector("li");
  console.log(frodo);

  frodo.appendChild(div);

  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  var onClick = document.querySelector("#the-ring");
  onClick.addEventListener("click", nazgulScreech);

}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}