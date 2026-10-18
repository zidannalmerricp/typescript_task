/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submitted = 0;
let notSubmitted = 0;
let passed = 0;
let revise = 0;
let total = 0;

for (let i = 0; i < submissions.length; i++) {
  total += submissions[i].score;

  if (submissions[i].submitted === true) {
    submitted++;

    if (submissions[i].score >= 75) {
      passed++;
    } else {
      revise++;
      console.log("Must revise:", submissions[i].student);
    }
  } else {
    notSubmitted++;
    console.log("Did not submit:", submissions[i].student);
  }
}

console.log("Students submitted:", submitted);
console.log("Students not submitted:", notSubmitted);
console.log("Students passed:", passed);
console.log("Students must revise:", revise);
console.log("Class average score:", total / submissions.length);