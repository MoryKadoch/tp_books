import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Footer = () => {
    return (
        <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                        © {new Date().getFullYear()} <a href="https://github.com/MoryKadoch" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>MoryKadoch</a>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer