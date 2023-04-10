import React from 'react';
import CalendarDate from '../../Shared/CalenderDate/CalenderDate';
import { Box, Grid, Typography } from '@mui/material';
import MyOrder from '../MyOrder/MyOrder';


const OrderPlacement = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Box>
            <Typography paragraph>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <CalendarDate
                            date={date}
                            setDate={setDate}
                        ></CalendarDate>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <MyOrder date={date}></MyOrder>
                    </Grid>
                </Grid>
            </Typography>
        </Box>

    );
};


export default OrderPlacement;