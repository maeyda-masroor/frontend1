import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1c1c1c;
  padding: 16px;
`;

const Logo = styled.img`
  width: 50px;
  height:50px;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 16px;

`;

const Button = styled.button`
  padding: 8px 16px;
  background-color:#00a3a3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Heading1 = styled.h1`
  font-size:24px;
  color:#fff;

`

function navigationbar() {
  return (
    <NavbarContainer>
      <div>
      <Link to ='/companies'><Logo src="logo.png" alt="Logo" width={100} height={50}/></Link>
      </div>
      <div>
      <Heading1>Working Nomand</Heading1>
      </div>
      <div>
        <Link to = '/job_alert'><NavItem href="#">Job Alert</NavItem></Link>
        <Link to ='/articles'><NavItem href="#">Article</NavItem></Link>
        <Link to ='/about'><NavItem href="#">About</NavItem></Link>
      </div>
      <div>
        <Link to ='/post_job'><Button>Post A Job </Button></Link>
        <Link to='/register'><NavItem href="#">Sign up</NavItem></Link>
        <Link to ='/login'><NavItem href="#">Sign in </NavItem></Link>
      </div>
    </NavbarContainer>
  );
};

export default navigationbar;
