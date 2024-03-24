import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const FooterContainer = styled.footer`
  background-color: #000000;
  padding: 20px;
  padding:10px;
`;
const Heading = styled.h3`

   font-size:20px;

`
const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  color:#fff;
`;

const footersection = () => {
  return (
    <FooterContainer>
      <FooterList>
        <ListItem>
          <Heading>Working Nomand</Heading>
          <ul>
            <li>Post A job</li><br/>
            <Link to ='/sponsership'><li>Sponsership</li><br/></Link>
            <li>Subscribe</li><br/>
            <br/>
            <br/>
            <li>Job Skills</li><br/>
            <li>FAQ</li><br/>
            <li>API</li><br/>
            <li>Privacy Policy</li><br/>
            <li>Terms and COndition</li><br/>
            <li>Contact us</li><br/>
            <li>About us</li><br/>
            
          </ul>
        </ListItem>
        <ListItem>
          <Heading>Job by Category</Heading>
          <ul>
            <li>Remote Advertisment Job</li><br/>
            <li>Renmote Consulting Job</li><br/>
            <li>Remote Design job</li><br/>
            <li>Type script</li><br/>
            <li>Rmeote marketing job</li><br/>
            <li>Reactjs</li><br/>
            <li>Android</li><br/>
          </ul>
        </ListItem>
        <ListItem>
          <Heading>Job Location</Heading>
          <ul>
            <li>Pre Seed</li><br/>
            <li>Remote Job</li><br/>
            <li>San Francisco</li><br/>
            <li>Sea Settle</li><br/>
          </ul>
        </ListItem>
        <ListItem>
          <Heading>Popular Blog Post</Heading>
          <ul>
            <li>Silicon Valley</li><br/>
            <li>Software Companies in USA</li><br/>
            <li>Web 3 companies</li><br/>
          </ul>
        </ListItem>
        <ListItem>
          <Heading>Job type</Heading>
          <ul>
            <li>Sales jobs</li><br/>
            <li>Software Engineer</li><br/>
            <li>Marketing Job</li><br/>
            <li>Design Job</li><br/>
            <li>Product Manager</li><br/>
            <li>Data science</li><br/>
            <li>Customer Service</li><br/>
          </ul>
        </ListItem>
        <ListItem>
          <Heading>Companies</Heading>
          <ul>
            <li>Saas</li><br/>
            <li>Digital</li><br/>
            <li>Software</li><br/>
          </ul>
        </ListItem>
        <ListItem>
          <Heading>Company Head Quarters</Heading>
          <ul>
            <li>New York</li><br/>
            <li>San Francisco</li><br/>
            <li>Chicago</li><br/>
            <li>Austin</li><br/>
            <li>New York</li><br/>
          </ul>
        </ListItem>

      </FooterList>
    </FooterContainer>
  );
};

export default footersection;
