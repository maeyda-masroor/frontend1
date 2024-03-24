import React from 'react';
import styled from 'styled-components';
import Navigationbar from '../components/navigationbar';
import Footer from '../components/footersection';
const Container = styled.div`
    margin:50px;
    padding:100px;

`
const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
`;

const About = () => {
  return (
    <div>
    <Container>
      <Heading>It's public data, why shouldn't it be easily accessible?</Heading>
      <Paragraph>
      Working Nomads has been helping companies and organizations find exceptional candidates for their remote job openings since 2014. 
      We curate lists of the most interesting remote job offers for professionals in many different career fields.

We are proud to have served hundreds of organizations over the years by finding the best-suited candidates for their job openings. These are a few of them:
      </Paragraph>
        </Container>
    
    </div>
  );
};

export default About;
