import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';
import Mytoys from './Mytoys';

const Mytoyspage = () => {

    const { user } = useContext(AuthContext);
    const toys = useLoaderData();

    return (
        <div className='bg-dark p-5'>
            {
                toys.length > 0?
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