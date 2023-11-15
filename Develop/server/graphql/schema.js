const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    me: User
    // Other queries can be added here
  }

  type Mutation {
    login(input: LoginInput): Auth
    addUser(input: CreateUserInput): Auth
    saveBook(bookId: String!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
