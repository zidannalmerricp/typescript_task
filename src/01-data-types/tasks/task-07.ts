
type Registration = {
  studentId: string;
  fullName: string;
  gradeLevel: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: string;
  isPaymentCompleted: boolean;
};

const registration1: Registration = {
  studentId: "STU001",
  fullName: "Zidan Almer Dzaky",
  gradeLevel: "10",
  courseId: "CRS001",
  courseTitle: "Web Development",
  instructorName: "Andi",
  totalLearningHours: 40,
  registrationDate: "2026-08-28",
  isPaymentCompleted: true,
};

const registration2: Registration = {
  studentId: "STU002",
  fullName: "Budi Santoso",
  gradeLevel: "11",
  courseId: "CRS002",
  courseTitle: "Mobile Programming",
  instructorName: "Siti",
  totalLearningHours: 35,
  registrationDate: "2026-08-28",
  isPaymentCompleted: false,
};

const registration3: Registration = {
  studentId: "STU003",
  fullName: "Siti Aminah",
  gradeLevel: "12",
  courseId: "CRS003",
  courseTitle: "Python Programming",
  instructorName: "Budi",
  totalLearningHours: 30,
  registrationDate: "2026-08-28",
  isPaymentCompleted: true,
};

console.log("Registration 1 :", registration1);
console.log("Registration 2 :", registration2);
console.log("Registration 3 :", registration3);
