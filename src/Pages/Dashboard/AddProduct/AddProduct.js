import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/headerimg.jpg';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...addProduct };
        newLoginData[field] = value;
        setAddProduct(newLoginData);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Add A Product</Typography>
                    <form>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Description"
                            name="description"
                            type="textfield"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Price"
                            type="number"
                            name="number"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="img"
                            src="url"
                            name="img"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add A Product</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/dashboard">
                            <Button variant="text">Add A Product</Button>
                        </NavLink>
                    </form>
                    {/* {isLoading && <CircularProgress />} */}
                    {/* {user?.email && <Alert severity="success">User Created successfully!</Alert>} */}
                    {/* {authError && <Alert severity="error">{authError}</Alert>} */}
                </Grid>
                <Grid marginTop={12} item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};






export default AddProduct;