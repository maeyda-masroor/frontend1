import React from 'react';
import styled from 'styled-components';

const SubheaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:100px;
  padding:10px;
`;

const Heading = styled.h2`
  font-size: 45px;
  margin-bottom: 8px;
  color:blue;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color:darkblue;
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

const Section1 = () => {
  return (
    <SubheaderContainer>
      <Heading>Explore popular job categories.
      </Heading>
      <Paragraph>
      Find your next job in the field you love. We have thousands of 
      jobs in the most popular job categories.
       Click on a category below to start exploring jobs that match 
       your skills.
      </Paragraph>
      </SubheaderContainer>
  );
};

export default Section1;
