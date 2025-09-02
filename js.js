let marks = 85; 
if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
    console.log("marks", marks);
}
 else if (marks >= 75) {
    console.log("Grade B");
    console.log("marks", marks);

}
 else if (marks >= 50) {
    console.log("Grade C");
  console.log("marks", marks);
}
else if (marks >= 0) {
    console.log("Grade Fail");
    console.log("marks", marks);
}
 else {
    console.log("Invalid marks entered.");
}