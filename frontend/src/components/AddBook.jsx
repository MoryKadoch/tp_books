import { useState } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import axios from 'axios';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    description: ''
  });

  const handleInputChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/book', book);
      window.location.href = '/';
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  return (
    <Paper style={{ padding: '16px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          value={book.title}
          onChange={handleInputChange}
          required
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          name="author"
          label="Author"
          value={book.author}
          onChange={handleInputChange}
          required
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          value={book.price}
          onChange={handleInputChange}
          required
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          name="description"
          label="Description"
          value={book.description}
          onChange={handleInputChange}
          multiline
          rows={4}
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Add Book
        </Button>
      </form>
    </Paper>
  );
}

export default AddBook;