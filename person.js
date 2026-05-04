class person {
    constructor(name, gender, parent = null) {
        this.name = name;
        this.gender = gender;
        this.parent = parent;
        this.generation = null;
        if (this.parent == null) {
            this.generation = 0;
        }
        else {
            this.generation = family[this.parent].generation + 1;
        }
    }
}