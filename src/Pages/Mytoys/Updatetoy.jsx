import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updatetoy = () => {

    const toy = useLoaderData();

    return (
        <div>
            {toy.toy_name}
        </div>
    );
};

export default Updatetoy;