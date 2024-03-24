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
const Sponsorship = () => {
  return (
    <SubheaderContainer>
      <SubheaderHeading>
      Newsletter sponsorship
      </SubheaderHeading>
      <SubheaderParagraph>
      Are you looking to reach a wide audience of remote work seekers? 
      Working Nomads offers an incredible opportunity to promote your business through our job alert emails. Each issue is sent out every Thursday to 52,000+ subscribers, with an open rate of 30%.
      Your sponsorship will appear at the top of each newsletter
       and will include a text and image, along with a link to your website or the product page. The price for the advertisement per issue is $500.
      Take a look at the sample issue of our job alert newsletter to get an idea of what your sponsorship could look like. Secure your slot by sending us a message at hello@workingnomads.com. We look forward to helping you reach your target audience and grow your business!

        <br/>
      </SubheaderParagraph>
    </SubheaderContainer>
  );
};

export default Sponsorship;