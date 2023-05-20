import React from 'react';
import { Image } from 'react-bootstrap';
import lost from '../../../public/gifs/lost.gif'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='text-center'>
            <Image src={lost}></Image>
            <br />
            <Link to={'/'}>Back To Home</Link>
        </div>
    );
};

export default Notfound;