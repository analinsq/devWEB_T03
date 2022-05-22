const ProfessorModel = require("../../models/professor/professor.model")

class StudentService {

    static create(req, res) {
        ProfessorModel.create(req.body)
            .then(
                (professor) => {
                    res.status(201).json(professor);
                }
            );
    }

    static retrieve(req, res) {
        ProfessorModel.findById(req.params.id)
        .then(
            (professor) => {
                res.status(200).json(professor);
            }
        );
    }

    static update(req, res) {
        ProfessorModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
            .then(
                (professor) => {
                    res.status(200).json(professor);
                }
            );
    }

    static delete(req, res) {
        ProfessorModel.findByIdAndRemove(req.params.id)
            .then(
                (professor) => {
                    res.status(200).json(professor);
                }
            );
    }

    static list(req, res) {
        ProfessorModel.find()
            .then(
                (students) => {
                    res.status(200).json(students);
                }
            );
    }

}

module.exports = StudentService