import React from "react";
import styled from "styled-components";
import { StyledCard } from "../../../elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { Button, CircularProgress } from "@material-ui/core";
import { useHttpClient } from "../../../hooks/http-hooks";
import ErrorModal from "../ErrorModal";

const StyledListCard = styled(StyledCard)`
  display: ${(props) => (props.open ? "" : "none")};
  &:hover {
    background: ${(props) => props.theme.color.light};
    transition: 0.2s ease-in;
    color: ${(props) => props.theme.color.dark};
    border: 1px solid ${(props) => props.theme.color.dark};

    button {
      background: #000;
      transition: 0.2s ease-in;
    }
  }

  span {
    text-align: center;
  }
  .sno {
    flex: 2;
    text-align: center;
    margin-left: 0.5rem;
  }

  .bookwrapper {
    flex: 8;
    display: flex;
    align-items: center;

    .book-img {
      width: 90px;
      height: 100px;
      background-color: #fff;
      object-fit: cover;
      img {
        width: 90px;
        height: 100px;
        border-radius: 0.4rem;
      }
    }
    span {
      margin-left: 1rem;
    }
  }
  .author {
    flex: 5;
  }
  .no-books {
    flex: 3;
  }
  .issue {
    flex: 5;
  }
  .icons {
    display: flex;
    justify-content: space-around;
  }
`;

const IssueBtn = styled(Button)`
  background-color: ${(props) =>
    props.issued ? props.theme.color.second : props.theme.color.dark};
  color: ${(props) => props.theme.color.light};
  padding: 0.2rem 2rem;
`;

function ListCard({ book, disable, openHandler, deleteBookHandler }) {
  const { sendRequest, loading, error, clearError } = useHttpClient();

  const deleteBook = async () => {
    await sendRequest(`/api/books/${book._id}`, "delete").then((res) => {
      deleteBookHandler(book._id);
    });
  };

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      <StyledListCard open={true}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <span className="sno">{book.bookId}</span>
            <span className="bookwrapper">
              <span className="book-img">
                <img src={book.bookImage} alt="book" />
              </span>
              <span> {book.name}</span>
            </span>
            <span className="author">{book.author}</span>
            <span className="no-books">{book.totalBook}</span>
            <span className="issue">
              {!disable ? (
                <div className="icons">
                  <span>
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="2x"
                      onClick={() => openHandler(book._id)}
                    />
                  </span>

                  <span>
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="2x"
                      onClick={deleteBook}
                    />
                  </span>
                </div>
              ) : (
                <IssueBtn issued={book.issue.toString()}>
                  {book.issue ? "Issed" : "Issue"}
                </IssueBtn>
              )}
            </span>
          </>
        )}
      </StyledListCard>
    </>
  );
}

export default ListCard;
