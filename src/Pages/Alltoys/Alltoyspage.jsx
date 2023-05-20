import React, { useEffect, useState } from 'react';
import Alltoys from './Alltoys';
import { Button, Form } from 'react-bootstrap';

const Alltoyspage = () => {

    const [toys, setToys] = useState([]);

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
        setToys(searchedtoys);
    };

    return (
        <div>
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