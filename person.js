class person {
    constructor(name, gender, parent = null) {
        this.name = name;
        this.gender = gender;
        this.parent = parent;
        this.generation = 1;
        if (this.parent != null) {
            this.generation = this.parent.generation + 1;
        }
    }
}