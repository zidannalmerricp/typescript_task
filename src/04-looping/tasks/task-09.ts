/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let total = 0;
let highest = students[0].score;
let lowest = students[0].score;

for (let i = 0; i < students.length; i++) {
  let score = students[i].score;

  total += score;

  if (score >= 90) {
    gradeA++;
  } else if (score >= 80) {
    gradeB++;
  } else if (score >= 70) {
    gradeC++;
  } else {
    gradeD++;
  }

  if (score > highest) {
    highest = score;
  }

  if (score < lowest) {
    lowest = score;
  }
}

console.log("Grade A:", gradeA);
console.log("Grade B:", gradeB);
console.log("Grade C:", gradeC);
console.log("Grade D:", gradeD);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", total / students.length);