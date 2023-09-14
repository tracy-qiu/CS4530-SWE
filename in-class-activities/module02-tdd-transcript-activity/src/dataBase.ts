import { StudentID, Student, Course, CourseGrade, Transcript } from './Types'
import { IDataBase } from './IDataBase'

const Avery : Student = { studentID: -1, studentName: "Avery"}
const emptyTranscript : Transcript = { student: Avery, grades: [] };

export default class DataBase implements IDataBase {

    /** the list of transcripts in the database */
    private transcripts : Transcript [] = []

    /** the last assigned student ID 
     * @note Assumes studentID is Number
    */
    private lastID : number

    constructor () {this.lastID = 0}

    /** Adds a new student to the database
     * @param {string} newName - the name of the student
     * @returns {StudentID} - the newly-assigned ID for the new student
     */
    addStudent (newName: string): StudentID {
        const newID = this.lastID++
        const newStudent:Student = {studentID: newID, studentName: newName}
        this.transcripts.push({student: newStudent, grades: []})
        return newID
    }


    /**
     * @param studentName 
     * @returns list of studentIDs associated with that name
     */
    nameToIDs (studentName: string) : StudentID[] {
        return this.transcripts
            .filter(t => t.student.studentName === studentName)
            .map(t => t.student.studentID)
    }


    /**
     * 
     * @param id - the id to look up
     * @returns the transcript for this ID
     */
    getTranscript (id: StudentID): Transcript {
        const ret : Transcript | undefined = this.transcripts.find(t => t.student.studentID === id)
            if (ret === undefined) {throw new Error("unknown ID")}
            else {return ret}
    }

        
    deleteStudent (id: StudentID): void  {
        throw new Error("not implemented yet")  
    }   // hmm, what to do about errors??

    addGrade (id: Student, course: Course, courseGrade: CourseGrade) : void {
        const transcript = this.getTranscript(id.studentID)

        if (course !== courseGrade.course) {
            throw new Error("Course does not match course of CourseGrade")
        }

        if (transcript.grades.findIndex((g) => g.course === course) !== -1) {
            transcript.grades[transcript.grades.findIndex((g) => g.course === course)] = courseGrade
        } else {
            transcript.grades.push(courseGrade)
        }
    }

    getGrade (id: Student, course: Course) : CourseGrade {
        throw new Error("not implemented yet") 
    }

    getAllStudentIDs () : StudentID[] {
        throw new Error("not implemented yet") 
    }
    
    
}
    