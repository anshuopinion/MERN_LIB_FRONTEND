import React from "react";
import styled from "styled-components";
import { Modal, Button } from "@material-ui/core";

const StyledModal = styled(Modal)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  outline: none;

  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.color.light};
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  p {
    border-radius: 0.3rem;
    border: 2px solid ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.error};
    padding: 1rem 0.5rem;
  }
`;

const CloseBtn = styled(Button)`
  background-color: ${(props) => props.theme.color.error};
  color: ${(props) => props.theme.color.light};
  width: 5rem;
  align-self: flex-end;
  &:hover {
    background-color: ${(props) => props.theme.color.main};
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
          <CloseBtn onClick={onClose}>Clear</CloseBtn>
        </ModalBody>
      }
    </StyledModal>
  );
};

export default ErrorModal;
