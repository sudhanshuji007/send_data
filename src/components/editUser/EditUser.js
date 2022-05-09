import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom"


const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        dob: "",
        address: "",
        location: "",
        desi: ""
    });

    const { name, phone, email, dob, address, location, desi } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`, user);
        navigate("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <>

            <div className="container">
                <div className="wrapper">
                    <div className="form_title">
                        <h2>Edit User</h2>
                    </div>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" name="name" value={name} onChange={e => onInputChange(e)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputNumber">Mobile No.</label>
                                    <input type="number" className="form-control" id="exampleInputNumber" name="phone" value={phone} onChange={e => onInputChange(e)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange={e => onInputChange(e)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputDob">Date Of Birth</label>
                                    <input type='date' className="date_of_borth" id="exampleInputDob" name='dob' value={dob} onChange={e => onInputChange(e)} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Address</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="address" rows="3" value={address} onChange={e => onInputChange(e)} ></textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="inputCity">Job Location</label>
                                    <input type="text" className="form-control" id="inputCity" name="location" value={location} onChange={e => onInputChange(e)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="inputDesi">Designation</label>
                                    <input type="description" className="form-control" id="inputDesi" name="desi" value={desi} onChange={e => onInputChange(e)} />
                                </div>
                            </div>
                        </div>
                        <Link type="submit" to="/" className="btn btn-warning update_usr">Update User</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditUser;