import React from 'react';
import { Card, Image, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const pageTitle = 'Ultimate Toy Verse | Toy Detail'
    const toy = useLoaderData();

    return (
        <div className='bg-dark m-5 text-white row g-0 text-center align-items-center'>
            <Helmet><title>{pageTitle}</title></Helmet>

            <div className='col-md-6 p-5'>
                <Image width={"50%"} src={toy.picture}></Image>
                <h1 className='text-warning'>{toy.toy_name}</h1>
                <p>{toy.detail_description}</p>
            </div>
            <div className='col-md-6 p-5'>
                <p>Seller Name: {toy.seller_name}</p>
                <p>Seller Email: {toy.seller_email}</p>
                <p>Price: ${toy.price}</p>
                <p>Rating: {toy.rating}</p>
                <p>Quantity: {toy.available_quantity}</p>
            </div>
        </div>
    );
};

export default ToyDetails;