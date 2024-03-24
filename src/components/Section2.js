import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:100px;
  padding:100px;
`;

const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 16px;
`;

const Section2 = ({ heading, items }) => {
  return (
    <ListContainer>
      <Heading>{heading}</Heading>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

export default Section2;
