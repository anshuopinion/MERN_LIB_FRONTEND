import React from "react";

import styled from "styled-components";

const Container = styled.section`
  margin-left: 1rem;
  grid-area: recent-updates;
  width: 300px;
  height: 550px;
  background: ${(props) => props.theme.color.light};
  border-radius: 0.5rem;
  .title {
    background-color: ${(props) => props.theme.color.main};
    margin: 1rem 2rem;
    text-align: center;
    padding: 0.5rem;
    border-radius: 1rem;
  }
`;

const RecentUpdates = () => {
  return (
    <Container>
      <h3 className="title">Recent Updates</h3>
    </Container>
  );
};

export default RecentUpdates;
