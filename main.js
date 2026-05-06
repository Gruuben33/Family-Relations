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
    console.log(message(start, end, route));
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

function message(start, end, route) {
    let gendiff = route.length - 1;
    let greats = gendiff - 2;
    let lastStep = route[gendiff]; // this is the same number even though that is not what greats will be used for
    if (lastStep == 1) {
        if (gendiff > 0) {
            if (gendiff > 1) {
                return `${end.name} is ${start.name}'s ${manyGreats(greats)} grandparent`
            } else {
                return `${end.name} is ${start.name}'s parent`
            }
        } else {
            return `${end.name} is ${start.name}`
        }
    } else if (lastStep == 2) {
        if (gendiff > 0) {
            return `${end.name} is ${start.name}'s uncle/aunt`
        } else {
            return `${end.name} is ${start.name}'s sibling`
        }
    } else if (lastStep > 2) {
        return `${end.name} and ${start.name} are ${cousins(start, end, gendiff)}`;
    }
}

function manyGreats(greats) {
    if (greats == 0) {
        return;
    } else {
        let message = ""
        for (let i = 0; i < greats; i++) {
            message += "great "
        }
        return message;
    }
}

function cousins(start, end, gendiff, dict = {}) {
    if (!dict[0]) {
        dict[0] = [];
        dict[1] = [];
    }
    if (gendiff == 0) {
        if (start == end) {
            let removed = dict[0].length - dict[1].length;
                let suffix = null;
                let lineage = dict[0].length - 2 - removed;
                let stringLineage = lineage.toString()
                let finalChar = lineage[lineage.length-1]
                if (finalChar == "0" && lineage != 10) {
                    suffix = "st";
                } else if (finalChar == "1" && lineage != 11) {
                    suffix = "nd";
                } else if (finalChar == "2" && lineage != 12) {
                    suffix = "rd";
                } else {
                    suffix = "th"
                }
            let removedWord = null;
            let removeMessage
            if (removed == 1) {
                removedWord = "once"
            } else if (removed == 2) {
                removedWord = "twice"
            } else if (removed == 3) {
                removedWord = "thrice"
            } else if (removed > 3) {
                removedWord = "I can't count that high"
            }
            if (removedWord != null) {
                removeMessage = "removed"
            }
            return `${dict[0].length - removed}${suffix} cousins ${removedWord} ${removeMessage}`
        }
        else {
            dict[0].push(start.parent);
            dict[1].push(end.parent);
        }
    } else {
        dict[0].push(start.parent);
        dict[1].push(end.parent);
        gendiff--
    }
    return cousins(start.parent, end.parent, gendiff, dict);
}