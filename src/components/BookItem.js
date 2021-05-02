import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  background: #fff;
  padding: 30px;
  line-height: 1.5em;
  margin-bottom: 30px;
  display: flex;

  h2{
    small {
      font-weight: normal;
      font-size: 14px;
      padding-left: 8px;
    }
  }
`;

const BookItemImageWrapper = styled.div `
  max-width: 200px;

  img{
      max-width: 200px;
  }
`;

const BookItemContentWrapper = styled.div `
  flex-grow: 1;
  padding-left: 8px;
`;

const BookItem = ({authorName, bookTitle, bookSummary, bookCover, children}) => {
    return (
    <BookItemWrapper>
        <BookItemImageWrapper>
                <Img fixed={bookCover} alt=""/>
        </BookItemImageWrapper>
        <BookItemContentWrapper>
            <h2>
                {bookTitle} <small>{authorName}</small>
            </h2>
            <p>{bookSummary}</p>
            <div>
                {children}
            </div>
        </BookItemContentWrapper>
        
    </BookItemWrapper>
    )
}

export default BookItem