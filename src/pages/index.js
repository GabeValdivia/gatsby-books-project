import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import BookItem from "../components/BookItem";
import styled from "styled-components";

const LinkButton = styled.div`
  text-align: right;

  a {
    padding: 8px 14px;
    background: rebeccapurple;
    color: #fff;
    font-weight: bolder;
    text-transform: capitalize;
    border-radius: 8px;
    text-decoration: none;


     &:hover {
      background: indigo;
    }
  }
`

const IndexPage = (props) => {
  return (
  <section>
    {props.data.allBook.edges.map(edge =>(
      <BookItem
        bookCover={edge.node.localImage.childImageSharp.fixed}
        bookTitle={edge.node.title}
        bookSummary={edge.node.summary}
        authorName={edge.node.author.name}
        key={edge.node.id}
      >
        <LinkButton>
          <Link to={`/book/${edge.node.id}`}>
            Join conversation
          </Link>
        </LinkButton>
      </BookItem>
    ))}
  </section>
  );
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          summary
          title
          localImage {
            childImageSharp{
              fixed(width:200){
                ...GatsbyImageSharpFixed
              }
            }
          }
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
