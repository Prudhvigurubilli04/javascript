let passingMarks = 50;

function processStudents(students) {
    let updatedStudents = students.map(student => ({
        name: student.name.toUpperCase(),
        marks: student.marks
    }));

    let passedStudents = updatedStudents.filter(student => student.marks >= passingMarks);

    passedStudents.forEach(student => {
        let grade;
        if (student.marks >= 90) grade = 'A';
        else if (student.marks >= 75) grade = 'B';
        else if (student.marks >= 65) grade = 'C';
        else if (student.marks >= 50) grade = 'D';
        else grade = 'F';

        let shortName = student.name.slice(0, 3);
        let hasA = student.name.includes('A') ? 'Yes' : 'No';

        console.log(`Name: ${shortName}, Marks: ${student.marks}, Grade: ${grade}, Has 'A': ${hasA}`);
    });
}

let students = [
    { name: "Teja", marks: 92 },
    { name: "praveen", marks: 20 },
    { name: "kishore", marks: 75 },
    { name: "divkar", marks: 50 }
];

processStudents(students);
