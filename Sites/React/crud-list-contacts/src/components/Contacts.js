import React, {useState, useEffect} from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase"

const Contacts = () => {

    let [contactObjects, setContactObjects] = useState({})
    let [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})
        })
    }, [])

    const addOrEdit = obj => {
        if (currentId == '')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else firebaseDb.child(`contacts/${currentId}`).set(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            }
        )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record ?')) {
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3 jumbotron jumbotron-fluid">
                <div className="container-fluid py-5">
                    <h1 className="display-4 fw-bold text-center">Contact Register</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({addOrEdit, currentId, contactObjects})}/>
                </div>
                <div className="col-md-7">
                    <div>list of contacts</div>
                    <table className={'table table-borderless table-striped'}>
                        <thead className={'thead-light'}>
                        <tr>
                            <th>Full Name</th>
                            <th>mobile</th>
                            <th>email</th>
                            <th>actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(contactObjects).map(id => {
                                return <tr key={id}>
                                    <td>{contactObjects[id].fullName}</td>
                                    <td>{contactObjects[id].mobile}</td>
                                    <td>{contactObjects[id].email}</td>
                                    <td>
                                        <a className={'btn text-primary'}
                                           onClick={() => {
                                               setCurrentId(id)
                                           }}>
                                            <i className={'fas fa-pencil-alt'}></i>
                                        </a>
                                        <a className={'btn text-danger'}
                                           onClick={() => {
                                               onDelete(id)
                                           }}
                                        >
                                            <i className={'fas fa-trash-alt'}></i>
                                        </a>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default Contacts;