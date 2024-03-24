import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Example grid layout with 3 columns
  grid-gap: 10px; // Optional gap between grid items
`;
const Company = () => {
    return (
      <GridContainer>
        {/* Grid items */}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </GridContainer>
    );
  };

export default Company;