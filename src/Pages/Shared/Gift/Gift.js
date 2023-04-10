import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Gifts from '../../../images/gifts.jpg';

const Gift = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">THIS IS YOUR GIFTS VOUCHER</Typography>
                <img
                    style={{ width: '500px', height: '500px' }}
                    src={Gifts} alt="" />

            </Grid>
        </Box>
    );
};


export default Gift;

