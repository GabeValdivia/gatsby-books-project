import React from 'react';
import Layout from "../components/layout"
import BookItem from "../components/BookItem";

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