import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { Field, Form, Formik } from "formik";

const StyledCardHeading = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${(props) => props.theme.color.main};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  font-size: 1.3rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  span {
    text-align: center;
  }
  .sno {
    flex: 2;
    text-align: center;
    margin-left: 0.5rem;
  }
  .book {
    flex: 6;
  }
  .author {
    flex: 5;
  }
  .no-books {
    flex: 2;
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
function CardHeading() {
  return (
    <StyledCardHeading>
      <span className="sno">ID</span>
      <span className="book">Book</span>
      <span className="author">Author</span>
      <span className="no-books">No. Books</span>
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
    </StyledCardHeading>
  );
}

export default CardHeading;
