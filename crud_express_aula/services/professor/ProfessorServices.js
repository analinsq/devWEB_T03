const ProfessorModel = require('../../models/professor/ProfessorModel')

let professor = [

    {_id:0, name:"Jefferson", university: "UFC", degree:"Graduado"},
    {_id:1, name:"Aragas", university: "UFC", degree:"Graduado"},
    {_id:2, name:"Rainara", university: "UFC", degree:"Graduado"},
    {_id:3, name:"Lana", university: "UFC", degree:"Graduado"}
]

let _id = 4

class ProfessorServiceslet {

    static create(data) {
        let professor = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree);
        professor.push(professor);
        return professor;
    }

    static update(_id, data) {
        for (let s of professor) {
            if (s._id == _id) {
                s.name = data.name
                s.university = data.university
                s.degree = data.degree
                return s;
            }
        }
        return null;
    }

    static delete(_id) {

        for (let i = 0; i < professor.length; i++) {
            if (professor[i]._id == _id) {
                professor.splice(i, 1);
                return true;
            }
        }
        return s;
    }

    static retrieve(_id) {

        for (let i = 0; i < professor.length; i++) {
            if (professor[i]._id == _id) {
                return professor[i];
            }
        }
        return {};
    }

    static list() {
        return professor
    }
}

module.exports = ProfessorServiceslet 

class ProfessorServices {

    static list() {

        return professor;
    }

    static create(data) {

        let professor = new ProfessorModel(_id++, data.name, data.university, data.degree)
        professor.push(professor)
        return professor;
    }

    static retrieve(_id) {

        for (let i = 0; i < professor.length; i++) {
            if (professor[i]._id == _id) {
                return professor[i];
            }
        }

        return {}
    }

    static update(_id, data) {

        for (let s of professor) {
            if (s._id == _id) {
                s.name = data.name
                s.university = data.university
                s.degree = data.degree
                return s;
            }
        }

        return null;
    }

    static delete(_id) {

        for (let i = 0; i < professor.length; i++) {
            if (professor[i]._id == _id) {
                professor.splice(i, 1)
                return true;
            }
        }

        return false;
    }

}

module.exports = ProfessorServices