import { getDocs, addDoc, updateDoc, getDoc, deleteDoc, collection, query, onSnapshot, doc } from 'firebase/firestore';

export default class FirebaseProfessorService {
    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'professors'))
        .then(
            (querySnapshot)=> {
                let professors = [];
                querySnapshot.forEach(
                    (document) => {
                        professors.push(
                            {
                                _id: document.id,
                                name: document.data().name,
                                university: document.data().university,
                                degree: document.data().degree
                            }
                        )
                    }
                )
                callback(professors);
            }
        )
        .catch(error => console.log(error))
    }

    static list_onSnapshot = (firestore, callback) => {
        const q = query(collection(firestore, 'professors'))
        onSnapshot(
            q,
            (querySnapshot) => {
                let professors = [];
                querySnapshot.forEach(
                    (document) => {
                        professors.push(
                            {
                                _id: document.id,
                                name: document.data().name,
                                university: document.data().university,
                                degree: document.data().degree
                            }
                        )
                    }
                )
                callback(professors)
            }
        )
    }

    static create = (firestore, callback, professor) => {
        const coll = collection(firestore, 'professors')
        addDoc(coll, professor)
        .then(
            (document) => {
                callback();
            }
        )
        .catch(error => console.log(error));
    }

    static retrieve = (firestore, callback, _id) => {
        const documentRef = doc(firestore, 'professors', _id)
        getDoc(documentRef)
        .then(
            (documentSnap) => {
                callback(documentSnap.data())
            }
        )
        .catch(error => console.log(error))
    }

    static update = (firestore, callback, _id, professor) => {
        const documentRef = doc(firestore, 'professors', _id)
        updateDoc(documentRef, professor)
        .then(
            () => {
                callback()
            }
        )
        .catch(error=>console.log(error))
    }

    static delete = (firestore, callback, _id) => {
        const documentRef = doc(firestore, 'professors', _id)
        deleteDoc(documentRef)
        .then(() => callback())
        .catch(error => console.log(error))
    }
}