import { getDocs, addDoc, updateDoc, getDoc, deleteDoc, collection, query, onSnapshot, doc } from 'firebase/firestore';

export default class FirebaseStudentService {
    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'students'))
        .then(
            (querySnapshot)=> {
                let students = [];
                querySnapshot.forEach(
                    (document) => {
                        students.push(
                            {
                                _id: document.id,
                                name: document.data().name,
                                course: document.data().course,
                                ira: document.data().ira
                            }
                        )
                    }
                )
                callback(students);
            }
        )
        .catch(error => console.log(error))
    }

    static list_onSnapshot = (firestore, callback) => {
        const q = query(collection(firestore, 'students'))
        onSnapshot(
            q,
            (querySnapshot) => {
                let students = [];
                querySnapshot.forEach(
                    (document) => {
                        students.push(
                            {
                                _id: document.id,
                                name: document.data().name,
                                course: document.data().course,
                                ira: document.data().ira
                            }
                        )
                    }
                )
                callback(students)
            }
        )
    }

    static create = (firestore, callback, student) => {
        const coll = collection(firestore, 'students')
        addDoc(coll, student)
        .then(
            (document) => {
                callback();
            }
        )
        .catch(error => console.log(error));
    }

    static retrieve = (firestore, callback, _id) => {
        const documentRef = doc(firestore, 'students', _id)
        getDoc(documentRef)
        .then(
            (documentSnap) => {
                callback(documentSnap.data())
            }
        )
        .catch(error => console.log(error))
    }

    static update = (firestore, callback, _id, student) => {
        const documentRef = doc(firestore, 'students', _id)
        updateDoc(documentRef, student)
        .then(
            () => {
                callback()
            }
        )
        .catch(error=>console.log(error))
    }

    static delete = (firestore, callback, _id) => {
        const documentRef = doc(firestore, 'students', _id)
        deleteDoc(documentRef)
        .then(() => callback())
        .catch(error => console.log(error))
    }
}