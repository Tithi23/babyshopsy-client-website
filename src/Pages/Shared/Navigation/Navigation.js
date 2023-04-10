import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShopIcon from '@mui/icons-material/Shop';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                        <ShopIcon
                            size="large"
                            color="inherit"
                            sx={{ fontSize: 40 }}
                        >
                        </ShopIcon> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            BABYSHOPSY
                        </Typography>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Link to="/explore" style={{ textDecoration: 'none' }}><Button style={{ textDecoration: 'none', color: 'white' }} >Explore</Button></Link>


                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;