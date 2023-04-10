import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const OrderReview = () => {
    return (
        <Box
            component="form"
            sx={{
                width: 500,
                maxWidth: '100%',
                '& .MuiTextField-root': { m: 2 },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Typography variant="h5" >
                    SHARE YOUR EXPERIENCE AND GET YOUR GIFT VOUCHER!
                </Typography>
                <TextField
                    id="filled-multiline-static"
                    label="Review"
                    multiline
                    rows={20}
                    fullWidth={50}
                    variant="filled"
                />
            </div>
            < NavLink to={'/giftes'} style={{ textDecoration: 'none' }}>  <Button variant="contained">SUBMIT</Button></NavLink>
        </Box>
    );
}

export default OrderReview;







