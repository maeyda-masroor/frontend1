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

const PostJob = () => {
  const [postjob, setpostjob] = useState({
    job_title: '',
    category: '',
    position:'',
    location: '',
    salary_range:'',
    description:'',
    company_name: '',
    url_of_your_job_posting: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpostjob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const AddNewjob ={
      job_title:postjob.job_title,
      category:postjob.category,
      position_type:postjob.position_type,
      location:postjob.location,
      salary_range:postjob.salary_range,
      description:postjob.description,
      company_name:postjob.company_name,
      url_of_your_job_posting:postjob.url_of_your_job_posting,
      how_to_apply:postjob.how_to_apply,
    }
    try {
      await axios.post("http://localhost:3002/api/job/create", AddNewjob);
      
    } catch (error) {
      console.log("Something went wrong", "error");
      }
  };


  return (
    <div style={{width:'100%'}}>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label>Job Title</Label>
        <input
          type="text" style={{width:'100%',height:'50px'}}
          name="job_title"
          value={postjob.job_title}
          onChange={handleChange}
        />

        <Label>Job Categories</Label>
        <Select
          name="category"
          value={postjob.category}
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

        <Label>Position type</Label>
        <Select
          name="position"
          value={postjob.position}
          onChange={handleChange}
        >
          <Option value="">Select category</Option>
          <Option value="Freelance/Contract">Freelance/Contract</Option>
          <Option value="parttime">partime</Option>
          <Option value="fulltime">fulltime</Option>
        </Select>

        <Label>location</Label>
        <input style={{width:'100%',height:'50px'}}
          type="text"
          name="location"
          value={PostJob.location}
          onChange={handleChange}
        />

        <Label>Salary Range</Label>
        <input style={{width:'100%',height:'50px'}}
          type="text"
          name="salary_range"
          value={PostJob.salary_range}
          onChange={handleChange}
        />
        <Label>Description</Label>
        <input style={{width:'100%',height:'200px'}}
          type="textarea"
          name="description"
          value={PostJob.description}
          onChange={handleChange}
        />
        <Label>Company Name</Label>
        <input 
          type="text"
          name="company_name" style={{width:'100%',height:'50px'}}
          value={PostJob.company_name}
          onChange={handleChange}
        />
        <Label>url_of_your_job_posting</Label>
        <input 
          type="text"
          name="url_of_your_job_posting" style={{width:'100%',height:'50px'}}
          value={PostJob.url_of_your_job_posting}
          onChange={handleChange}
        />
        <Label>HOw to Apply</Label>
        <input 
          type="text"
          name="how_to_apply" style={{width:'100%',height:'50px'}}
          value={postjob.how_to_apply}
          onChange={handleChange}
        />
        <br/>
        <br/>
        {/* Add more form fields as needed */}

        <Button type="submit">Post Job</Button>
      </form>
    </FormContainer>
    </div>
  );

  }
export default PostJob;
