import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import review from '../../../images/reviews1.jpg';
// import bg from '../../../images/reviews1.jpg';
import { Button, InputAdornment, Rating, Typography } from '@mui/material';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import { AccountCircle } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


const Reviews = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" sx={{ fontWeight: 500, m: 2, color: 'success.main' }}>
                    REVIEWS
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    SEE OUR CUSTOMER REVIEWS
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            textAlign: 'left'
                        }}>
                            <Box>
                                <Typography variant="h5" >
                                    SHARE YOUR EXPERIENCE
                                </Typography>

                                <Typography component="div" marginBottom={2} marginTop={2}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Review"
                                        rows={4}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                    /> <br />
                                    <Rating name="size-small" defaultValue={2} size="small" />
                                </Typography>
                                < NavLink to={'/orderreview'} style={{ textDecoration: 'none' }}>
                                    <Button variant="contained">SUBMIT</Button></NavLink>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                style={{ width: '400' }}
                                src={review} alt="" />
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
};

export default Reviews;