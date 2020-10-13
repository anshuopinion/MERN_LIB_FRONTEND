import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledCard } from "../../../elements";

import { useHttpClient } from "../../../hooks/http-hooks";
const StyledInputCard = styled(StyledCard)`
  .crossBtn {
    position: relative;
    top: -50px;
    left: -5px;
  }

  background: ${(props) => props.theme.color.light};
  border: 1px solid #ccc;
  height: 10rem;
  display: ${(props) => (props.open ? "" : "none")};
  transition: 1000ms ease-in;

  .form {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;

    align-items: center;
    flex-wrap: wrap;
    font-size: 1rem;

    color: ${(props) => props.theme.color.main};

    .form-parts {
      display: flex;
      width: 30%;
      height: 9rem;
      justify-content: space-between;
      flex-direction: column;
    }

    .upload-img {
      border: 1px solid #ccc;
      padding: 5px;
      margin-top: 5.5rem;
    }

    .MuiFormControl-root {
      margin-bottom: 0.5rem;
      .MuiFormLabel-root {
        margin-left: 0.5rem;
        margin-bottom: 0.3rem;
        color: ${(props) => props.theme.color.formInput};
      }
    }
    input: {
      margin-border: 1rem;
      width: 2rem;
    }

    & label.Mui-focused {
      color: ${(props) => props.theme.color.formInput};
    }
    & .MuiOutlinedInput-root {
      color: ${(props) => props.theme.color.formInput};
      /* background-color: ${(props) => props.theme.color.formInput}; */
      &.Mui-focused fieldset {
        border-color: ${(props) => props.theme.color.formInput};
      }
    }
  }
`;
const CircularCard = styled(StyledCard)`
  background: ${(props) => props.theme.color.light};
  border: 1px solid #ccc;
  height: 10rem;
`;
function InputCard({
  open,
  close,
  book,
  edit,
  createLoadedBooks,
  updateLoadedBook,
}) {
  const { loading, sendRequest } = useHttpClient();
  return loading ? (
    <>
      <CircularCard>
        <CircularProgress />
      </CircularCard>
    </>
  ) : (
    <StyledInputCard open={open}>
      <FontAwesomeIcon
        className="crossBtn"
        icon={faTimes}
        onClick={close}
        size="2x"
      />

      <Formik
        initialValues={
          !edit
            ? {
                bookName: "",
                authorName: "",
                totalBook: 0,
                bookImage: undefined,
                bookId: 0,
              }
            : {
                bookName: book?.name,
                authorName: book?.author,
                totalBook: parseInt(book?.totalBook),
                bookImage: book?.bookImage,
                bookId: book?.bookId,
              }
        }
        onSubmit={async (values) => {
          const bookData = {
            name: values.bookName,
            author: values.authorName,
            totalBook: values.totalBook,
            bookId: values.bookId,
            issue: false,
          };
          if (edit) {
            // Update Mode
            const {data} = await sendRequest(`/api/books/${book._id}`,'patch',bookData);
            updateLoadedBook(data);
            close();
          } else {
            // Create Mode
            const { data } = await sendRequest("/api/books", "post", bookData);
            createLoadedBooks(data);
            close();
          }
        }}
      >
        {(props) => (
          <Form className="form">
            <div className="form-parts">
              <FormControl>
                <FormLabel>Book Name</FormLabel>
                <Field
                  size="small"
                  type="text"
                  name="bookName"
                  id="bookName"
                  placeholder="Enter Book Name..."
                  component={TextField}
                  variant="outlined"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Author Name</FormLabel>
                <Field
                  size="small"
                  variant="outlined"
                  type="text"
                  name="authorName"
                  id="authorName"
                  placeholder="Enter Author Name..."
                  component={TextField}
                />
              </FormControl>
            </div>
            <div className="form-parts ">
              <FormControl className="upload-img">
                <FormLabel>Upload Image</FormLabel>
                <input
                  type="file"
                  name="bookImage"
                  id="bookImage"
                  onChange={(event) => {
                    props.setFieldValue("bookImage", event.target.files[0]);
                  }}
                />
              </FormControl>
            </div>
            <div className="form-parts">
              <FormControl>
                <FormLabel>Total Books</FormLabel>
                <Field
                  size="small"
                  type="number"
                  variant="outlined"
                  name="totalBook"
                  id="totalBook"
                  placeholder="Total No of Books..."
                  component={TextField}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Book ID</FormLabel>
                <Field
                  size="small"
                  type="number"
                  variant="outlined"
                  name="bookId"
                  id="bookId"
                  placeholder="Enter Book Id..."
                  component={TextField}
                />
              </FormControl>
            </div>

            <Button type="submit">
              <FontAwesomeIcon icon={faPlus} /> <pre> Add</pre>
            </Button>
          </Form>
        )}
      </Formik>
    </StyledInputCard>
  );
}

export default InputCard;
