import { StudentID, Student, Course, CourseGrade, Transcript } from './Types'
import DataBase from './dataBase';

let db: DataBase;

// start each test with a fresh empty database.
beforeEach(() => {
  db = new DataBase
});

// this may look undefined in TSC until you do an npm install
// and possibly restart VSC.
describe('tests for addStudent', () => {

  test('addStudent should add a student to the database', () => {
    // const db = new DataBase ()
    expect(db.nameToIDs('blair')).toEqual([])
    const id1 = db.addStudent('blair');
    expect(db.nameToIDs('blair')).toEqual([id1])
  });

  test('addStudent should return an unique ID for the new student',
    () => {
      // we'll just add 3 students and check to see that their IDs
      // are all different.
      const id1 = db.addStudent('blair');
      const id2 = db.addStudent('corey');
      const id3 = db.addStudent('delta');
      expect(id1).not.toEqual(id2)
      expect(id1).not.toEqual(id3)
      expect(id2).not.toEqual(id3)
    });

  test('the db can have more than one student with the same name',
    () => {
      const id1 = db.addStudent('blair');
      const id2 = db.addStudent('blair');
      expect(id1).not.toEqual(id2)
    })

  test('A newly-added student should have an empty transcript',
    () => {
      const id1 = db.addStudent('blair');
      const retrievedTranscript = db.getTranscript(id1)
      expect(retrievedTranscript.grades).toEqual([])
      expect(retrievedTranscript.student)
        .toEqual({
          studentID: id1, studentName: "blair"
        })
    });

  test('getTranscript should return the right transcript',
    () => {
      // add a student, getting an ID
      // add some grades for that student
      // retrieve the transcript for that ID
      // check to see that the retrieved grades are 
      // exactly the ones you added.    
    });

  test('getTranscript should throw an error when given a bad ID',
    () => {
      // in an empty database, all IDs are bad :)
      // Note: the expression you expect to throw must be wrapped in a (() => ...)
      expect(() => db.getTranscript(1)).toThrowError()
    });

    // test('getTranscript should throw an error when given a bad ID (bogus version)',
    // () => {
    //   // in an empty database, all IDs are bad :)
    //   // Note: the expression you expect to throw must be wrapped in a (() => ...)
    //   expect(db.getTranscript(1)).toThrowError()
    // });

})

describe('tests for addGrade', () => {
  test('addGrade() should add a CourseGrade to the Transcript of the Student', 
  () => {
    // Assemble
    const id1 = db.addStudent('blair')
    const blairStudent: Student = {studentID: id1, studentName: 'blair'}
    const mathCourse: Course = 'Math'
    const mathCourseGrade: CourseGrade = {course: mathCourse, grade: 88}

    // Act
    db.addGrade(blairStudent, mathCourse, mathCourseGrade)
    const transcript = db.getTranscript(id1)

    // Assess
    expect(transcript.grades).toEqual([mathCourseGrade])
  })

  test('addGrade() should throw an exception if the Student is not in the database',
  () => {
    // Assemble
    const blairStudent: Student = {studentID: 0, studentName: 'blair'}
    const mathCourse: Course = 'Math'
    const mathCourseGrade: CourseGrade = {course: mathCourse, grade: 88}

    // Act and Assess
    expect(() => db.addGrade(blairStudent, mathCourse, mathCourseGrade)).toThrowError()
  })

  test('addGrade() should throw an exception if the Course does not match the Course of the CourseGrade',
  () => {
    // Assemble
    const id1 = db.addStudent('blair')
    const blairStudent: Student = {studentID: id1, studentName: 'blair'}
    const mathCourse: Course = 'Math'
    const mathCourseGrade: CourseGrade = {course: mathCourse, grade: 88}
    const chemCourse: Course = 'Chemistry'

    // Act and Assess
    expect(() => db.addGrade(blairStudent, chemCourse, mathCourseGrade)).toThrowError()
  })

  test('if a CourseGrade already exists, addGrade() updates the CourseGrade',
  () => {
    // Assemble
    const id1 = db.addStudent('blair')
    const blairStudent: Student = {studentID: id1, studentName: 'blair'}
    const mathCourse: Course = 'Math'
    const mathCourseGrade1: CourseGrade = {course: mathCourse, grade: 88}
    const mathCourseGrade2: CourseGrade = {course: mathCourse, grade: 95}

    // Act
    db.addGrade(blairStudent, mathCourse, mathCourseGrade1)
    db.addGrade(blairStudent, mathCourse, mathCourseGrade2)
    const transcript = db.getTranscript(id1)

    // Assess
    expect(transcript.grades).toEqual([mathCourseGrade2])
  })
})


