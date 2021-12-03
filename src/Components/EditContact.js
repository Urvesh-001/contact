import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { useState } from 'react';
import { Link,useParams } from 'react-router-dom'
import {useHistory} from "react-router-dom"
import { toast } from 'react-toastify';

const EditContact = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");
    const {id} = useParams();

    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(()=>{

        if(currentContact)
        {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }

    },[currentContact]);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const checkEmail = contacts.find((contact) =>contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number));

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

            id: parseInt(id),
            name,
            email,
            number
        }

        dispatch({type:"UPDATE_CONTACT", payload:data});
        toast.success("Student Updated Successfully!");
        history.push("/")

    }

    

    return (
             <div className="container">
                 {currentContact?(
                     <><h1 className="display-3 my-5 text-center">Edit Contact</h1>
                     <div className="row">
                         <div className="col-md-6 shadow mx-auto p-5">
                             <form onSubmit = {handleSubmit}>
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
                                        onChange={e=> setEmail(e.target.value)}/>
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
                                         value="Update Student" 
                                         className="btn  btn-dark" />
                              
                                 </div>
                                 <Link 
                                     to="/" 
                                     className="btn  btn-danger ml-3"
                                 >Cancel</Link>
                         
                             </form>
                         </div>
                     </div>
                     </>
                 ):(<h1 className="display-3 my-5 text-center">StudentContact with id {id} not exists</h1>)}
                    
                </div>)}

export default EditContact
