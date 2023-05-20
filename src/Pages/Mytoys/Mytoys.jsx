import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mytoys = ({ toy }) => {
    return (
        <div>
            {
                <Card className='m-5 text-white flex-row align-items-center justify-content-around' style={{ backgroundColor: "GrayText" }}>
                    <Card.Img style={{ width: "20%", height: "100px" }} variant="top" src={toy?.picture} />
                    <Card.Title className='text-warning'>{toy?.toy_name}</Card.Title>
                    <Card.Text>
                        Price: {toy?.price}
                    </Card.Text>
                    <Card.Text>
                        Seller: {toy?.seller_name}
                    </Card.Text>
                    <Card.Text>
                        Sub-Category: {toy?.category}
                    </Card.Text>
                    <Button variant="info"><Link className='text-decoration-none text-dark' to={`/updatetoy/${toy._id}`}>Update</Link></Button>
                    <Button variant="danger"><Link className='text-decoration-none text-dark'>Delete</Link></Button>
                </Card>
            }
        </div>
    );
};

export default Mytoys;