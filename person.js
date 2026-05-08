class person {
    constructor(name, gender, parent = null) {
        this.name = name;
        this.gender = gender;
        this.parent = parent;
        this.generation = 1;
        if (this.parent != null) {
            this.generation = this.parent.generation + 1;
        }
        this.textBox = 25;
    }

    findChildren(relatives) {
		let children = []
		relatives.forEach(person => {
			if (person.parent == this) {
				children.push(person)
			}
		})
		return children
	}

    //draw(x, y) {
    //    fill("black");
    //    rect(x, y, this.textBox*2, this.textBox);
    //    fill("white");
    //    text(this.name, x+this.textBox, y+this.textBox/2);
    //}
    draw(x, y) {
		// save our drawn position in case anyone needs it.
		if (x && y) {
			this.drawPosition = createVector(x, y)
		}
		
		if (this.drawPosition) {			
			push()
			textAlign(CENTER, CENTER)
			textStyle(BOLD)
			fill('rgb(243,208,208)')
			rect(x - 30, y - 10, 60, 20)
			fill('black')
			text(`${this.name}`, this.drawPosition.x, this.drawPosition.y)
			pop()
		}
	}
}