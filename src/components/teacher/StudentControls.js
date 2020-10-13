import React from "react";
import styled from "styled-components";

// import AddNewStudent from "./AddNewStudent";
import StudentLists from "./StudentLists";

const StyledStudentControl = styled.section`
  border-radius: 1rem;
  margin-top: 1rem;
  grid-area: book-panel;
  padding: 4rem;
  background-color: ${(props) => props.theme.color.light};
  width: 900px;
  height: 600px;
  grid-area: studentControl;
`;

function StudentControls() {
  return (
    <StyledStudentControl>
      {/* <h3>Student Control Panel</h3> */}
      {/* <AddNewStudent /> */}
      <StudentLists />
    </StyledStudentControl>
  );
}

export default StudentControls;
