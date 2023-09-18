let grade = prompt("write down whats your grade in numbers  please");
grade = parseFloat(grade);
if (grade <= 64) {
  console.log("F");
} else if (grade >= 65 && grade <= 69) {
  console.log("D");
} else if (grade >= 70 && grade <= 79) {
  console.log("C");
} else if (grade >= 80 && grade <= 89) {
  console.log("B");
} else if (grade >= 90 && grade <= 100) {
  console.log("A");
}

let grade2 = prompt("write down whats your grade in letters");
if (grade2 === "F") {
  console.log("0-64");
}
if (grade2 === "D") {
  console.log("65-69");
}
if (grade2 === "C") {
  console.log("70-79");
}
if (grade2 === "B") {
  console.log("80-89");
}
if (grade2 === "A") {
  console.log("90-100");
}
