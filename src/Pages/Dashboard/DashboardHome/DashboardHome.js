import { Grid } from '@mui/material';
import React from 'react';
import CalendarDate from '../../Shared/CalenderDate/CalenderDate';
import ManageOrder from '../../MyOrders/ManageOrder/ManageOrder';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <CalendarDate
                    date={date}
                    setDate={setDate}
                ></CalendarDate>
            </Grid>
            <Grid item xs={12} sm={7}>
                <ManageOrder date={date}></ManageOrder>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;