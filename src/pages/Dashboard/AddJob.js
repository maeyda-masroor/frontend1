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
  height: 500px;
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
const AddJob = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');

  const [jobData,setJobData] = useState([])
  const [newjob, setNewjob] = useState([]);
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:3002/api/job', newjob,{headers:{
            'Access-Control-Allow-Origin':'*',
        }
        });
        const data = res.data;            
        setJobData([...jobData, data])
    } catch (error) {
        console.error(error);
    }
    e.preventDefault();
  };
  const handleChange=(e)=>{
    setNewjob({ ...newjob, [e.target.name]: e.target.value });
    console.log(e.target.value);

  }
  
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
      <h3>Add Job</h3>
      <div className='form-container'>
        <div>
        <label htmlFor='name'>Job Title:</label>
        <input type='text' required name='name' onChange={handleChange} className='input' placeholder='Enter your name'/>
        </div>
        <div>
        <label htmlFor='name'>Job Tpye:</label>
        <br/>
        <select className="form-select" aria-label="Default select example" name="Job_Type" onChange={handleChange}>
                <option defaultValue>select Job Category</option>
                <option value="Development">Development</option>
                <option value="Customer_Service">Customer Service</option>
                <option value="Marketing">Marketing </option>
                <option value="Management">Management </option>
                <option value="Design">Design</option>
                <option value="System_Administration">System Administration</option>
                <option value="Sale">Sales</option>
                <option value="Healthcare">HealthCare</option>
                <option value="Finance">Finance</option>
                <option value="Writing">Writing </option>
                <option value="Legal">Legal </option>
                <option value="Adminsitration">Administration</option>
                <option value="Consulting">Consulting</option>
        </select>
        </div>
        <div>
        <label htmlFor='name'>Job Category</label>
        <br/>
        <select className="form-select" aria-label="Default select example" name="Job_Category" onChange={handleChange}>
                <option defaultValue>Select Job Category</option>
                <option value="Fulltime">Fulltime</option>
                <option value="Freelancing">Freelancing</option>
                <option value="Fulltime">Fulltime</option>

        </select>
        </div>
        <div>
        <label htmlFor='candidate'>Candiadate Location</label>
        <input type='text' required name='Candidate_Location'  onChange={handleChange} className='input' placeholder='Enter Candidate Location '/>
        </div>
        <div>
        <label htmlFor='salary_range'>Salary Ranage</label>
        <input type='text' required name='Salary_Range' onChange={handleChange} className='input' placeholder='Enter your Salary Range'/>
        </div><div>
        <label htmlFor='name'>Description</label>
        <input type='text' required name='Description'  onChange={handleChange} className='input' placeholder='Enter your name'/>
        </div>
        <div>
        <label htmlFor='name'>Your email</label>
        <input type='text' required name='Email'  onChange={handleChange} className='input' placeholder='Enter your name'/>
        </div>
        <button type="submit" className='button'>Submit</button>
      </div>
      </form>
    </Wrapper>
  );
  }  
export default AddJob;