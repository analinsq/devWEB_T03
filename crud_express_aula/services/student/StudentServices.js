const StudentModel = require('../../models/student/StudentModel')

let students = [

    {_id:0, name:"Ana", course: "SI", ira:8.7},
    {_id:1, name:"Aragas", course: "CC", ira:4.5},
    {_id:2, name:"Yuri", course: "DD", ira:8.0},
    {_id:3, name:"Tom", course: "ES", ira:5.8}
]

let _id = 4

class StudentService {

    static create(data) {
        let student = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira);
        students.push(student);
        return student;
    }

    static update(_id, data) {
        for (let s of students) {
            if (s._id == _id) {
                s.name = data.name
                s.course = data.course
                s.ira = data.ira
                return s;
            }
        }
        return null;
    }

    static delete(_id) {

        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1);
                return true;
            }
        }
        return s;
    }

    static retrieve(_id) {

        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i];
            }
        }
        return {};
    }

    static list() {
        return students
    }
}
       

   


module.exports = StudentServicelet 

class StudentService {

    static list() {

        return students;
    }

    static create(data) {

        let student = new StudentModel(_id++, data.name, data.course, data.ira)
        students.push(student)
        return student;
    }

    static retrieve(_id) {

        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i];
            }
        }

        return {}
    }

    static update(_id, data) {

        for (let s of students) {
            if (s._id == _id) {
                s.name = data.name
                s.course = data.course
                s.ira = data.ira
                return s;
            }
        }

        return null;
    }

    static delete(_id) {

        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1)
                return true;
            }
        }

        return false;
    }

}

module.exports = StudentService