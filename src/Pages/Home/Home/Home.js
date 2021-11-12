import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div id='home'>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;