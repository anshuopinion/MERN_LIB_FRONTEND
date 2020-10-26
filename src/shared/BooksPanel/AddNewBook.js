import React, { useState } from "react";
import styled from "styled-components";
import InputCard from "./InputCard";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { StyledCard } from "../../Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledAddNewBook = styled.div`
  display: ${(props) => (props.disable ? "none" : "")};
`;
const AddBookCard = styled(StyledCard)`
  display: ${(props) => (props.open ? "" : "none")};

  .openUpdatePanel {
    transition: 0.3s ease-in;
  }
`;

function AddNewBook({ disable, createLoadedBooks }) {
  const [open, setOpen] = useState(false);

  const closeUpdatePanel = () => {
    setOpen(false);
  };
  const openUpdatePanel = () => {
    setOpen(true);
  };

  return (
    <StyledAddNewBook disable={disable}>
      <AddBookCard open={!open} className="openUpdatePanel">
        <i onClick={openUpdatePanel}>
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
        </i>
      </AddBookCard>
      <InputCard
        closeUpdatePanel={closeUpdatePanel}
        open={open}
        close={closeUpdatePanel}
        createLoadedBooks={createLoadedBooks}
      />
    </StyledAddNewBook>
  );
}

export default AddNewBook;
