import React from "react";
import styled from "styled-components";
import { Modal, Button } from "@material-ui/core";

const StyledModal = styled(Modal)``;

const ModalBody = styled.div`
  background-color: #fff;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    background: blue;
    color: #fff;
    padding: 1rem 0.5rem;
  }
  button.close {
  }
`;
const ErrorModal = ({ error, onClose }) => {
  return (
    <StyledModal
      open={!!error}
      onClose={onClose}
      closeAfterTransition
      header="An Error Occurred!"
      className="center"
      aria-labelledby="Error Modal"
      aria-describedby="For_SHowing_error"
    >
      {
        <ModalBody>
          <p>{error}</p>
          <Button onClick={onClose}>Clear</Button>
        </ModalBody>
      }
    </StyledModal>
  );
};

export default ErrorModal;
