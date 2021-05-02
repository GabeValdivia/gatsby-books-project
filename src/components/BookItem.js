import React from "react";
import styled from "styled-components";

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  background: #fff;
  padding: 30px;
  line-height: 1.5em;
  margin-bottom: 30px;

  h2{
    small {
      font-weight: normal;
      font-size: 14px;
      padding-left: 8px;
    }
  }
`;

const BookItem = ({authorName, bookTitle, bookSummary, children}) => {
    return (
    <BookItemWrapper>
        <h2>
                {bookTitle} <small>{authorName}</small>
        </h2>
            <p>{bookSummary}</p>
        <div>
            {children}
        </div>
    </BookItemWrapper>
    )
}

export default BookItem