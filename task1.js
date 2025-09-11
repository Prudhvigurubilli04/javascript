let student=[
    { name: 'Prudhvi', age:22, marks:90 },
    { name: 'tejas', age:23, marks:80 },
    { name:'sivaji', age:22, marks:70 },
];
let sum=0;
let average=0;
function avg(student){
    for(let i=0;i<student.length;i++){
        sum=sum+student[i].marks;
        average=sum/student.length
    }
    console.log(average);
}
avg(student)

