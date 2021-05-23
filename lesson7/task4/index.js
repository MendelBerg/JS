const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(studentName => !studentsForRetake.includes(studentName))
    .map(studentName => 'Good job, ' + studentName);

// example 1:

// input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));
// output:
// ['Good job, a', 'Good job, c']
