import React from 'react';
import { Link } from 'react-router-dom';
import Errorimg from '../asset/images/error.png'
const Error = () => {
  return (
    //Error Page route *
    <div>
        <center><img src={Errorimg} width={500} height={500}/></center>
        <Link to = "/">Back to Home</Link>
    </div>
  );
  }
export default Error;