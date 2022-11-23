import request, { gql } from "graphql-request";

export const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            node {
              createdAt
              author {
                bio
                name
                id
              }
              excerpt
              slug
              title
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
}