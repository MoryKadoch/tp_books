import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', marginLeft: '16px' }}>
                       Books
                    </Link>
                    <Link to="/add-book" style={{ color: 'white', textDecoration: 'none', marginLeft: '16px' }}>
                        Add
                    </Link>
                    <Link to="/search-book" style={{ color: 'white', textDecoration: 'none', marginLeft: '16px' }}>
                        Search
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header