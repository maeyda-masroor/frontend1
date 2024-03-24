import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import { jsPDF } from 'jspdf';
import styled from 'styled-components';

//styled components used
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr); // Example grid layout with 2 rows
   // Example grid layout with 3 columns
  grid-gap: 10px; // Optional gap between grid items
`;
const Container = styled.div`
  display: flex;
  width:100%;
  height:1050px;
  background-color:#fff;
`;

const FirstDiv = styled.div`
  flex: 0.5;
  background-color: #fff;
  padding: 20px;

`;
const SecondDiv = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;
const SearchFilterDiv = styled.div`
  background-color: #fff;
  padding: 20px;
`;
const Advertisement = styled.div`
    background-color:;
    padding:20px;
    background-color:#00A3A3
`
const Heading = styled.h1`
  font-size:20px;
`
const Button = styled.button`
  font-size:25px;
  font-family:Arial;
  background-color:#00a3a3;
  border-radius:5px;

`
const Labels = styled.label`
  width:100%;
  height:50px;
  background-color:#d3d3d3;
`
const Tag = styled.button`
  font-size:15px;
  font-family:Arial;
  background-color:#d3d3d3;
  width:100px;
  height:25px;
  border-radius:25px;
`
const SearchButton = styled.button`
  width:200px;
  height:50px;
  background-color:#d3d3d3;
`
const All_Companies = () => {
   
    const [category, setCategory] = useState([]);
    const [show,setShow]= useState(false);
    const handle_show=()=>setShow(true);
    const getAllCompanies = async () => {
        try {
            const res = await axios.get('http://localhost:3002/api/company/companies');
            console.log(res.data);
            const data = await res.data;
            setCategory(data);
        } catch (error) {
            console.error(error);
        }
    };
    const delete_Category=(id)=>{
        console.log(id);
        axios.delete(`http://localhost:3002/api/category/delete/${id}/`).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }
    const update_Category=(category)=>{
        console.log(category);
        handle_show();

    }
    function GenerateReport(category){
        console.log(category.title);

    }
    useEffect(() => {
        getAllCompanies();
    }, [])

    return (
        <Container>
           <FirstDiv>
           <SearchFilterDiv>
        {/* Location input */}
        <div style={{background:'#d3d3d3', width:200 ,height:50}}>
        <Labels>Filters</Labels>
        </div>
        <br/>
        <div>
          <input type='search' style={{width:200,height:50}} placeholder='search For A remote job'/>
        </div>
        <br/>
        <label htmlFor="location">Location:</label>
        <br/>
        <select id="category" style={{width:200,height:50}}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          
        </select>
        <br/>
        <br/>
        {/* Category input */}
        <br/>
        <select id="category" style={{width:200,height:50}}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          
        </select>
        <br/>
        <br/>
        <select id="category" style={{width:200,height:50}}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option> 
        </select>
        <br/>
        <br/>
        {/* Category input */}
        <SearchButton>Search For a Job</SearchButton>
        <br/>
        <br/>

      </SearchFilterDiv>
      <Advertisement>
        <p>Place Your Advertisment Here</p>
      </Advertisement>
        </FirstDiv>
        <SecondDiv>
        <GridContainer>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-4 g-6 my-2"> 
                  {category.map((category) => {
                    return (
                        <div style={{color:"#000000",fontFamily:"Arial",background:'#FFFFE0',border:'solid',margin:10,borderRadius:25}}>
                        <div className="col my-2 " key={category._id}>
                         <div className="card" >
                         <ul className="list-group list-group-flush" style={{margin:10,padding:10}}>
                            <li className="list-group-item" style={{color:'#000000',fontFamily:'Arial'}}>
                                <div><Heading><strong>{category._id}</strong></Heading>
                                <Button onClick={()=>delete_Category(category._id)} style={{background:"#00a3a3",color:"white",float:'right'}}>Delete</Button>
                                <br/>
                                </div>
                                {category.name} <br />
                                {category.url_of_job}                                
                                {category.how_to_apply} <br/> <br/>
                                <Tag onClick={()=>delete_Category(category._id)} style={{background:"#d3d3d3",color:"white",float:'right'}}>Delete</Tag>
                                <Link to ={`/update/${category._id}`}><Tag onClick={()=>update_Category(category._id)} style={{background:"#d3d3d3",color:"white"}}>Update</Tag></Link>
                                <Tag onClick={()=>delete_Category(category._id)} style={{background:"#d3d3d3",color:"white"}}>Delete</Tag>
                                <Link to ={`/read/${category._id}`}><Tag style={{background:"#d3d3d3",color:"white"}}>Read</Tag></Link>
                            </li>
                           </ul>
                        </div>
                        </div>
                        </div>
                       )})}
                    </div>
                </div>
            </GridContainer>
         </SecondDiv>
        </Container>
            );
          };
          
export default All_Companies;
