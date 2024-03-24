import React , {useState} from "react";
import styled from "styled-components";
import axios from "axios";
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
function AddCompany(){

    const [input,setinput] = useState({
        name:'',
        url_of_job:'',
        how_to_apply:''
    })
    function handleChange(event){
        const {name , value}= event.target;
        setinput(preInput=>{
            return {...preInput ,
            [name]:value,
            }
        })
        console.log(event.target);
    }
    const handlesubmit = async(event)=>{
        event.preventDefault();
        const newCategory ={
          name:input.name,
          url_of_job:input.url_of_job,
          how_to_apply:input.how_to_apply,
        }
        try {
          await axios.post("http://localhost:3002/api/company/create", newCategory);
          
        } catch (error) {
          console.log("Something went wrong", "error");
          }
      };
    return (
        <Wrapper>
        <form className='form'>
        <h3>Add Company</h3>
        <div className='form-container'>
        <div>
        <label htmlFor='name'>name</label>
        <input type='text' required name='name' onChange={handleChange}  value={input.name}className='input' placeholder='Enter your title'/>
        </div>
        <div>
        <label htmlFor='name'>url of job</label>
        <input type='text' required name='url_of_job' onChange={handleChange} value={input.url_of_job}className='input' placeholder='Enter your Content'/>
        </div>
        <div>
        <label htmlFor='name'>how to apply</label>
        <input type='text' required name='how_to_apply' onChange={handleChange} value={input.how_to_apply} className='input' placeholder='Enter your Content'/>
        </div>
        <div>
        </div>
        <button type="submit" className='button' onClick={handlesubmit}>Submit</button>
        </div>
        </form>
        </Wrapper>
          );
    }
        export default AddCompany;