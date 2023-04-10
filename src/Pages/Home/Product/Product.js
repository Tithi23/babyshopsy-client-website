import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';



const Product = (props) => {
    const { name, description, img, price } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 1, margin: '0 auto', padding: '0 auto' }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '100px', margin: '0 auto', padding: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h6" color="red">
                        Price:{price}$

                    </Typography>
                    <NavLink to='/dashboard' style={{ textDecoration: 'none' }}>
                        <Button variant="contained">BUY THE PRODUCT</Button></NavLink>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;