import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import gallery1 from '../../../../public/images/gal1.png'
import gallery2 from '../../../../public/images/gal2.png'
import gallery3 from '../../../../public/images/gal3.png'
import gallery4 from '../../../../public/images/gal4.png'
import gallery5 from '../../../../public/images/gal5.png'
import gallery6 from '../../../../public/images/gal6.png'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='bg-dark mt-5'>
            <div>
                <h1 className='text-center text-warning pt-2'>Gallery</h1>
            </div>
            <CardGroup>
                <div className='col-md-4 p-5'>
                    <Card className='border border-dark' style={{backgroundColor: "GrayText"}}>
                        <Card.Img className='gal' width={"100%"} height={"350px"} variant="top" src={gallery1} />
                    </Card>
                </div>
                <div className='col-md-4 p-5'>
                    <Card className='border border-dark' style={{backgroundColor: "GrayText"}}>
                        <Card.Img className='gal' width={"100%"} height={"350px"} variant="top" src={gallery2} />
                    </Card>
                </div>
                <div className='col-md-4 p-5'>
                    <Card className='border border-dark' style={{backgroundColor: "GrayText"}}>
                        <Card.Img className='gal' width={"100%"} height={"350px"} variant="top" src={gallery3} />
                    </Card>
                </div>
                <div className='col-md-4 p-5'>
                    <Card className='border border-dark' style={{backgroundColor: "GrayText"}}>
                        <Card.Img className='gal' width={"100%"} height={"350px"} variant="top" src={gallery4} />
                    </Card>
                </div>
                <div className='col-md-4 p-5'>
                    <Card className='border border-dark' style={{backgroundColor: "GrayText"}}>
                        <Card.Img className='gal' width={"100%"} height={"350px"} variant="top" src={gallery5} />
                    </Card>
                </div>
                <div className='col-md-4 p-5'>
                    <Card className='border border-dark' style={{backgroundColor: "GrayText"}}>
                        <Card.Img className='gal' width={"100%"} height={"350px"} variant="top" src={gallery6} />
                    </Card>
                </div>
            </CardGroup>
        </div>
    );
};

export default Gallery;