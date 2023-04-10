import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import icon1 from '../../../images/icon1.png';
import icon2 from '../../../images/icon2.png';
import icon3 from '../../../images/icon3.png';
import { NavLink } from 'react-router-dom';


const services = [
    {
        counting: 1,
        name: 'Special Product',
        description: 'Appiontment every Wednesday 9am.',
        img: icon1
    },
    {
        counting: 2,
        name: 'Sales',
        description: 'First come,first served. our offers are in limited quantities.so be quick',
        img: icon3
    },
    {
        counting: 3,
        name: 'Announcement',
        description: 'New offers every week. New experiences, new surprises.Your Sundays will no longer be alike.',
        img: icon2
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    SPECIAL SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    HOW IT WORKS
                    <Typography color="blue" sx={{ fontWeight: 400 }} variant="h6" >_____</Typography>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }

                </Grid>

                < NavLink to={'/dashboard/ordereview'} style={{ textDecoration: 'none' }}>    <Button variant="contained">GET STARTED</Button></NavLink>
            </Container>
        </Box>
    );
};

export default Services;