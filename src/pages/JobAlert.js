import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding:45px;
  /* Add more styling as needed */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  width:100%;
  padding:10px;


  /* Add more styling as needed */
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  /* Add more styling as needed */
`;

const Option = styled.option`
  /* Add more styling as needed */
`;

const Button = styled.button`
  padding: 10px 20px;
  /* Add more styling as needed */
`;

const JobAlert = () => {
  const [JobAlert, setJobAlert] = useState({
    contact_info: '',
    Email: '',
    JobCategories: '',
    email_frequency: '',
    locations: '',
    position_type: '',
    keyword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobAlert((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const newJobAlert ={
      contact_info:JobAlert.contact_info,
      Email:JobAlert.Email,
      JobCategories:JobAlert.JobCategories,
      email_frequency:JobAlert.email_frequency,
      locations:JobAlert.locations,
      position_type:JobAlert.position_type,
      keyword:JobAlert.keyword
    }
    try {
      await axios.post("http://localhost:3002/api/job_Alert/create_job_alert", newJobAlert);
      
    } catch (error) {
      console.log("Something went wrong", "error");
      }
  };

  
  return (
    <div style={{width:'100%'}}>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label>Contact Info</Label>
        <input
          type="text" style={{width:'100%',height:'50px'}}
          name="contact_info"
          value={JobAlert.contact_info}
          onChange={handleChange}
        />

        <Label>Email Address</Label>
        <input style={{width:'100%',height:'50px'}}
          type="text"
          name="Email"
          value={JobAlert.Email}
          onChange={handleChange}
        />
        <Label>Job Categories</Label>
        <Select
          name="JobCategories"
          value={JobAlert.JobCategories}
          onChange={handleChange}
        >
          <Option value="">Select category</Option>
          <Option value="Development">Development</Option>
          <Option value="Customer_Service">Customer_Service</Option>
          <Option value="Marketing">Marketing</Option>
          <Option value="Design">Design</Option>
          <Option value="System_Administration">System_Administration</Option>
          <Option value="Customer_Service">Customer_Service</Option>
          <Option value="Sales">Sales</Option>
          <Option value="Health care">Health care</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Human resource">Human Resource</Option>
          <Option value="Writing">Writing</Option>
          <Option value="Legal">Legal</Option>
          <Option value="Administration">Adminstration</Option>
          <Option value="Consulting">Consulting</Option>
          <Option value="Marketing">Marketign</Option>
        </Select>

        <Label>Email Frequency</Label>
        <Select
          name="email_frequency"
          value={JobAlert.email_frequency}
          onChange={handleChange}
        >
          <Option value="">Select category</Option>
          <Option value="Weekly">Weekly</Option>
          <Option value="Yearly">Yearly</Option>
          <Option value="Monthly">Monthly</Option>
        </Select>

        <Label>Location</Label>

        <input style={{width:'100%',height:'50px'}}
          type="text"
          name="locations"
          value={JobAlert.locations}
          onChange={handleChange}
        />
        <Label>Position type</Label>
        <Select
          name="position_type"
          value={JobAlert.position_type}
          onChange={handleChange}
        >
          <Option value="">Select category</Option>
          <Option value="Freelance/Contract">Freelance/Contract</Option>
          <Option value="parttime">partime</Option>
          <Option value="fulltime">fulltime</Option>
        </Select>

        <Label>Keyword</Label>
        <input 
          type="text"
          name="keyword" style={{width:'100%',height:'50px'}}
          value={JobAlert.keyword}
          onChange={handleChange}
        />
        <br/>
        <br/>
        {/* Add more form fields as needed */}

        <Button type="submit">Subscribe</Button>
      </form>
    </FormContainer>
    </div>
  );
};

export default JobAlert;
