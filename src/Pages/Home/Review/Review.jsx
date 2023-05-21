import React from 'react';
import { Card } from 'react-bootstrap';

const Review = () => {
    return (
        <div className='bg-dark text-white p-5 mt-5'>
            <h1 className='text-warning text-center mb-5'>Satisfied Customers</h1>
            <Card className='mb-5' style={{backgroundColor: "GrayText"}}>
                <Card.Header>Stars: 4.1</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Exceptional selection, top-notch quality, and outstanding customer service make this action figure shop a true gem for enthusiasts. From the impressive range of figures to the knowledgeable staff, every aspect of the experience is delightful. Highly recommended for all collectors seeking a memorable shopping experience!.{' '}
                        </p>
                        <footer className="blockquote-footer text-light">
                            <cite title="Source Title">Emily Johnson</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='mb-5' style={{backgroundColor: "GrayText"}}>
                <Card.Header>Stars: 4.2</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            My kid couldn't contain their excitement when we visited this action figure shop! The wide selection of figures brought a big smile to their face, and the staff's friendly assistance made it even better. Seeing their joy as they carefully chose their favorite figure was priceless. Highly recommended for a delightful shopping experience that will make any kid happy.{' '}
                        </p>
                        <footer className="blockquote-footer text-light">
                            <cite title="Source Title">Benjamin Martinez</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='mb-5' style={{backgroundColor: "GrayText"}}>
                <Card.Header>Stars: 4.8</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            This action figure shop exceeded all expectations when it came to making my child happy! The moment they walked in, their eyes lit up with joy at the sight of the vast collection. The friendly staff went above and beyond, engaging with my child and helping them find their dream action figure. Their beaming smile and excitement throughout the entire visit was priceless. A must-visit destination for creating unforgettable moments of happiness for your little one!.{' '}
                        </p>
                        <footer className="blockquote-footer text-light">
                            <cite title="Source Title">Sophia Thompson</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;