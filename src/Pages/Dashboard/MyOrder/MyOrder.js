import React, { useState, useEffect } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';



const MyOrder = ({ date }) => {
    const { user, token } = useAuth();
    const [myorders, setMyorders] = useState([])

    useEffect(() => {
        const url = `https://y-mocha-alpha.vercel.app/customers?email=${user.email}&date=${date}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setMyorders(data));
    }, [user.email, date, token])

    return (
        <div>
            <h2>My Orders: {myorders.length}</h2>
            <TableContainer component={Paper} >
                <Table sx={{}} aria-label="Myorders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myorders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <NavLink to="/dashboard/payment" style={{ textDecoration: 'none' }} >
                <Button color="inherit" variant="contained">PAYMENT</Button>
            </NavLink>
        </div>
    );
};

export default MyOrder;







