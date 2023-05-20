import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';
import Mytoys from './Mytoys';

const Mytoyspage = () => {

    const { user } = useContext(AuthContext);
    const toys = useLoaderData();

    return (
        <div>
            {
                toys.map(toy => <Mytoys
                key={toy._id}
                toy={toy}
                ></Mytoys>)
            }
        </div>
    );
};

export default Mytoyspage;