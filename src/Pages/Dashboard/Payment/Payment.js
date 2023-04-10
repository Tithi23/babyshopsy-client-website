import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';


const Payment = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    PAYMENT SYSTEM COMING SOON!
                </Typography>
            </Container>
        </Box>
    );
};


export default Payment;

