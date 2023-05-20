import React, { useEffect, useState } from 'react';

const Mytoyspage = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            my toys
        </div>
    );
};

export default Mytoyspage;