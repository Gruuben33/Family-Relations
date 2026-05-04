let john = new person("John", 1)
let paul = new person("Paul", 1, john)
let cale = new person("Cale", 1, john)
let jess = new person("Jess", 0, john)
let martha = new person("Martha", 0, paul)
let steve = new person("Steve", 1, paul)
let jeff = new person("Jeff", 1, cale)
let mike = new person("Mike", 1, cale)
let darthvader = new person("DarthVader", 1, cale)
let heck = new person("Heck", 0, jess)
let perry = new person("Perry", 1, jess)
let luke = new person("Luke Skywalker", 1, darthvader)

let family = [john, paul, cale, jess, martha, steve, jeff, mike, darthvader, heck, perry, luke];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("darkgrey");
    textSize(16);
    fill("black");
}

function draw() {
    text(`${family[0].name}`, 20, 30);
}