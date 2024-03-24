import React from 'react';
import styled from 'styled-components';

const CompanyList = styled.div`
  display: flex;
  justify-content: space-between;
  margin:100px;
  padding:10px;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 10px;
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  margin-bottom: 5px;
  font-size:20px;
`;

const Location = styled.p`
  margin: 0;
  font-size:10px;
`;

const Section3 = () => {
  return (
    <CompanyList>
      <Company>
        <Logo><img src="logo1.png" alt="Company Logo 1" /></Logo>
        <CompanyDetails>
          <CompanyName>Company Name 1</CompanyName>
          
          <Location>Location 1</Location>
        </CompanyDetails>
      </Company>
      </CompanyList>
  );
};

export default Section3;
