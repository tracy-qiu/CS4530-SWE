import { StudentID, Student, Course, CourseGrade, Transcript } from './Types';
import DataBase from './dataBase';

let db: DataBase;

// start each test with a fresh empty database.
beforeEach(() => {
  db = new DataBase();
});

// this may look undefined in TSC until you do an npm install
// and possibly restart VSC.
describe('tests for addStudent', () => {
  test('addStudent should add a student to the database', () => {
    // const db = new DataBase ()
    expect(db.nameToIDs('blair')).toEqual([]);
    const id1 = db.addStudent('blair');
    expect(db.nameToIDs('blair')).toEqual([id1]);
  });

  test('addStudent should return an unique ID for the new student', () => {
    // we'll just add 3 students and check to see that their IDs
    // are all different.
    const id1 = db.addStudent('blair');
    const id2 = db.addStudent('corey');
    const id3 = db.addStudent('delta');
    expect(id1).not.toEqual(id2);
    expect(id1).not.toEqual(id3);
    expect(id2).not.toEqual(id3);
  });

  test('the db can have more than one student with the same name', () => {
    const id1 = db.addStudent('blair');
    const id2 = db.addStudent('blair');
    expect(id1).not.toEqual(id2);
  });

  test('A newly-added student should have an empty transcript', () => {
    const id1 = db.addStudent('blair');
    const retrievedTranscript = db.getTranscript(id1);
    expect(retrievedTranscript.grades).toEqual([]);
    expect(retrievedTranscript.student).toEqual({
      studentID: id1,
      studentName: 'blair',
    });
  });

  test('getTranscript should return the right transcript', () => {
    // add a student, getting an ID
    // add some grades for that student
    // retrieve the transcript for that ID
    // check to see that the retrieved grades are
    // exactly the ones you added.
  });

  test('getTranscript should throw an error when given a bad ID', () => {
    // in an empty database, all IDs are bad :)
    // Note: the expression you expect to throw must be wrapped in a (() => ...)
    expect(() => db.getTranscript(1)).toThrowError();
  });

  // test('getTranscript should throw an error when given a bad ID (bogus version)',
  // () => {
  //   // in an empty database, all IDs are bad :)
  //   // Note: the expression you expect to throw must be wrapped in a (() => ...)
  //   expect(db.getTranscript(1)).toThrowError()
  // });
});

describe('tests for addGrade', () => {
  test('addGrade should add a grade to the student transcript', () => {
    const id1: StudentID = db.addStudent('blair');
    const student1: Student = { studentID: id1, studentName: 'blair' };

    expect(db.getTranscript(id1).grades).toEqual([]);
    const courseName: Course = 'SwEng';
    const courseGrade: CourseGrade = { course: courseName, grade: 97 };

    db.addGrade(student1, courseName, courseGrade);

    expect(db.getTranscript(id1).grades).toEqual([courseGrade]);
  });
  test('addGrade should append a grade to the student transcript', () => {
    const id1: StudentID = db.addStudent('blair');
    const student1: Student = { studentID: id1, studentName: 'blair' };

    expect(db.getTranscript(id1).grades).toEqual([]);
    const courseName: Course = 'SwEng';
    const courseGrade: CourseGrade = { course: courseName, grade: 97 };

    db.addGrade(student1, courseName, courseGrade);

    expect(db.getTranscript(id1).grades).toEqual([courseGrade]);

    const OODCourse: Course = 'OOD';
    const OODCourseGrade: CourseGrade = { course: OODCourse, grade: 10 };

    db.addGrade(student1, OODCourse, OODCourseGrade);
    expect(db.getTranscript(id1).grades).toEqual([courseGrade, OODCourseGrade]);
  });
  test('Replaces course grade for a course that student already has a grade for', () => {
    const id1: StudentID = db.addStudent('blair');
    const student1: Student = { studentID: id1, studentName: 'blair' };

    expect(db.getTranscript(id1).grades).toEqual([]);
    const courseName: Course = 'SwEng';
    const courseGradeOld: CourseGrade = { course: courseName, grade: 12 };

    db.addGrade(student1, courseName, courseGradeOld);

    expect(db.getTranscript(id1).grades).toEqual([courseGradeOld]);

    const courseGradeNew: CourseGrade = { course: courseName, grade: 80 };
    db.addGrade(student1, courseName, courseGradeNew);

    expect(db.getTranscript(id1).grades).toEqual([courseGradeNew]);
  });
  test("throws error if student doesn't exist", () => {
    const id1: StudentID = 10;
    const student1: Student = { studentID: id1, studentName: 'blair' };
    const courseName: Course = 'SwEng';
    const courseGrade: CourseGrade = { course: courseName, grade: 97 };

    expect(() => db.addGrade(student1, courseName, courseGrade)).toThrowError();
  });

  test("tthrows error if Course argument doesn't match CourseGrade", () => {
    const id1: StudentID = db.addStudent('blair');
    const student1: Student = { studentID: id1, studentName: 'blair' };
    const courseName: Course = 'OOD';
    const courseGrade: CourseGrade = { course: 'SwEng', grade: 97 };

    expect(() => db.addGrade(student1, courseName, courseGrade)).toThrowError();
  });
});
