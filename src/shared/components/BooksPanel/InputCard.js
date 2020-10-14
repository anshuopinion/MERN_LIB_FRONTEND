import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
import * as yup from "yup";
import { useHttpClient } from "../../../hooks/http-hooks";
import ErrorModal from "../ErrorModal";
const StyledInputCard = styled(StyledCard)`
  .crossBtn {
    position: relative;
    top: -50px;
    left: -5px;
    color: ${(props) => props.theme.color.error};
  }

  background: ${(props) => props.theme.color.light};
  border: 1px solid #ccc;
  height: 15rem;
  display: ${(props) => (props.open ? "" : "none")};
  /* transition: 1000ms ease-in; */

  .form {
    width: 92%;
    margin-top: 1rem;
    display: flex;

    justify-content: space-between;

    font-size: 1rem;

    color: ${(props) => props.theme.color.main};

    .form-parts {
      display: flex;

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

    .MuiOutlinedInput-input {
      padding: 9px 8px;
    }

    .numberInput {
      width: 13rem;

      .MuiOutlinedInput-input {
        padding: 9px 8px;
      }
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
const SubmitBtn = styled(Button)`
  align-self: center;
  height: 2rem;
  width: 5rem;
  background-color: ${(props) => props.theme.color.main};
  &:hover {
    background-color: ${(props) => props.theme.color.second};
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
  const { loading, sendRequest, error, clearError } = useHttpClient();

  // Form Initial Values

  const initialValues = !edit
    ? {
        name: "",
        author: "",
        total_books: 0,
        book_image: undefined,
        book_id: 0,
      }
    : {
        name: book?.name,
        author: book?.author,
        total_books: parseInt(book?.total_books),
        book_image: book?.book_image,
        book_id: book?.book_id,
      };

  // Form Validation
  const validationSchema = yup.object().shape({
    name: yup.string().min(3).required("Name Required"),
    author: yup.string().required("Author Required"),
    total_books: yup.number().required("Number of Book required"),
    book_id: yup.number().max(10000).required("Book Id required"),
  });

  // Form Submit method

  const onSubmit = async (values) => {
    const bookData = {
      name: values.name,
      author: values.author,
      total_books: values.total_books,
      book_id: values.book_id,
      issue: false,
    };

    if (edit) {
      // Update Mode
      const { data } = await sendRequest(
        `/books/${book._id}`,
        "patch",
        bookData
      );
      updateLoadedBook(data);
      close();
    } else {
      // Create Mode
      const { data } = await sendRequest("/books", "post", bookData);
      createLoadedBooks(data);
      close();
    }
  };
  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {loading ? (
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className="form">
                <div className="form-parts">
                  <FormControl>
                    <FormLabel>Book Name</FormLabel>
                    <Field
                      size="small"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Book Name..."
                      component={TextField}
                      variant="outlined"
                    />
                    {/* <ErrorMessage name="name" /> */}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Author Name</FormLabel>
                    <Field
                      size="small"
                      variant="outlined"
                      type="text"
                      name="author"
                      id="author"
                      placeholder="Enter Author Name..."
                      component={TextField}
                    />
                    {/* <ErrorMessage name="author" /> */}
                  </FormControl>
                </div>
                <div className="form-parts ">
                  <FormControl className="upload-img">
                    <FormLabel>Upload Image</FormLabel>
                    <input
                      type="file"
                      name="book_image"
                      id="book_image"
                      onChange={(event) => {
                        props.setFieldValue(
                          "book_image",
                          event.target.files[0]
                        );
                      }}
                    />
                    {/* <ErrorMessage name="book_image" /> */}
                  </FormControl>
                </div>
                <div className="form-parts">
                  <FormControl className="numberInput">
                    <FormLabel>Total Books</FormLabel>
                    <Field
                      size="small"
                      type="number"
                      variant="outlined"
                      name="total_books"
                      id="total_books"
                      placeholder="Total No of Books..."
                      component={TextField}
                    />
                    {/* <ErrorMessage name="total_books" /> */}
                  </FormControl>
                  <FormControl className="numberInput">
                    <FormLabel>Book ID</FormLabel>
                    <Field
                      size="small"
                      type="number"
                      variant="outlined"
                      name="book_id"
                      id="book_id"
                      placeholder="Enter Book Id..."
                      component={TextField}
                    />
                    {/* <ErrorMessage name="book_id" /> */}
                  </FormControl>
                </div>

                <SubmitBtn type="submit">
                  <FontAwesomeIcon icon={faPlus} /> <pre> Add</pre>
                </SubmitBtn>
              </Form>
            )}
          </Formik>
        </StyledInputCard>
      )}{" "}
    </>
  );
}

export default InputCard;
