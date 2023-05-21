import React from 'react';
import logo from '../../../../public/logo/logo.png'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-white mt-5'>
            <div className='row p-5 g-0 text-center align-items-center'>
                <div className='col-md-4'>
                    <h3 className='text-warning'>UltimateToyVerse</h3>
                    <p>Unleash Your Heroic Adventures!</p>
                </div>

                <div className='col-md-4'>
                    <Image src={logo}></Image>
                </div>

                <div className='col-md-4'>
                    <p>Email: utv@jmail.com</p>
                    <p>Phone: +990 098097362</p>
                    <p>Address: 57th Street, Neverplace</p>
                </div>
            </div>

            <div className='text-center'>
                <Link className='p-1 text-decoration-none text-info'>Facebook</Link>
                <Link className='p-1 text-decoration-none text-info'>Twitter</Link>
                <Link className='p-1 text-decoration-none text-info'>MySpace</Link>
                <Link className='p-1 text-decoration-none text-info'>Twitch</Link>
            </div>

            <div className='pt-3'> 
                <h4 className='text-center'>Copyright 2023 @ UltimateToyVerse</h4>
            </div>

        </div>
    );
};

export default Footer;