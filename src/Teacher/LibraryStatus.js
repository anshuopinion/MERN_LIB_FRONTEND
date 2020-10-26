import React, { useState } from "react";
import styled from "styled-components";
import { Card, Switch } from "@material-ui/core";

const StyledLibraryStatus = styled(Card)`
  border-radius: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  grid-area: libStatus;
  width: 300px;
  height: 100px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

function LibraryStatus() {
  const [status, setStatus] = useState(false);

  return (
    <StyledLibraryStatus>
      <h2>{!status ? "Open" : "Close"} Library</h2>
      <Switch onClick={() => setStatus(!status)} />
    </StyledLibraryStatus>
  );
}

export default LibraryStatus;
