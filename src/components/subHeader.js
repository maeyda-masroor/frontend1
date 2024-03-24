import React from 'react';
import styled from 'styled-components';

// Styled components
const SubheaderContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  width:100%;
  height:300px;
`;

const SubheaderHeading = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const SubheaderParagraph = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
  color: #666;
`;

// Subheader component
const Subheader = () => {
  return (
    <SubheaderContainer>
      <SubheaderHeading>Remote jobs for Digital Working Nomads.<br/>
Work remotely from your home or places around the world.</SubheaderHeading>
      <SubheaderParagraph>
        We have the perfect 100% remote job opportunities for those looking
        <br/> to start their telecommuting career.
      </SubheaderParagraph>
    </SubheaderContainer>
  );
};

export default Subheader;
