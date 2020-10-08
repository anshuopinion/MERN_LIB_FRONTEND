import React from "react";

import styled from "styled-components";
const Container = styled.section`
  border-radius: 1rem;
  width: 97%;
  height: 300px;
  background-color: ${(props) => props.theme.color.light};
  grid-area: shared-book;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  background-color: ${(props) => props.theme.color.main};
  padding: 1rem 2rem;
`;
const Content = styled.div``;

const SharedBooks = () => {
  return (
    <Container>
      <div>
        <SectionTitle>Shared Books</SectionTitle>
      </div>
      <Content></Content>
    </Container>
  );
};

export default SharedBooks;
