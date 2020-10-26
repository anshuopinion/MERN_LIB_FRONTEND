import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { StyledCard } from "../../../../elements";

const Card = styled(StyledCard)`
  
  .student-id {
    flex: 1;
  }

  .name {
    flex: 7;
  }
  .semester {
    flex: 1;
  }
  .year {
    flex: 1;
  }
  .icons {
    display: flex;

    flex: 3;

    justify-content: space-between;
  }
`;

const SearchBooks = styled.div`
  flex: 5;
  .input {
    border-radius: 1rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem 0.25rem;
    padding-left: 1rem;
  }
  .submit-btn {
    position: relative;
    right: 2rem;
    background: #fff;
    border: none;
    outline: none;
  }
`;
function StudentListHead() {
  return (
    <Card>
      <span className="student-id">Student Id</span>
      <span className="name">Student Name</span>
      <span className="semester">Semester</span>
      <span className="year">Year</span>
      <SearchBooks>
        <Formik
          initialValues={{ bookSearch: "" }}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          <Form>
            <Field
              className="input"
              type="text"
              name="bookSearch"
              id="bookSearch"
              placeholder="Search Book..."
            />
            <button className="submit-btn" type="sumit">
              <i>
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </button>
          </Form>
        </Formik>
      </SearchBooks>
    </Card>
  );
}

export default StudentListHead;
