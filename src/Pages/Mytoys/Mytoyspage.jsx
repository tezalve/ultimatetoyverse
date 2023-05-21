import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mytoys from './Mytoys';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Mytoyspage = () => {

    const pageTitle = 'Ultimate Toy Verse | Mytoys'
    const toys = useLoaderData();
    const [sorted, setSorted] = useState(false);
    const [sortedToys, setSortedtoys] = useState('');

    const aSort = () => {
        
        setSortedtoys([...toys].sort((a, b) => a.price - b.price))
        setSorted(true);
    }
    const dSort = () => {
        setSortedtoys([...toys].sort((a, b) => b.price - a.price))
        setSorted(true);
    }
    const Unort = () => {
        setSorted(false);
    }

    return (
        <div className='bg-dark p-5'>
            <Helmet><title>{pageTitle}</title></Helmet>
            {
                toys.length > 0 ?
                    <div className='text-center'>
                        <Button variant='warning' className='m-2' onClick={aSort}>Ascending Sort</Button>
                        <Button variant='warning' className='m-2' onClick={dSort}>Descending Sort</Button>
                        <Button variant='warning' className='m-2' onClick={Unort}>Default</Button>
                    </div>
                    :
                    ""
            }
            {
                toys.length > 0 ?
                    sorted ?
                        sortedToys.map(toy => <Mytoys
                            key={toy._id}
                            toy={toy}
                        ></Mytoys>)
                        :
                        toys.map(toy => <Mytoys
                            key={toy._id}
                            toy={toy}
                        ></Mytoys>)
                    :
                    <p className='text-white text-center'>No Toys To Show</p>
            }
        </div>
    );
};

export default Mytoyspage;