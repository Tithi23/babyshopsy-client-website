import React from 'react';
import Grid from '@mui/material/Grid';
import header from '../../../images/header2.png';
// import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';


// const bannerBg = {
//     background: `url(${bg})`,

// }

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Header = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Whether you want to bring more organic, stylish, fun, or functional products into your baby's life, we've compiled a list of the best baby stores to shop online. Take a look, and don't forget to bookmark a few of these sites, so you can shop your heart out when your baby hits the crib.

                        </Typography>


                        < NavLink to={'/explore'} style={{ textDecoration: 'none', backgroundColor: '#5CE7ED' }}>    <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Products Purches</Button></NavLink>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '600px' }} src={header} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Header;