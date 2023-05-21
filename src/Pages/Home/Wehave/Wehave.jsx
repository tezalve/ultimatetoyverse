import React from 'react';
import mando from '../../../../public/images/mando.png'
import { Image } from 'react-bootstrap';
import './Wehave.css'

const Wehave = () => {
    return (
        <div className='bg-dark text-white mt-5'>
            <h1 className='text-warning text-center p-5'>What We Have</h1>
            <div className='text-center row g-0'>
                <div className='col-md-3'>
                    <Image className='tr' width={"100%"} src={mando}></Image>
                </div>
                <div className='col-md-9'>
                    <p className='border-top border-bottom' style={{ fontSize: "40px" }}>Marvel's Avengers</p>
                    <p className='border-top border-bottom' style={{ fontSize: "40px" }}>Naruto</p>
                    <p className='border-top border-bottom text-warning border-warning' style={{ fontSize: "40px" }}>Star Wars <span style={{ fontSize: "20px" }}> 65+ toys </span> </p>
                    <p className='border-top border-bottom' style={{ fontSize: "40px" }}>Transformers</p>
                </div>
            </div>
        </div>
    );
};

export default Wehave;