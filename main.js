function setup() {
    createCanvas(windowWidth, windowHeight);
    background("darkgrey");
    textSize(16);
    fill("black");

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

    main(family)
}

function main(family) {
    drawFamily(family);
    let personA = family[floor(random(0, family.length))];
    let personB = family[floor(random(0, family.length))];
    let start = setRoute(personA, personB)[0]
    let end = setRoute(personA, personB)[1]
    let steps = {"parent": 0, "self": 1, "sibling": 2};
    let route = checkLineage(start, end, family, steps);
    text(`${start.name}`, windowWidth/2, windowHeight/2 - 50)
    text(`${end.name}`, windowWidth/2, windowHeight/2)
    console.log(route);
}

function drawFamily(family) {
    let count = 0;
    let currentGen = 0;
    for (let i = 0; i < family.length; i++) {
        if (currentGen != family[i].generation) {
            currentGen = family[i].generation;
            count = 0;
        }
        text(family[i].name, 50 + (count * 120), 50 + (family[i].generation * 40));
        count++;
    }
}

function setRoute(personA, personB) {
    if (personA.generation < personB.generation) {
        return [start = personB, end = personA]
    }
    else {
        return [start = personA, end = personB]
    }
}

function checkLineage(start, end, family, steps, route = [], loop = 0) {
    let gendiff = start.generation - end.generation;
    if (gendiff == 0) {
        if (start.parent == end.parent) {
            if (start == end) {
                route.push(steps["self"]);
                return route;
            }
            else {
                route.push(steps["sibling"]);
                return route;
            }
        }
        else {
            route.push(start.generation);
            return route;
        }
    }
    else {
        route.push(steps["parent"]);
        return checkLineage(start.parent, end, family, steps, route, loop);
    }
}