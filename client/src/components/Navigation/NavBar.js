import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CottageIcon from '@mui/icons-material/Cottage';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../Firebase/context';

const serverURL = "";
const pages = ['Profiles', 'Matches', 'Chat'];
const settings = ['Account', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { logout, currentUser } = useAuth()
    const history = useHistory()

    const email = currentUser.email
    const [profile, setProfile] = React.useState(null);

    async function handleLogout() {
        try {
            await logout()
            history.push('/')
        } catch {
            console.log('failed to logout')
        }
    }

    React.useEffect(() => {
        getProfilePicture();
    }, []);

    const getProfilePicture = () => {
        callApiGetProfilePicture()
            .then(res => {
                console.log("callApiGetProfilePicture returned: ", res)
                var parsed = JSON.parse(res.express);
                console.log("callApiGetProfilePicture parsed: ", parsed)
                setProfile(parsed);
            });
    }

    //API to get first name, last name, and photo
    const callApiGetProfilePicture = async () => {
        const url = serverURL + "/api/getProfilePicture";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CottageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    {/* The href argument is the filepath to navigate to when clicking the "Zoommates" logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Zoommates
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link style={{ textDecoration: "none", color: "black" }} to={`/${page.toLowerCase()}`}>{page}</Link> {/* Link to different pages when minimized screen */}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <CottageIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    {/* The href argument is the filepath to navigate to when clicking the "Zoommates" logo */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Zoommates
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{ textDecoration: "none", color: "white" }} to={`/${page.toLowerCase()}`}>{page}</Link> {/* Link to different pages when full screen */}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {/* <Avatar alt={currentUser.email} src={profile[0].photo} /> */}
                                <Avatar alt={currentUser.email} src={profile && profile[0] && profile[0].photo} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/*If the setting is 'Logout', onClick the function handleLogout will execute, else handleCloseUserMenu*/}
                            {/* {settings.map((setting) => (
                                <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))} */}
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : null}>
                                    {setting === 'Account' ? (
                                        <Link to="/account" onClick={handleCloseUserMenu} style={{ textDecoration: 'none', color: 'black' }}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </Link>
                                    ) : (
                                        <Typography textAlign="center">{setting}</Typography>
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;