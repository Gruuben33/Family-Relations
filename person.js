class person {
    constructor(name, gender, parent = null) {
        this.name = name;
        this.gender = gender;
        this.parent = parent;
        this.generation = 1;
        if (this.parent != null) {
            this.generation = this.parent.generation + 1;
        }
        this.textBox = 50;
    }

    draw(x, y) {
        fill("black");
        rect(x, y, this.textBox*2, this.textBox);
        fill("white");
        text(this.name, x+this.textBox/2, y+this.textBox/2);
    }
}