import React from 'react';
import { useState , useContext} from 'react';
import styled from 'styled-components'
import Logo from '../components/Logo'
import {toast} from 'react-toastify';
import AuthContext from '../context/appContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Footer from '../components/footersection';
import Navigationbar from '../components/navigationbar';
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
};


const Wrapper = styled.main`
 section{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
label{
  color:#00A3A3;
  float: left;
}
/* Style the form container */
.form-container {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  width: 400px;
  height: 500px;
}

/* Style the form inputs */
.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}
/* Style the submit button */
.button {
  background-color:#00A3A3 ;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
}

/* Style the logo */
.logo {
  margin-bottom: 20px;
}

/* Style the link */
.form-container a {
  color: purple;
  text-decoration: none;
}
label{
  color:;
  float: left;
}
h4{
  font-size:25px;
  font-family:Arial;
  color:#000;
}
.mem_btn{
  color:#00A3A3;
  border-radius:5px;
}
`
const Register = ()=>{
  const [user,setUser] = useState({
    name:"",
    email:"",
    password: ""
})
  const ctx = useContext(AuthContext);
  const navigation = useNavigate();
  const { authTokenStore } = ctx;

  const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
  const onChange = ()=>{
    const {name,email,password} = user
    if (name && email && password){
     let res = axios.post("http://localhost:3002/api/Employee/employee_signup",user )
     .then(result=>{console.log(result)
         navigation('/');
     }).catch(err=>console.log(err))
     }
    else{
        alert("invalid input")
    };
 }
  return (
  <Wrapper className='full-page'>
    <section>
    <form className = "form_container" onSubmit={onChange}> 
        <center><h3>Welcome ,Fellow Nomand</h3></center>
         {/*name feild*/}
        <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' required name='name' value={user.name} onChange={handleChange} className='input' placeholder='Enter your name'/>
        </div>
        <div>
        <label htmlFor='email'>Email:</label>
        <input type='email' required name='email' value={user.email} onChange={handleChange} className='input' placeholder='Enter Your Email'/>
        </div>
        <div>
        <label htmlFor='password'>Pasword:</label>
        <input type='password' required name='password' value={user.password} onChange={handleChange} className='input'placeholder='Enter Your Password'/>
        </div>
        <button type="submit" className='button'>Submit</button>
        <p>Already a member?<Link to = "/login"><button type='button'className='mem_btn'>Login</button></Link></p>
    </form>
    </section>
    <footer>
    </footer>
 </Wrapper>
  ); 
}
export default Register;