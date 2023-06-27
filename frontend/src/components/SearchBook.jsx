import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';

function SearchBook() {
    const [name, setName] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3001/book/search/${name}`);
            const data = Array.isArray(response.data) ? response.data : [response.data];
            setResults(data);
        } catch (error) {
            alert('This book does not exist');
            console.error('Error searching book', error);
        }
    };

    return (
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleSearch}>
                <TextField
                    name="name"
                    label="Search by Name"
                    value={name}
                    onChange={handleInputChange}
                    required
                    style={{ marginRight: '16px' }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Search
                </Button>
            </form>
            <List>
                {results.map((book) => (
                    <ListItem key={book.id} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <ul>
                            <li><ListItemText primary={book.title} /></li>
                            <li><ListItemText primary={book.author} /></li>
                            <li><ListItemText primary={book.price} /></li>
                            <li><ListItemText primary={book.description} /></li>
                        </ul>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default SearchBook;
