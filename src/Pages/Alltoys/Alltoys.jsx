import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Alltoys = ({ toy }) => {
    return (
        <div>
            {
                <Card className='m-5 text-white flex-row align-items-center justify-content-between' style={{backgroundColor: "GrayText"}}>
                    <Card.Img style={{width: "20%", height: "100px"}} variant="top" src={toy?.picture} />
                    <Card.Title className='text-warning'>{toy?.toy_name}</Card.Title>
                    <Card.Text>
                        Price: ${toy?.price}
                    </Card.Text>
                    <Card.Text>
                        Seller: {toy?.seller_name}
                    </Card.Text>
                    <Card.Text>
                        Sub-Category: {toy?.category}
                    </Card.Text>
                    <Card.Text>
                        Available Quantity: {toy?.available_quantity}
                    </Card.Text>
                    <Link className='text-decoration-none btn btn-warning' to={`/toydetails/${toy?._id}`}>View Details</Link>
                </Card>
            }
        </div>
    );
};

export default Alltoys;