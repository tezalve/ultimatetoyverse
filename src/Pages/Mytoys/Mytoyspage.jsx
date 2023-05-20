import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';

const Mytoyspage = () => {

    const { user } = useContext(AuthContext);
    const toy = useLoaderData();

    return (
        <div>
            my toys
        </div>
    );
};

export default Mytoyspage;