import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Modal} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const AllCategories = () => {
    const Navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const [show,setShow]= useState(false);
    const handle_close=()=>setShow(false);
    const handle_show=()=>setShow(true);
    const getAllArticle = async () => {
        try {
            const res = await axios.get('http://localhost:3002/api/article/articles');
            console.log(res.data);
            const data = await res.data;
            setArticle(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getAllArticle();
    }, [])

    return (
        <div className='container' style={{width:'500px',height:'500px',padding:15}}>
        <h3 style={{color:"#00A3A3",fontFamily:"Arial"}}></h3>
        <div className="row row-cols-1 row-cols-md-4 g-6 my-2" > 
          {article?.map((art) => {
            return (
                <div style={{color:"#000",fontFamily:"Arial",width:'500px',height:'100px'}}>
                <div className="col my-2 " key={art._id}>
                 <div className="card" >
                 <ul className="list-group list-group-flush" style={{margin:10,padding:10,width:'500px',height:'100px',background:'#ffffe0',padding:'10px',border:'1px'}}>
                    <li className="list-group-item">
                        {art._id}  <br />
                        {art.Title} <br />
                        {art.content} <br/>
                      </li>
                   </ul>
                </div>
                </div>
                </div>
               )})}
            </div>
        </div>

    );
}
export default AllCategories;



