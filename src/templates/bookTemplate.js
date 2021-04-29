import React from 'react';
import Layout from "../components/layout"
import styled from "styled-components"

const BookItem = styled.section`
  border: 3px solid red;

  h2{
    small {
      font-weight: normal;
    }
  }
`;

const BookTemplate = (props) => {
    return(
        <Layout>
          <BookItem>
            <h2>
              {props.pageContext.title} - <small>{props.pageContext.author.name}</small>
            </h2>
             <p>{props.pageContext.summary}</p>
          </BookItem>
        </Layout>
    )

}


export default BookTemplate;