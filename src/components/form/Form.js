import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"


const Form = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        await axios.post("http://localhost:3003/users", data);
        navigate("/");
    }
    return (
        <>

            <div className="container">
                <div className="wrapper">
                    <div className="form_title">
                        <h2>User Form</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" name="name"  {...register("name", { required: true })} />
                                    <small className="error_msg">{errors.name?.type === 'required' && "Name is required"}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputNumber">Mobile No.</label>
                                    <input type="number" className="form-control" id="exampleInputNumber" name="phone"  {...register("phone", { required: true })} />
                                    <small className="error_msg">{errors.name?.type === 'required' && "Mobile number is required"}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" {...register("email", { required: true })} />
                                    <small className="error_msg">{errors.name?.type === 'required' && "Email is required"}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputDob">Date Of Birth</label>
                                    <input type='date' className="date_of_borth" id="exampleInputDob" name='dob'  {...register("dob", { required: true })} />
                                    <small className="error_msg">{errors.name?.type === 'required' && "Date of birth is required"}</small>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Address</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="address" rows="3" {...register("address", { required: true })}></textarea>
                                    <small className="error_msg">{errors.name?.type === 'required' && "Address is required"}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="inputCity">Job Location</label>
                                    <input type="text" className="form-control" id="inputCity" name="location"  {...register("location", { required: true })} />
                                    <small className="error_msg">{errors.name?.type === 'required' && "Job location is required"}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="inputDesi">Designation</label>
                                    <input type="description" className="form-control" id="inputDesi" name="desi"  {...register("desi", { required: true })} />
                                    <small className="error_msg">{errors.name?.type === 'required' && "Designation is required"}</small>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn add_btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;