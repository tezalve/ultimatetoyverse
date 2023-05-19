import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Spinner } from 'react-bootstrap';

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
            <p>home</p>
        </div>
    );
};

export default Home;