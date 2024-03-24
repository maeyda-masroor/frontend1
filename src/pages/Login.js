import React from 'react';
import { useState , useContext} from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import Logo from '../components/Logo'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/appContext';
import { Navigate } from 'react-router-dom';
import Navigationbar from '../components/navigationbar';
import Footer from '../components/footersection';
import axios from 'axios';
const initialState = {
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
h3{
  font-size:30px;
  font-family:Arial;
  color:#00A3A3;
}
.mem_btn{
  color:#00A3A3;
  border-radius:5px;
}
`
const Login= ()=>{
  const [user,setUser] = useState({
    name:"",
    email:'',
    password: "",
})
  const [values,setValues] = useState([]);
  const ctx = useContext(AuthContext); 
  const navigation = useNavigate();
  const {authTokenStore} = ctx;
 
  const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
  const onChnage=async(e)=>{
    e.preventDefault();
      let res = axios.post("http://localhost:3002/api/Employee/login",user)
      .then(result=>{console.log(result)
      navigation('/');
      }).catch(err=>console.log(err))
  
      };

  return (
  <Wrapper className='full-page'>
    <section>
    <form className = "form_container" onSubmit={onChnage}> 
        <center><Logo/></center>
        <center><h3>Login</h3></center>
         {/*name feild*/}
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' value={user.email} onChange={handleChange} className='input'required/>
        <label htmlFor='password'>Pasword:</label>
        <input type='password' name='password' value={user.password} onChange={handleChange} className='input' required/>
        <button type="submit" className='button' onClick={onChnage}>Submit</button>
        
        <p>Not  A member Yet ? <Link to ='/register'><button type='button' className='mem_btn'>Register</button></Link></p>
    </form>
    </section>
 </Wrapper>
  ); 
}
export default Login;