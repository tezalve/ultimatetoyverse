import React, { useEffect, useState } from 'react';
import Alltoys from './Alltoys';

const Alltoyspage = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='bg-dark text-white p-5'>
            {
                toys.map(toy => <Alltoys
                key={toy._id}
                toy={toy}
                ></Alltoys>)
            }
        </div>
    );
};

export default Alltoyspage;