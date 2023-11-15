import { useState } from 'react';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';
import { useLazyQuery, useMutation } from '@apollo/client';

import { SEARCH_BOOKS } from '../graphql/queries'; // Import your SEARCH_BOOKS query
import { SAVE_BOOK } from '../graphql/mutations'; // Import your SAVE_BOOK mutation
import Auth from '../utils/auth';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState('');
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  const [searchBooks, { data: searchResults, error: searchError }] = useLazyQuery(SEARCH_BOOKS, {
    fetchPolicy: 'no-cache',
  });

  const [saveBook] = useMutation(SAVE_BOOK, {
    onCompleted: (data) => {
      // If book is saved successfully, save book id in local state and local storage
      const savedBookId = data.saveBook.bookId;
      setSavedBookIds([...savedBookIds, savedBookId]);
      saveBookIds([...savedBookIds, savedBookId]);
    }
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      // Execute the searchBooks query
      await searchBooks({
        variables: { title: searchInput },
      });
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

}
export default SearchBooks
