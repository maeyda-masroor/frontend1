import React, { useState ,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
function DetailsCategory(){
    const {id} = useParams();
    const Navigate = useNavigate();
    const [data,setData]=useState([]);
    const getCategoryDetails=(id)=>{
    console.log(id);
    axios.get(`http://localhost:3002/api/category/read/${id}/`).then(res=>{
     console.log(res.data);
     setData(res.data);
    }).catch(err=>{
    console.log(err);
    });
    }
    useEffect(() => {
    getCategoryDetails(id);
    }, [])
    return (<div className='container'>
    <h3 style={{color:"#00A3A3",fontFamily:"Arial"}}> Category Detail</h3>
    <div className="row row-cols-1 row-cols-md-4 g-6 my-2"> 
        <div style={{width:100,height:50,color:'#00A3A3'}}>
            <strong> {data._id} </strong> <br />
            <strong> {data.title} </strong> <br />
            <strong> {data.content} </strong>
        </div>
    </div>
    </div>
);
}



export default DetailsCategory;