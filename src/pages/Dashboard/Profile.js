import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Wrapper = styled.main`
 section{
  height: 100vh;
}
label{
  color:#00A3A3;
  float: left;
}
/* Style the form container */
.form-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  width: 700px;
  height: 250px;
}

/* Style the form inputs */
.input {
  width: 100%;
  padding: 2px 2px;
  margin: 2px 0;
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
const initialState = {
  name:'',
  email:'',
  lastname:'',
  location:'',
};
const Profile = () => {
  const [userData,setUserData] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [lastname, setLastname] = useState('');
  const handleSubmit =async(e)=>{
    try {
          await axios.post('http://localhost:3002/api/profile/', { name, email , lastname,location });
    
      // Handle successful form submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
    e.preventDefault();
  };
  const handleChange=(e)=>{
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(e.target.value);

  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
      <h3>Profile</h3>
      <div className='form-container'>
        <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' required name='name' onChange={(e) => setName(e.target.value)} className='input' placeholder='Enter your name'/>
        </div>
        <div>
        <label htmlFor='name'>Email:</label>
        <input type='text' required name='email' onChange={(e) => setEmail(e.target.value)} className='input' placeholder='Enter your name'/>
        </div>
        <div>
        <label htmlFor='name'>Last name:</label>
        <input type='text' required name='lastname' onChange={(e) => setLastname(e.target.value)} className='input' placeholder='Enter your name'/>
        </div><div>
        <label htmlFor='name'>Location:</label>
        <input type='text' required name='location' onChange={(e) => setLocation(e.target.value)}className='input' placeholder='Enter your name'/>
        </div>
        <button type="submit" className='button'>Submit</button>
      </div>
      </form>
    </Wrapper>
  );
  }
export default Profile;