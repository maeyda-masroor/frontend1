import React, { useState,useEffect} from 'react'
import  { Link,useNavigate,useParams} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
export default function Update_Categoy(){
    
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
    const {id} = useParams();
    const [inputdata,setInputData]  = useState({
        title:'',
        content:''
    })
    const navigation = useNavigate();
    const getCategoriesByID=(id)=>{
        axios.get(`http://localhost:3002/api/category/categories/${id}/`).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        });
    }
    useEffect(() => {
    getCategoriesByID(id);
    }, [])
    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputdata.content+'c'); 
    const res = axios.put(`http://localhost:3002/api/category/update/${id}/`,inputdata).then(res=>{
    console.log(res.data);
            navigation('/');
    }).catch(err=>{
        console.log(err);
    });
    }
  return ( 
    <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
        <h3>Update Categoy</h3>
        <div className='form-container'>
        <div>
        <label htmlFor='name'>title</label>
        <input type='text' required name='title' value={inputdata.title}   onChange={e=>setInputData({...inputdata,title:e.target.value})} className='input' placeholder='Enter your Title'/>
        </div>
        <div>
        <label htmlFor='name'>content</label>
        <input type='text' required name='content' value={inputdata.content} onChange={e=>setInputData({...inputdata,content:e.target.value})} className='input' placeholder='Enter your Content'/>
        </div>
        <div>
        </div>
        <button type="submit" className='button'>Submit</button>
        <Link to="/" className='btn btn-danger'>Back</Link>
        </div>
        </form>
        </Wrapper>
     
                                    
  )
  }