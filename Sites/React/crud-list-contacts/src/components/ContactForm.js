import React, {useState, useEffect} from 'react';
import firebaseDb from "../firebase";

const ContactForm = (props) => {

    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        if (props.currentId === '')
            setValues({
                ...initialFieldValues
            })
        else {
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.contactObjects])

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <form autoComplete='off' onSubmit={handleFormSubmit}>

            <div className="form-group input-group flex-nowrap col-md-12">
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                    <input type="text" className="form-control" placeholder={'Full Name'} name={'fullName'}
                           value={values.fullName}
                           onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-row d-flex">

                <div className="form-group col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fas fa-mobile-alt"></i></span>
                        <input type="text" className="form-control" placeholder='Mobile' name='mobile'
                               value={values.mobile}
                               onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <input type="text" className="form-control" placeholder='Email' name='email'
                               value={values.email}
                               onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                    <textarea className="form-control" placeholder='Address' name='address' value={values.address}
                              onChange={handleInputChange}
                    />
            </div>

            {/*<div className="form-control">*/}
            <input type="submit" value={props.currentId === '' ? 'Save' : 'Update'}
                   className='btn btn-primary btn-block'/>
            {/*</div>*/}
        </form>
    );
};

export default ContactForm;