import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import footer from '../../../images/footer.jpg';



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Footer = () => {
    return (

        <Box marginTop={3} bgcolor="text.primary" color="white" >
            <Container maxWidth="lg">
                <Grid container spacing={2} >

                    <Grid item xs={6} md={6} style={verticalCenter} >
                        <Box>
                            <img style={{ width: '400px' }} src={footer} alt="" />
                            <Typography variant="h5">
                                Happy Shopping!!!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={6} md={6} >
                        <Box >
                            <Typography variant="h4">
                                ABOUT US
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                                Whether you want to bring more organic, stylish, fun, or functional products into your baby's life, we've compiled a list of the best baby stores to shop online. Take a look, and don't forget to bookmark a few of these sites, so you can shop your heart out when your baby hits the crib.

                            </Typography>
                            <Typography variant="h5" sx={{ color: 'gray', my: 3, fontSize: 13, }}> Fatullah 32 st-12/4 - Narayangonj</Typography>
                            <Typography variant="h5" sx={{ color: 'gray', my: 3, fontSize: 13, }}> Contact us : 087-23-400</Typography>
                            <Typography variant="h5" sx={{ color: 'gray', my: 3, fontSize: 13, }}> Emargency : 19234</Typography>
                            <Typography><input className="sub-input" type="text" placeholder="Enter Your Email" />
                                <br />
                                <Button className="details-btn">Subscribe</Button></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Box >
    );
};

export default Footer;