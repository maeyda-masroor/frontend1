import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Modal} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const AllCategories = () => {
    const Navigate = useNavigate();
    const [category, setCategory] = useState([]);
    const [show,setShow]= useState(false);
    const handle_close=()=>setShow(false);
    const handle_show=()=>setShow(true);
    const exportPdf = async (category) => {
        const doc = new jsPDF({ orientation: "landscape" });
        console.log(category.title);
        doc.text(`${category.title}` + `${category.content}`,100,100);
        doc.text(category.content,10,10);
        doc.save("category.pdf");
      };
    const getAllCategories = async () => {
        try {
            const res = await axios.get('http://localhost:3002/api/category/categories');
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
        getAllCategories();
    }, [])

    return (
            <div className='container'>
                <h3 style={{color:"#00A3A3",fontFamily:"Arial"}}> All Categories</h3>
                <div className="row row-cols-1 row-cols-md-4 g-6 my-2" > 
                  {category?.map((category) => {
                    return (
                        <div style={{color:"#00A3A3",fontFamily:"Arial"}}>
                        <div className="col my-2 " key={category._id}>
                         <div className="card" >
                         <ul className="list-group list-group-flush" style={{margin:10,padding:10}}>
                            <li className="list-group-item">
                                {category._id}  <br />
                                {category.title} <br />
                                {category.content} <br/>
                                <Link to ={`/update/${category._id}`}><Button onClick={()=>update_Category(category._id)} style={{background:"#00A3A3",color:"white"}}>Update</Button></Link>
                                <Button onClick={()=>delete_Category(category._id)} style={{background:"#00A3A3",color:"white"}}>Delete</Button>
                                <button onClick={()=>exportPdf(category)} style={{background:"#00A3A3",color:"white"}}>Generate Report</button>
                                <Link to ={`/read/${category._id}`}><Button style={{background:"#00A3A3",color:"white"}}>Read</Button></Link>
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



