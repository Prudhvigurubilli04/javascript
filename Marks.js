class students {
    constructor(name, marks, course, age) {
        this.name = name;
        this._marks = marks;
        this.course = course;
        this.age = age;
    }

getmarks = function() {
    return _marks;
}

details() {
    console.log(this.name+ this._marks+ this.course+ this.age)
}
}

const data = new students("prudhvi", 95, "java", 22);
data.details();

const data1 = new students("teju", 85, "java", 24);
data1.details();