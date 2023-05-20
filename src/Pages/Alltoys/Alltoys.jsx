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
                        Price: {toy?.price}
                    </Card.Text>
                    <Card.Text>
                        Rating: {toy?.rating}
                    </Card.Text>
                    <Button variant="warning"><Link className='text-decoration-none' to={`/toydetails/${toy?._id}`}>View Details</Link></Button>
                </Card>
            }
        </div>
    );
};

export default Alltoys;