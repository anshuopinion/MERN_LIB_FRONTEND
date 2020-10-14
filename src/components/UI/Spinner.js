import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
const StyledSpinner = styled.div`
  height: ${(props) => (props.fullPage ? "100vh" : "100%")};
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Spinner({ fullPage }) {
  return (
    <StyledSpinner fullPage={fullPage}>
      <CircularProgress />
    </StyledSpinner>
  );
}

export default Spinner;
