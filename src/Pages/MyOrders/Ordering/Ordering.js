import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OrderingModal from '../OrderingModal/OrderingModal';



const Ordering = ({ ordering, date, setOrderingSuccess }) => {
    const { name, description, price, quantity, img } = ordering;
    const [openOrdering, setOrderingOpen] = React.useState(false);
    const handleOrderingOpen = () => setOrderingOpen(true);
    const handleOrderingClose = () => setOrderingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '100px', margin: '0 auto', padding: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {description}
                    </Typography>
                    <Typography color="red" variant="h6" gutterBottom component="div">
                        {price}$
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {quantity} AVAILABLE PRODUCT
                    </Typography>

                    <Button onClick={handleOrderingOpen} variant="contained"> PURCHAGE</Button>

                    <Button onClick={handleOrderingClose} variant="contained"> CENCEL</Button>

                </Paper>
            </Grid>
            <OrderingModal
                date={date}
                ordering={ordering}
                openOrdering={openOrdering}
                setOrderingSuccess={setOrderingSuccess}
                handleOrderingClose={handleOrderingClose}
            ></OrderingModal>
        </>
    );
};

export default Ordering;