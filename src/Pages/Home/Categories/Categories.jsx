import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Categories = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://ultimatetoyverse-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://ultimatetoyverse-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='pt-5 text-center bg-dark text-white mt-5'>
            <h1 className='text-center text-warning'>Shop By Category</h1>
            <Tabs className='p-5'>
                <TabList>
                    {
                        categories.map(category => <Tab
                            key={category._id}
                        >{category.name}</Tab>)
                    }
                </TabList>

                <TabPanel>
                    <CardGroup className='row g-0 text-center align-items-center'>
                        <Card className='col-md-6 m-5 bg-dark text-white' style={{ width: '18rem' }}>
                            <Card.Img width="100%" height="400px" variant="top" src={toys[0]?.picture} />
                            <Card.Body>
                                <Card.Title className='text-warning'>{toys[0]?.toy_name}</Card.Title>
                                <Card.Text>
                                    Price: ${toys[0]?.price}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {toys[0]?.rating}
                                </Card.Text>
                                <Link className='text-decoration-none btn btn-warning' to={`/toydetails/${toys[0]?._id}`}>View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card className='col-md-6 m-5 bg-dark text-white' style={{ width: '18rem' }}>
                            <Card.Img width="100%" height="400px" variant="top" src={toys[1]?.picture} />
                            <Card.Body>
                                <Card.Title className='text-warning'>{toys[1]?.toy_name}</Card.Title>
                                <Card.Text>
                                    Price: ${toys[1]?.price}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {toys[1]?.rating}
                                </Card.Text>
                                <Link className='text-decoration-none btn btn-warning' to={`/toydetails/${toys[1]?._id}`}>View Details</Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <CardGroup className='row g-0 text-center align-items-center'>
                        <Card className='col-md-6 m-5 bg-dark text-white' style={{ width: '18rem' }}>
                            <Card.Img width="100%" height="400px" variant="top" src={toys[2]?.picture} />
                            <Card.Body>
                                <Card.Title className='text-warning'>{toys[2]?.toy_name}</Card.Title>
                                <Card.Text>
                                    Price: ${toys[2]?.price}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {toys[2]?.rating}
                                </Card.Text>
                                <Link className='text-decoration-none btn btn-warning' to={`/toydetails/${toys[2]?._id}`}>View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card className='col-md-6 m-5 bg-dark text-white' style={{ width: '18rem' }}>
                            <Card.Img width="100%" height="400px" variant="top" src={toys[3]?.picture} />
                            <Card.Body>
                                <Card.Title className='text-warning'>{toys[3]?.toy_name}</Card.Title>
                                <Card.Text>
                                    Price: ${toys[3]?.price}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {toys[3]?.rating}4                                    
                                </Card.Text>
                                    <Link className='text-decoration-none btn btn-warning' to={`/toydetails/${toys[3]?._id}`}>View Details</Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <CardGroup className='row g-0 text-center align-items-center'>
                        <Card className='col-md-6 m-5 bg-dark text-white' style={{ width: '18rem' }}>
                            <Card.Img width="100%" height="400px" variant="top" src={toys[4]?.picture} />
                            <Card.Body>
                                <Card.Title className='text-warning'>{toys[4]?.toy_name}</Card.Title>
                                <Card.Text>
                                    Price: ${toys[4]?.price}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {toys[4]?.rating}
                                </Card.Text>
                                <Link className='text-decoration-none btn btn-warning' to={`/toydetails/${toys[4]?._id}`}>View Details</Link>
                            </Card.Body>
                        </Card>
                        <Card className='col-md-6 m-5 bg-dark text-white' style={{ width: '18rem' }}>
                            <Card.Img width="100%" height="400px" variant="top" src={toys[5]?.picture} />
                            <Card.Body>
                                <Card.Title className='text-warning'>{toys[5]?.toy_name}</Card.Title>
                                <Card.Text>
                                    Price: ${toys[5]?.price}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {toys[5]?.rating}
                                </Card.Text>
                                <Link className='text-decoration-none btn btn-warning' to={`/toydetails/${toys[5]?._id}`}>View Details</Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;