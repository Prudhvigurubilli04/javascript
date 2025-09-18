class person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    
Introduce() {
console.log(`name${this.name}is.name+this.age`);
}

}
class student extends person {
    constructor(name,age,grade,){
        super(name,age);
        this.grade = grade;
    }

    study() {
        console.log(this.name+this.grade);
    }
}
const student1 = new student("prudhvi", 22, "A");

student1.introduce();


student1.study();