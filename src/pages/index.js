import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import BookItem from "../components/BookItem";

const IndexPage = (props) => {
  return (
  <Layout>
    {props.data.allBook.edges.map(edge =>(
      <BookItem key={edge.node.id}>
        <h2>
          {edge.node.title} - <small>{edge.node.author.name}</small>
        </h2>
        <div>
          {edge.node.summary}
        </div>
        <Link to={`/book/${edge.node.id}`}>
          Join conversation
        </Link>
      </BookItem>
    ))}
  </Layout>
  );
}

export const query = graphql`
  query MyQuery {
  allBook {
    edges {
      node {
        title
        summary
        id
        author {
          name
        }
      }
    }
  }
}
`

export default IndexPage
