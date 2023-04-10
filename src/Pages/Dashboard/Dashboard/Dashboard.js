import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../AddProduct/AddProduct';
import ManegeProducts from '../ManageProducts/ManegeProducts';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderPlacement from '../OrderPlacement/OrderPlacement';
import OrderReview from '../OrderReview/OrderReview';
import Payment from '../Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';




const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <List>
                <Link to={`${url}`} style={{ textDecoration: 'none' }}><Button color="inherit">Dashboard</Button></Link>
                <br />
                {admin && <>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button color="inherit">Make Admin</Button></Link>

                    <Link to={`${url}/addproduct`} style={{ textDecoration: 'none' }}><Button color="inherit">Add A Product</Button></Link>

                    <Link to={`${url}/manegeproducts`} style={{ textDecoration: 'none' }}><Button color="inherit">Manage Products</Button></Link>

                    <Link to={`${url}/allorders`} style={{ textDecoration: 'none' }}><Button color="inherit">All Orders</Button></Link>
                    <br />
                </>}
                <Link to={`${url}/orderplacement`} style={{ textDecoration: 'none' }}><Button color="inherit"> My Orders</Button> </Link>
                <br />
                <Link to={`${url}/orderreview`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit">Review</Button>
                </Link>
                <br />
                <Link to={`${url}/payment`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit">Pay</Button>
                </Link>

            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/orderplacement`}>
                        <OrderPlacement></OrderPlacement>
                    </Route>
                    <Route path={`${path}/orderreview`}>
                        <OrderReview></OrderReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    < AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </ AdminRoute>
                    < AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </ AdminRoute>
                    < AdminRoute path={`${path}/manegeproducts`}>
                        <ManegeProducts></ManegeProducts>
                    </ AdminRoute>
                    < AdminRoute path={`${path}/allorders`}>
                        <AllOrders></AllOrders>
                    </ AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

// https://y-mocha-alpha.vercel.app













