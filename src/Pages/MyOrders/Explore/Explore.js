import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import OrderHeader from '../OrderHeader/OrderHeader';
import ManageOrder from '../ManageOrder/ManageOrder';


const Explore = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <OrderHeader date={date} setDate={setDate}></OrderHeader>
            <ManageOrder date={date}></ManageOrder>
        </div>
    );
};

export default Explore;