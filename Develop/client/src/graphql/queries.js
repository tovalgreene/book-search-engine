import { gql } from '@apollo/client';

// Query to retrieve the details of a single user (typically the logged-in user)
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// Query to search for books using the Google Books API (adjust fields as necessary)
export const SEARCH_BOOKS = gql`
  query searchBooks($title: String!) {
    searchBooks(title: $title) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;

// Add more queries as needed for your application
