import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentTableRow from "./StudentTableRow";
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseService from "../../../services/student/FirebaseStudentServices";
import RestrictPage from "../../../utils/RestrictPage";

const ListStudentPage = ({ setShowToast, setToast }) =>
    <FirebaseContext.Consumer>
        {
            (firebase) => {
                return (
                    <RestrictPage isLogged={firebase.getUser() != null}>
                        <ListStudent
                            firebase={firebase}
                            setShowToast={setShowToast}
                            setToast={setToast} />
                    </RestrictPage>
                )
            }
        }
    </FirebaseContext.Consumer>

function ListStudent(props) {

    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {

            setLoading(true)
            FirebaseService.list(
                props.firebase.getFirestoreDb(),
                (students) => {
                    setLoading(false)
                    setStudents(students)
                }
            )
        }
        ,
        [props.firebase]
    )

    function deleteStudentById(_id) {
        let studentsTemp = students
        for (let i = 0; i < studentsTemp.length; i++)
            if (studentsTemp[i]._id === _id)
                studentsTemp.splice(i, 1)

        setStudents([...studentsTemp])
    }

    function renderTable() {
        if (loading) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 100
                }}>
                    <div className="spinner-border"
                        style={{ width: '3rem', height: '3rem' }}
                        role="status" />
                    Carregando...
                </div>
            )
        }
        return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>IRA</th>
                    <th colSpan={2} style={{ textAlign: "center" }}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {generateTable()}
            </tbody>
        </table>
        )
    }

    function generateTable() {

        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow
                    student={student}
                    key={i}
                    deleteStudentById={deleteStudentById}
                    firestore={props.firebase.getFirestoreDb()}
                    setShowToast={props.setShowToast}
                    setToast={props.setToast}
                />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Estudantes
                </h2>
                {renderTable()}
            </main>
            <nav>
                <Link to="/" class="btn btn-outline-success">Home</Link>
            </nav>

        </>
    );
}

export default ListStudentPage