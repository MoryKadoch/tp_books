import { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3001/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    };

    const handleEdit = (id) => {
        window.location.href = `/edit-book/${id}`;
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/book/${id}`);
            fetchBooks();
        } catch (error) {
            console.error('Failed to delete book', error);
        }
    };


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.id}</TableCell>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.price}</TableCell>
                            <TableCell>{book.description}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => handleEdit(book.id)} style={{ marginRight: '16px' }}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="secondary" onClick={() => handleDelete(book.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BookList;
