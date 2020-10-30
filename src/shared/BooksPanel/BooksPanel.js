import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardHeading from "./CardHeading";
import UpdateSection from "./AddNewBook";
import BookListCard from "../BooksPanel/BookListCard/BookListCard";

import InputCard from "./InputCard/InputCard";

import { useHttpClient } from "../../hooks/http-hooks";
import ErrorModal from "../UI/ErrorModal";
import Spinner from "../UI/Spinner";
const Container = styled.section`
  border-radius: 1rem;
  margin-top: 1rem;
  grid-area: book-panel;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.color.light};
  width: 900px;
  height: 600px;
  overflow-y: scroll;
  scrollbar-width: 1rem;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.main};
    border-radius: 5px;
  }
`;

const BooksPanel = ({ disable }) => {
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [listID, setListID] = useState("");
  const [open, setOpen] = useState(false);
  const { error, clearError, loading, sendRequest } = useHttpClient();

  const deleteBookHandler = async (bookId) => {
    setLoadedBooks((prevLoadedBooks) =>
      prevLoadedBooks.filter((book) => book._id !== bookId)
    );
  };

  const closeEditHandler = () => {
    setOpen(false);
  };
  const openEditHandler = (bookId) => {
    setOpen(true);
    setListID(bookId);
  };

  // add new book to use State hook
  const createLoadedBooks = (book) => {
   
    setLoadedBooks([book, ...loadedBooks]);
  
  };

  //

  const updateLoadedBook = async (book) => {
    // delete book with same id
   setLoadedBooks((prevLoadedBooks) =>
      prevLoadedBooks.filter((loadedBook) => book._id !== loadedBook._id)
    );
    // store book with same id
    setLoadedBooks((prevLoadedBooks) => [book, ...prevLoadedBooks]);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await sendRequest("/books", "get");
      setLoadedBooks(data);
    };
    fetchBooks();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      <Container>
        <CardHeading />
        <UpdateSection
          disable={disable}
          createLoadedBooks={createLoadedBooks}
        />
        {loading ? (
          <Spinner />
        ) : (
          loadedBooks.map((book, i) => {
            if (listID === book._id) {
              return open ? (
                listID === book._id && (
                  <InputCard
                    open={open}
                    book={book}
                    close={closeEditHandler}
                    key={book._id}
                    updateLoadedBook={updateLoadedBook}
                    edit
                  />
                )
              ) : (
                <BookListCard
                  book={book}
                  disable={disable}
                  openHandler={openEditHandler}
                  deleteBookHandler={deleteBookHandler}
                  key={book._id}
                />
              );
            }

            return (
              <BookListCard
                book={book}
                key={book._id}
                disable={disable}
                openHandler={openEditHandler}
                deleteBookHandler={deleteBookHandler}
              />
            );
          })
        )}
      </Container>
    </>
  );
};

export default BooksPanel;
