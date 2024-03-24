import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';


const EmployeeSignup = () => {

    const [newUser, setNewUser] = useState({});
    const [confirmPassword, setConfirmPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:3002/api/Employee/employee_signup', newUser);
            const authToken = response.data.authToken;
            const userId = response.data.user._id;
            console.log(response.data)
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <h3 className='mt-3 text-center'>Signup Form </h3>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit} className='row my-3 shadow p-3 mb-5 bg-body rounded' style={{ width: "38%" }} >

                    <div>
                        <input type="email" className="form-control my-3" id="email" name="email" placeholder='Email' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" className="form-control my-3" id="password" name="password" placeholder='Password' onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary my-2 w-100">Signup</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EmployeeSignup;




