const students = [
  { name: "John", scores: [90, 85, 80] },
  { name: "Jane", scores: [95, 81, 77] },
  { name: "Mark", scores: [70, 65, 60] },
  { name: "Sarah", scores: [50, 55, 45] },
];

//determine grade
function getGrade(score) {
  if (typeof score !== "number") {
    throw new Error("score cannot be a string");
  }
  if (score > 90) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  }
  return "F";
}

//determine average
function getAverage(student) {
  return student?.scores?.reduce(
    (curr, acc) => Math.round((curr + acc) / student?.scores?.length),
    0
  );
}

//show students' average result
function printStudentsResult(students) {
  let studentsResult = students.map((student) => {
    const studentAverageScore = getAverage(student?.scores);
    const studentGrade = getGrade(studentAverageScore);
    `Hi ${student?.name}, your average score is ${studentAverageScore} and your grade is ${studentGrade}`;
  });
  console.log(studentsResult);
}

printStudentsResult(students);
