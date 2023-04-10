import { Container, Grid } from '@mui/material';
import React from 'react';
import headerimage from '../../../images/headerimg.jpg';
import CalenderDate from '../../Shared/CalenderDate/CalenderDate';

const OrderHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CalenderDate date={date} setDate={setDate}></CalenderDate>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={headerimage} alt="" />
                </Grid>
            </Grid >
        </Container >

    );
};

export default OrderHeader;
