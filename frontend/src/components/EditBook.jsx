import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField, Paper } from '@material-ui/core';
import axios from 'axios';

function EditBook() {
    const { id } = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/book/${id}`);
            setBook(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    };

    const handleInputChange = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:3001/book/${id}`, book);
            window.location.href = '/';
        } catch (error) {
            console.error('Error updating book', error);
        }
    };

    return (
        <Paper style={{ padding: '16px', width: '50%', margin: '16px auto' }}>
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
                    Update Book
                </Button>
            </form>
        </Paper>
    );
}

export default EditBook;
