import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Spinner } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Categories from './Categories/Categories';
import Wehave from './Wehave/Wehave';
import Review from './Review/Review';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Home = () => {

    const pageTitle = 'Ultimate Toy Verse | Home'

    const { loading } = useContext(AuthContext);

    useEffect(() => {
        AOS.init();
    }, [])

    if (loading) {
        return (
            <div>
                <Spinner style={{ position: "fixed", left: "50%" }} animation="border" variant="primary" />
            </div>
        );
    }

    return (
        <div>
            <Helmet><title>{pageTitle}</title></Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                <Wehave></Wehave>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                <Review></Review>
            </div>

        </div>
    );
};

export default Home;