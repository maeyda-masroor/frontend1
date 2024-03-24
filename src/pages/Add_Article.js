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

const Add_Article = () => {
  const [AddArticle, setAddArticle] = useState({
    Title: '',
    Written_by: '',
    Title_of_Content: '',
    content: '',
    keyword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const AddNewArticle ={
      Title:AddArticle.Title,
      Written_by:AddArticle.Written_by,
      Title_of_Content:AddArticle.Title_of_Content,
      content:AddArticle.content,
      keyword:AddArticle.keyword,
    }
    try {
      await axios.post("http://localhost:3002/api/Article/create", AddNewArticle);
      
    } catch (error) {
      console.log("Something went wrong", "error");
      }
  };


  return (
    <div style={{width:'100%'}}>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label>Title</Label>
        <input
          type="text" style={{width:'100%',height:'50px'}}
          name="Title"
          value={AddArticle.Title}
          onChange={handleChange}
        />

        <Label>Written By</Label>
        <input style={{width:'100%',height:'50px'}}
          type="text"
          name="Written_by"
          value={AddArticle.Written_by}
          onChange={handleChange}
        />
        <Label>Title of The Article</Label>
        <input style={{width:'100%',height:'50px'}}
          type="text"
          name="Title_of_Content"
          value={AddArticle.Title_of_Content}
          onChange={handleChange}
        />
        <Label>Content</Label>
        <input style={{width:'100%',height:'200px'}}
          type="textarea"
          name="content"
          value={AddArticle.content}
          onChange={handleChange}
        />
        <Label>Keyword</Label>
        <input 
          type="text"
          name="keyword" style={{width:'100%',height:'50px'}}
          value={AddArticle.keyword}
          onChange={handleChange}
        />
        <br/>
        <br/>
        {/* Add more form fields as needed */}

        <Button type="submit">Add Article</Button>
      </form>
    </FormContainer>
    </div>
  );

  }
export default Add_Article;
