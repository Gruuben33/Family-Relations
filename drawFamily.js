const TOP_Y = 50
const VERTICAL_GAP = 50

function drawFamily(relatives) {
	// find the "spawner" patriarch/matriarch
	let originalPerson = findOrginalPerson(relatives)
	if (originalPerson) {
		drawParentAndChildren(originalPerson, relatives, 0, windowWidth / 2, windowWidth)
	}
	else {
		console.log("WTF, there is no original person in this family")
	}
}

function findOrginalPerson(relatives) {
	for (let i = 0; i < relatives.length; i++) {
		let person = relatives[i]
		if (!person.parent) {
			return person
		}
	}
	return null // no orginal person found!!!
}

function drawParentAndChildren(parent, relatives, level, x, width) {
	// draw the parent node
	let y = TOP_Y + level * VERTICAL_GAP
	
	// find children and draw them
	let children = parent.findChildren(relatives)
	let n = children.length
	let xGap = width / n
	let xStart = x - width / 2
	children.forEach((child, i) => {
		let childX = xStart + xGap * (i + 0.5)
		drawParentAndChildren(child, relatives, level + 1, childX, xGap)
		
		// draw a line connecting the parent node to the child node
		push()
		stroke('blue')
		line(x, y, childX, TOP_Y + (level + 1) * VERTICAL_GAP)
		pop()
	})
	parent.draw(x, y)
}

function drawRelationshipBetween(fromPerson, toPerson) {
	// Check if both people have a drawn position
	if (fromPerson.drawPosition && toPerson.drawPosition) {
		drawArrow(fromPerson.drawPosition, toPerson.drawPosition.sub(fromPerson.drawPosition), 'red')
	}
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}