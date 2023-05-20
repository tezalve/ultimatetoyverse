import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import {  Spinner } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Categories from './Categories/Categories';

const Home = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div>
                <Spinner style={{ position: "fixed", left: "50%" }} animation="border" variant="primary" />
            </div>
        );
    }

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
        </div>
    );
};

export default Home;