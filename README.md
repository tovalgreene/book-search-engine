# Book Search Engine

## Description

The Book Search Engine is a full-stack MERN application that has been refactored from a RESTful API to a GraphQL API using Apollo Server. This application allows users to search for books via the Google Books API, view book details, and save books to review later. The application is built with React on the frontend, MongoDB for the database, and Node.js/Express.js server with an Apollo Server GraphQL API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Deployment](#deployment)

## Installation

To install this application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory and run `npm install` to install root-level dependencies.
3. Navigate to the `server` directory and run `npm install` to install server-side dependencies.
4. Navigate to the `client` directory and run `npm install` to install client-side dependencies.

## Usage

To use this application:

1. Ensure you have MongoDB installed and running on your local machine.
2. In the root directory, run `npm run dev` to start both the server and client concurrently.
3. Open [http://localhost:3000](http://localhost:3000) to view the React application in the browser.
4. Use the application to search for books, sign up, log in, and save your favorite books.

## Features

- Search for books via the Google Books API.
- Sign up and log in functionality with JWT authentication.
- Save books to your personal account.
- View a list of saved books and remove books from this list.

## Technologies Used

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [JWT](https://jwt.io/)

## Contributing

Contributions to the Book Search Engine are welcome!

Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature.
3. Add your feature or improvement.
4. Create a pull request.

Please refer to the `CONTRIBUTING.md` for full contribution guidelines.

## Deployment

This application is deployed on Heroku. 

## License

This project is licensed under the MIT License.