class student {
    constructor(name, age, gender, phone, course, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.course = course;
        this.marks = marks;
    }


    Displayinfo() {

        (console.log("name:" + this.name));
        (console.log("age :" + this.age));
        (console.log("gender :" + this.gender));
        (console.log("phone :" + this.phone));
        (console.log("course :" + this.course));
        (console.log("marks :" + this.marks));
        console.log("--------------------------");
    }

}

let student1 = new student("prudhvi", 22, "Male", 6309114985, "java script", 85 );
let student2 = new student("tejas" , 22,  "Male", 6309114985, "java script", 90);
let student3 = new student("sivaji" ,22 , "Male", 6309114985, "java script", 95);

let students = [student1, student2, student3];
for (let i = 0; i < students.length; i++) {
    students[i].Displayinfo();
}