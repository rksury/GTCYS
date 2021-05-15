// import db from '../firebase.config';
import React, {useState} from 'react';
import ContactForm from './ContactForm';
import Contactlist from "./ContactList";

import {validation} from './formCompnent/FormFunction';
import {addContact, deleteContact, updateContact} from '../action/index';
import {connect, useDispatch} from "react-redux";

const initialState = {
    allFieldsValidated: false
};



function View({user}) {
    const [success, setSuccess] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [newArr, setnewArr] = useState([])
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target
        setData({
            ...data,
            [name]: value

        })
    }

    const addData = (event) => {
        event.preventDefault()
        if (validation(error, setError, data, success, isSuccess)) {
            dispatch(addContact(data))
            setSuccess({...initialState, allFieldsValidated: true});
            setIsSuccess({...initialState, allFieldsValidated: true});
            showTimeOut();
            console.log("++++", data)
        }
    }
    const showTimeOut = () => {
        setTimeout(() => {
            setSuccess({...initialState,allFieldsValidated: false});
        }, 2000);
    }


    function handleUpdate(e, itemToBeUpdate) {
        e.preventDefault()
        user.filter((value, index) => {
            if (index === itemToBeUpdate) {
                setData(value)
            }
            if (index !== itemToBeUpdate) {
                newArr.push(value)
            }
        })
        dispatch(updateContact(newArr))
        setnewArr([])
    }

    function handleDelete(e, itemToBeDeleted) {
        e.preventDefault()
        user.filter((value, index) => {
            if (index !== itemToBeDeleted) {
                newArr.push(value)
            }
        })
        dispatch(deleteContact(newArr))
        setnewArr([])
    }

    return (
        <div className="container" id="container-two">
            <ContactForm data={data} error={error} handleChange={handleChange} addData={addData} success={success}/>
            <Contactlist data={data} handleUpdate={handleUpdate} handleDelete={handleDelete} isSuccess={isSuccess}/>
        </div>

    )
}

const mapStateToprops = (state) => (
    {user: state.contact.data}
)

export default connect(mapStateToprops)(View)
