import React, { useContext, useEffect, useState } from 'react';
import Alltoys from './Alltoys';
import { Button, Form, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProviders';
import { Helmet } from 'react-helmet';

const Alltoyspage = () => {

    const pageTitle = 'Ultimate Toy Verse | Alltoys'

    const [toys, setToys] = useState([]);
    const [filteredtoys, setFilteredtoys] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const [searchedToy, setSearchedToy] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        console.log(search);
        const searchedtoys = toys.filter(toy =>
            toy.toy_name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredtoys(searchedtoys);
        setSearchedToy(search);
        setIsSearching(true);
    };

    const { user, loading } = useContext(AuthContext);
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
            <Form className='bg-dark p-3 w-50 mx-auto m-3 shadow text-white' onSubmit={handleSearch}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control name='search' type="text" placeholder="Enter Toy Name" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>

            <div className='bg-dark text-white p-5'>
                {
                    isSearching ?
                        filteredtoys.length > 0 ?
                            filteredtoys?.slice(0, 20).map(toy => <Alltoys
                                key={toy._id}
                                toy={toy}
                            ></Alltoys>)
                            :
                            <p className='text-white text-center'>No match by the keyword "{searchedToy}"</p>
                        :
                        toys?.slice(0, 20).map(toy => <Alltoys
                            key={toy._id}
                            toy={toy}
                        ></Alltoys>)

                }
            </div>
        </div>
    );
};

export default Alltoyspage;