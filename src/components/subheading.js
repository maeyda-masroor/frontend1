import React from 'react';
import styled from 'styled-components';

const SubheaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  margin:100px;
`;

const Heading = styled.h2`
  font-size: 45px;
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color:#ff2c2c
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
  width:175px;
  height:50px;
`;

const subheading = () => {
  return (
    <SubheaderContainer>
      <Heading>Free data on startups, job 
        listings and funding rounds
      </Heading>
      <Paragraph>
      Employbl harvests data from the public web to help you 
      secure a tech job
      </Paragraph>
      <ButtonContainer>
        <Button style={{background:'#ff2c2c'}}>Feature My Company</Button>
        <Button style={{backgorund:'#fff'}}>Create Candidate Profile</Button>
      </ButtonContainer>
    </SubheaderContainer>
  );
};

export default subheading;
