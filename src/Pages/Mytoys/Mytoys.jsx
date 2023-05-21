import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Mytoys = ({ toy }) => {

    const handleDelete = (_id) => {
        var result = confirm("Are you sure you want to delete?");

        if (result) {
            fetch(`https://ultimatetoyverse-server.vercel.app/deletetoy/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            toast.success(`"${toy.toy_name}" deleted succesfully`);
        }
    }

    return (
        <div>
            {
                <Card className='m-5 text-white flex-row align-items-center justify-content-around' style={{ backgroundColor: "GrayText" }}>
                    <Card.Img style={{ width: "20%", height: "100px" }} variant="top" src={toy?.picture} />
                    <Card.Title className='text-warning'>{toy?.toy_name}</Card.Title>
                    <Card.Text>
                        Price: ${toy?.price}
                    </Card.Text>
                    <Card.Text>
                        Seller: {toy?.seller_name}
                    </Card.Text>
                    <Card.Text>
                        Sub-Category: {toy?.category}
                    </Card.Text>
                    <Link className='text-decoration-none text-dark btn btn-info' to={`/updatetoy/${toy._id}`}>Update</Link>
                    <Button onClick={() => handleDelete(toy._id)} variant="danger">Delete</Button>
                </Card>
            }
        </div>
    );
};

export default Mytoys;