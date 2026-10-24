/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
  { student: "Alya", course: "TypeScript", completed: true, score: 91, duration: 38 },
  { student: "Budi", course: "TypeScript", completed: false, score: 45, duration: 12 },
  { student: "Citra", course: "Database", completed: true, score: 87, duration: 42 },
  { student: "Dimas", course: "Backend", completed: true, score: 96, duration: 40 },
  { student: "Eka", course: "Database", completed: false, score: 60, duration: 18 },
  { student: "Fajar", course: "Backend", completed: true, score: 82, duration: 35 },
  { student: "Gita", course: "TypeScript", completed: true, score: 88, duration: 36 },
  { student: "Hana", course: "Backend", completed: false, score: 70, duration: 20 }
];

function countTotalEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  return enrollments.length;
}

function countCompletedEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  let count = 0;

  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].completed) {
      count++;
    }
  }

  return count;
}

function countIncompleteEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  return countTotalEnrollments(enrollments) - countCompletedEnrollments(enrollments);
}

function calculateCompletionPercentage(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  return countCompletedEnrollments(enrollments) / countTotalEnrollments(enrollments) * 100;
}

function findHighestScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  let highest = enrollments[0].score;

  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].score > highest) {
      highest = enrollments[i].score;
    }
  }

  return highest;
}

function findLowestScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  let lowest = enrollments[0].score;

  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].score < lowest) {
      lowest = enrollments[i].score;
    }
  }

  return lowest;
}

function calculateAverageScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  let total = 0;

  for (let i = 0; i < enrollments.length; i++) {
    total += enrollments[i].score;
  }

  return total / countTotalEnrollments(enrollments);
}

function countPassingStudents(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  let count = 0;

  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].score >= 75) {
      count++;
    }
  }

  return count;
}

function countStudentsByCourse(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[], course: string): number {
  let count = 0;

  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].course === course) {
      count++;
    }
  }

  return count;
}

function calculateAverageScoreByCourse(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[], course: string): number {
  let total = 0;
  let count = 0;

  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].course === course) {
      total += enrollments[i].score;
      count++;
    }
  }

  return count > 0 ? total / count : 0;
}

function calculateTotalLearningHours(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  let total = 0;

  for (let i = 0; i < enrollments.length; i++) {
    total += enrollments[i].duration;
  }

  return total;
}

function calculateAverageLearningDuration(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
  return calculateTotalLearningHours(enrollments) / countTotalEnrollments(enrollments);
}

function printCompletionStatistics(): void {
  console.log("=== Completion Statistics ===");
  console.log("Total Enrollments:", countTotalEnrollments(enrollments));
  console.log("Completed Enrollments:", countCompletedEnrollments(enrollments));
  console.log("Incomplete Enrollments:", countIncompleteEnrollments(enrollments));
  console.log("Completion Percentage:", calculateCompletionPercentage(enrollments).toFixed(2) + "%");
}

function printAcademicStatistics(): void {
  console.log("\n=== Academic Statistics ===");
  console.log("Highest Score:", findHighestScore(enrollments));
  console.log("Lowest Score:", findLowestScore(enrollments));
  console.log("Average Score:", calculateAverageScore(enrollments).toFixed(2));
  console.log("Students with Passing Scores:", countPassingStudents(enrollments));
}

function printCourseStatistics(): void {
  console.log("\n=== Course Statistics ===");
  console.log("TypeScript Enrollments:", countStudentsByCourse(enrollments, "TypeScript"));
  console.log("TypeScript Average Score:", calculateAverageScoreByCourse(enrollments, "TypeScript").toFixed(2));
  console.log("Database Enrollments:", countStudentsByCourse(enrollments, "Database"));
  console.log("Database Average Score:", calculateAverageScoreByCourse(enrollments, "Database").toFixed(2));
  console.log("Backend Enrollments:", countStudentsByCourse(enrollments, "Backend"));
  console.log("Backend Average Score:", calculateAverageScoreByCourse(enrollments, "Backend").toFixed(2));
}

function printLearningStatistics(): void {
  console.log("\n=== Learning Statistics ===");
  console.log("Total Learning Hours:", calculateTotalLearningHours(enrollments));
  console.log("Average Learning Duration:", calculateAverageLearningDuration(enrollments).toFixed(2));
}

function printDashboard(): void {
  printCompletionStatistics();
  printAcademicStatistics();
  printCourseStatistics();
  printLearningStatistics();
}

printDashboard();