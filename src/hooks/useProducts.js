import React, { useEffect, useState } from 'react';


const useProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('./ManageOrder')

    }, []);
    return [products, setproducts];
};


export default useProducts;