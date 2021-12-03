import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom"
import { toast } from 'react-toastify';

const AddContact = () => {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && contact);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number));

        if(!name || !email || !number)
        {
            return toast.warning("Please fill in all fields!")
        }

        if(checkEmail)
        {
            return toast.error("This email already exist!")
        }

        if(checkNumber)
        {
            return toast.error("This number already exist!")
        }

        const data = {

            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

        dispatch({type:"ADD_CONTACT", payload:data});
        toast.success("Student Added Successfully!");
        history.push("/")

    }
    return (
            <div className="container">
                <h1 className="display-3 text-center my-5">
                    Add Contact
                </h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" >
                            <input 
                            type="text"
                            placeholder="Name"
                            className="form-control" 
                            value={name} 
                            onChange={e=> setName(e.target.value)}/>
                        </div>
                        <div className="form-group my-2">
                            <input 
                            type="email" 
                            placeholder="Email" 
                            className="form-control"
                            value={email} 
                            onChange={e=> setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input 
                            type="number" 
                            placeholder="Phone Number" 
                            className="form-control"
                            value={number} 
                            onChange={e=> setNumber(e.target.value)} />
                        </div>
                        <div className="form-group my-2">
                            <input 
                            type="submit" 
                            placeholder="Add Student" 
                            className="btn btn-block btn-dark" />
                        </div>
                   
                   </form>
                </div>
            </div>  
        </div>
    )
}

export default AddContact
