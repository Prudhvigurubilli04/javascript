class student {
    #fees;

    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.#fees = 0;
    }

    fees(amount) {
        if (amount >= 0) {
            this.#fees = amount;
        } else {
            console.log("fees must be a positive value")
        }
    }

    studentfees() {
        return this.#fees;
    }

    #Discount(baseamount) {
        return baseamount - baseamount * 0.1;
    }
    calculatefinalfees() {
        return this.#Discount(this.#fees);
    }
    getDetails(){
        return(`${this.name}, Age: ${this.age}, Course: ${this.course}`);
    }
}
class schoolstudent extends student {
    constructor(name,age,course,schoolname) {
        super(name,age,course);
        this.schoolname = schoolname;
    }

getDetails() {
   return (`school Student: ${this.name} (Age: ${this.age}), Course: ${this.course}, School: ${this.schoolname}`);
}
}

class collegestudent extends student {
    constructor(name,age,course,collegename) {
        super(name,age,course);
        this.collegename =collegename;
    }

     getDetails() {
    return (` college Student: ${this.name} (Age: ${this.age}), Course: ${this.course}, college: ${this.collegename}`);
}

}

const student1 = new schoolstudent ("Prudhvi", 15, "Mathematics", "Pragati School");
student1.fees(10000);

const student2 = new collegestudent ("Pavan", 20, "Computer Science", "ABC College");
student2.fees(50000);


console.log(student1.getDetails());
console.log(`Fees: ${student1.calculatefinalfees()}`);
console.log(student2.getDetails());
console.log(`Fees: ${student2.calculatefinalfees()}`);
