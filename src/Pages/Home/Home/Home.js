import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Products></Products>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>

    );
};

export default Home;