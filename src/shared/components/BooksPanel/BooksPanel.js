import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardHeading from "./CardHeading";
import UpdateSection from "./AddNewBook";
import ListCard from "./ListCard";
import axios from "axios";
import InputCard from "./InputCard";
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
  const [books, setBooks] = useState([]);
  const [listID, setListID] = useState("");

  const [open, setOpen] = useState(false);

  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:9000/api/books");
    setBooks(data);
    
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const closeHandler = () => {
    setOpen(false);
  };
  const openHandler = (listId) => {
    setOpen(false);
    setListID(listId);
  };
  return (
    <>
      <Container>
        <CardHeading />
        <UpdateSection disable={disable} />
        {books.map((book, i) => {
          if (listID === book.id) {
            return open ? (
              <InputCard
                open={open}
                book={book}
                close={closeHandler}
                key={book.id}
                edit
              />
            ) : (
              <ListCard
                book={book}
                disable={disable}
                openHandler={openHandler}
                key={book.id}
              />
            );
          }

          return (
            <ListCard
              book={book}
              key={book.id}
              disable={disable}
              openHandler={openHandler}
            />
          );
        })}
      </Container>
    </>
  );
};

export default BooksPanel;
