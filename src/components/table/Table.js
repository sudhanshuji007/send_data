import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


const Table = () => {
    const [users, setUser] = useState([]);

    const lodUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    }
    useEffect(() => {
        lodUsers()
    }, []);
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        lodUsers()
    }
    return (
        <>
            <div className="container-fluid">
                <div className="table_title">
                    <h2>User Data</h2>
                    <Link className="add_user" to="/users/add">Add User</Link>
                </div>
            </div>
            <div className="form_table table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile No.</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Address</th>
                            <th scope="col">Job Location</th>
                            <th scope="col">Designation</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.address}</td>
                                        <td>{user.location}</td>
                                        <td>{user.desi}</td>
                                        <td>
                                            <Link to={`/users/edit/${user.id}`} className="btn btn-success mr-2">Edit</Link>
                                            <Link to="/" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>

    )
}

export default Table