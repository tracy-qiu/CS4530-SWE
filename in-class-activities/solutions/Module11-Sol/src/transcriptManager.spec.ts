import * as db from "./transcriptManager";

describe('Initially', () => {
  it('allTranscripts should be empty', () => {
    expect(db.getAll()).toEqual([]);
  });
});

/*
Tests for the Transcript Manager. 
 */
describe('TranscriptManager', () => {

  beforeEach(() => {
    // Before any test runs, clean up the datastore. This should ensure that tests are hermetic.
    db.initialize();
  })

  describe('getAll', () => {
    it('Should return the transcripts', () => {
      expect(db.getAll()).toEqual([]);
    });
  });
  
  describe('Create student', () => {
    it('should return an ID, starting with 1', () => {
      expect(db.getAll()).toEqual([]);
      const ret = db.addStudent('avery');
      expect(ret).toEqual(1);
    });
    it('', () => {
      
    })
  })

  describe('Initialize student transcript', () => {
    
    it ('Should initalize all transcripts to be empty even if there is more than one student', () => {
      // expect no students in the database
      expect(db.getAll()).toEqual([]);
      // expect no gettable transcripts without adding a student
      expect(db.getTranscript(1)).toBeUndefined();
      const studentID = db.addStudent('test student');
      // expect the transcript to be empty after adding a student
      expect(db.getTranscript(studentID)).toEqual({ student: { studentID: studentID, studentName: 'test student' }, grades: [] });
      const studentID2 = db.addStudent('test student 2');
      // expect the transcript to be empty after adding a student
      expect(db.getTranscript(studentID2)).toEqual({ student: { studentID: studentID2, studentName: 'test student 2' }, grades: [] });
      // should expect all transcripts in the databse to be empty
      expect(db.getAll()).toEqual([{ student: { studentID: studentID, studentName: 'test student' }, grades: [] }, { student: { studentID: studentID2, studentName: 'test student 2' }, grades: [] }]);
    });  
  })

  describe('Adding grades', () => {
    it('should add the grade to the transcript', () => {
      const studentID = db.addStudent('test student');
      db.addGrade(studentID, 'test course', 100);
      const grade = db.getGrade(studentID, 'test course');
      expect(grade).toBe(100);
    })
    it('Should throw an error if the student ID is invalid', () =>{
      const studentID = db.addStudent('test student');
      expect(() => db.addGrade(1, 'test course', 100)).toThrowError(`no student with ID = ${studentID-4}`);
    });    
    // TEST FOR LINE 76
    // addGrade - if the student already has a grade in the course - Error(`student ${studentID} already has a grade in course ${course}`);
    it ('Should throw an error if the student already has a grade in the course', () => {
      const studentID = db.addStudent('test student');
      const course = 'test course';
      db.addGrade(studentID, 'test course', 100);
      expect(() => db.addGrade(studentID, 'test course', 100)).toThrowError(`student ${studentID} already has a grade in course ${course}`);
    });

    it ('should be reflected with adding grades', () => {
      const studentID = db.addStudent('test student');
      db.addGrade(studentID, 'test course', 100);
      
      expect(db.getTranscript(studentID)).toEqual({ student: { studentID: studentID, studentName: 'test student' }, grades: [{ course: 'test course', grade: 100 }] }); 
      db.addGrade(studentID, 'test course 2', 100);
      expect(db.getTranscript(studentID)).toEqual({ student: { studentID: studentID, studentName: 'test student' }, grades: [{ course: 'test course', grade: 100 }, { course: 'test course 2', grade: 100 }] });
    });
  })


  // TEST FOR LINE 85
  describe ('addGradeToTranscript', () => {
    it ('Should throw an error if the course is already on the transcript', () => {
    const studentID = db.addStudent('test student');
    db.addGrade(studentID, 'test course', 100);
    expect(() => db.addGrade(studentID, 'test course', 100)).toThrowError();
    });
  })

  describe('getTranscript', () => {
    // Check to make sure the transcript is empty before adding any students
    it('should return undefined if the student has no transcript', () => {
      const studentID = db.addStudent('test student');
      // expect the transcript to be empty after adding a student
      expect(db.getTranscript(studentID)).toEqual({ student: { studentID: studentID, studentName: 'test student' }, grades: [] });
      db.deleteStudent(studentID);
      // expect the transcript to be undefined after deleting the student
      expect(db.getTranscript(studentID)).toBeUndefined();
    });

    // Test for the mutant
    it('should return undefined if the student has no transcript', () => {
      const studentID = db.addStudent('test student');
      expect(db.getTranscript(studentID)).toEqual({ student: { studentID: studentID, studentName: 'test student' }, grades: [] });
    });
  })
  // TEST FOR LINE 96
  describe ('getGrade', () => {
    // getGrade - throws an error if the student has no grade in the course - Error(`no grade for student ${studentID} in course ${course}`);
    it ('Should throw an error if the student has no grade in the course', () => {
      const studentID = db.addStudent('test student');
      const course = 'test course';
      expect(() => db.getGrade(studentID, 'test course')).toThrowError(`no grade for student ${studentID} in course ${course}`);
    });    
    // it should still throw the error even if the student has a grade in another course
    it ('Should still throw the error even if the student has a grade in another course', () => {
      const studentID = db.addStudent('test student');
      const course = 'test course 3';
      db.addGrade(studentID, 'test course', 100);
      db.addGrade(studentID, 'test course 2', 100);
      expect(() => db.getGrade(studentID, 'test course 3')).toThrowError(`no grade for student ${studentID} in course ${course}`);
    });

    // it should still throw the error even if the student has a grade in another course deleted
    it ('Should still throw the error even if the student has a grade in another course deleted', () => {
      const studentID = db.addStudent('test student');
      const course = 'test course 3';
      db.addGrade(studentID, 'test course', 100);
      db.addGrade(studentID, 'test course 2', 100);
      db.deleteStudent(studentID);
      expect(() => db.getGrade(studentID, 'test course 3')).toThrowError(`no grade for student ${studentID} in course ${course}`);
    });

    it('Should return the grade for the specified student and course', () => {
      const student1ID = db.addStudent('test student 1');
      const student2ID = db.addStudent('test student 2');
      const course = 'test course';

      db.addGrade(student1ID, course, 95);
      db.addGrade(student2ID, course, 85);

      const grade1 = db.getGrade(student1ID, course);
      const grade2 = db.getGrade(student2ID, course);

      expect(grade1).toBe(95);
      expect(grade2).toBe(85);
    });
  })

  describe('getStudentIDs', () => {
    it('Should return only the students who match the name', () => {
      const avery1 = db.addStudent('avery');
      const avery2 = db.addStudent('avery');
      const ripley = db.addStudent('ripley');

      //Probably should be checking if arrays contain same set of IDs, permitting different orders...
      expect(db.getStudentIDs('avery')).toEqual([avery1, avery2]);
      expect(db.getStudentIDs('ripley')).toEqual([ripley]);
    })
  });
  
  describe('Deleting students', () => {
    it('Should result in the students\' transcript no longer being available', () => {
      const studentID = db.addStudent('test student');
      db.deleteStudent(studentID);
      expect(db.getTranscript(studentID)).toBeUndefined();
    })
    it('Should throw an error if the ID is invalid', () => {
      const studentID = db.addStudent('test student');
      const studentID2 = db.addStudent('test student 2');
      const course = 'test course';
      db.addGrade(studentID, course, 100);
      db.addGrade(studentID2, course, 100);
      db.deleteStudent(studentID);
      expect(() => db.deleteStudent(studentID)).toThrowError(`no student with ID = ${studentID}`);
      // expect the other student to still be there
      expect(db.getTranscript(studentID2)).toEqual({ student: { studentID: studentID2, studentName: 'test student 2' }, grades: [{ course: 'test course', grade: 100 }] });
    });
  })
});
 