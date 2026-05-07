function setup() {
    createCanvas(windowWidth, windowHeight);
    background("darkgrey");
    textSize(16);


    let quincy = new person("Quincy", 1)

    let gwendolin = new person("Gwen", 0, quincy)
    let strikerJones = new person("Striker", 1, quincy)

    let obynGreenfoot = new person("Obyn", 1, gwendolin)
    let captainChurchill = new person("Churchill", 1, gwendolin)
    let benjamin = new person("Ben", 1, strikerJones)
    let ezili = new person("Ezili", 0, strikerJones)

    let mortarMonkey = new person("Mortar", 1, obynGreenfoot)
    let iceMonkey = new person("Ice", 0, obynGreenfoot)
    let glueMonkey = new person("Glue", 0, captainChurchill)
    let bombShooter = new person("Bomb", 1, captainChurchill)
    let sniperMonkey = new person("Sniper", 1, benjamin)
    let monkeySub = new person("Sub", 0, benjamin)
    let monkeyBuccaneer = new person("Bucc", 1, ezili)
    let monkeyAce = new person("Ace", 1, ezili)

    let heliPilot = new person("Heli", 1, mortarMonkey)
    let superMonkey = new person("Super", 1, mortarMonkey)
    let ninjaMonkey = new person("Ninja", 0, iceMonkey)
    let alchemist = new person("Alch", 1, iceMonkey)
    let druid = new person("Druid", 1, glueMonkey)
    let spikeFactory = new person("Spike", 0, glueMonkey)
    let monkeyVillage = new person("Village", 1, bombShooter)
    let engineerMonkey = new person("Engineer", 0, bombShooter)
    let wizardMonkey = new person("Wizard", 0, sniperMonkey)
    let bombShooter2 = new person("Bomb II", 1, sniperMonkey)
    let dartMonkey = new person("Dart", 1, monkeySub)
    let boomerangMonkey = new person("Boomer", 0, monkeySub)
    let agentDart = new person("Agent", 1, monkeyBuccaneer)
    let spikeFactory2 = new person("Spike II", 0, monkeyBuccaneer)
    let iceMonkey2 = new person("Ice II", 1, monkeyAce)
    let glueMonkey2 = new person("Glue II", 0, monkeyAce)

    let family = [
        quincy,
        gwendolin, strikerJones,
        obynGreenfoot, captainChurchill, benjamin, ezili,
        mortarMonkey, iceMonkey, glueMonkey, bombShooter, sniperMonkey, monkeySub, monkeyBuccaneer, monkeyAce,
        heliPilot, superMonkey, ninjaMonkey, alchemist, druid, spikeFactory, monkeyVillage, engineerMonkey, wizardMonkey, bombShooter2, dartMonkey, boomerangMonkey, agentDart, spikeFactory2, iceMonkey2, glueMonkey2
    ];

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
    console.log(message(start, end, route));
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
                return `${end.name} is ${start.name}'s ${manyGreats(greats)}grandparent`
            } else {
                return `${end.name} is ${start.name}'s parent`
            }
        } else {
            return `${end.name} is ${start.name}`
        }
    } else if (lastStep == 2) {
        if (gendiff > 0) {
            return `${end.name} is ${start.name}'s ${manyGreats(greats+1)}uncle/aunt`
        } else {
            return `${end.name} is ${start.name}'s sibling`
        }
    } else if (lastStep > 2) {
        return `${end.name} and ${start.name} are ${cousins(start, end, gendiff)}`;
    }
}

function manyGreats(greats) {
    if (greats <= 0) {
        return "";
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
            let suffix = "";
            if (dict[0].length != dict[1].length) {
                let lineage = dict[0].length - 2 - removed;
                let stringLineage = lineage.toString()
                let finalChar = stringLineage[stringLineage.length-1]
                if (finalChar == "0" && lineage != 10) {
                    suffix = "st ";
                } else if (finalChar == "1" && lineage != 11) {
                    suffix = "nd ";
                } else if (finalChar == "2" && lineage != 12) {
                    suffix = "rd ";
                } else {
                    suffix = "th ";
                }
            }
            let removedWord = "";
            let removeMessage = "";
            if (removed == 1) {
                removedWord = "once"
            } else if (removed == 2) {
                removedWord = "twice"
            } else if (removed == 3) {
                removedWord = "thrice"
            } else if (removed > 3) {
                removedWord = "I can't count that high"
            }
            if (removedWord != "") {
                removeMessage = "removed"
            } else {
                removed = "";
            }
            return `${removed}${suffix}cousins ${removedWord} ${removeMessage}`
        } else {
            dict[0].push(start.parent);
            dict[1].push(end.parent);
        }
    } else {
        dict[0].push(start.parent);
        gendiff--
        return cousins(start.parent, end, gendiff, dict);
    }
    return cousins(start.parent, end.parent, gendiff, dict);
}