import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProviders';

const Updatetoy = () => {

    const { user } = useContext(AuthContext);
    const toy = useLoaderData();

    const navigate = useNavigate();

    const handleUpdatetoy = () => {
        event.preventDefault();
        const _id = toy._id;
        const form = event.target;
        const picture = form.picture.value;
        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const detail_description = form.detail_description.value;
        const updatetoy = {_id, picture, toy_name, seller_name, seller_email, price, rating, available_quantity, category, detail_description }
        fetch("https://ultimatetoyverse-server.vercel.app/updatetoy", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatetoy),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        toast.success(`Successfully Updated toy of ID: "${_id}"`);
        navigate(`/`);
    }

    return (
        <div className='bg-dark p-5 w-50 mx-auto mt-5 shadow text-white'>
            <Form onSubmit={handleUpdatetoy}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name='picture' type="text" defaultValue={toy?.picture} placeholder="Enter Picture URL" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Toy Name</Form.Label>
                    <Form.Control name='toy_name' type="text" defaultValue={toy?.toy_name} placeholder="Enter Toy Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control name='seller_name' type="text" defaultValue={toy?.seller_name} placeholder="Enter Seller Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Seller Email address</Form.Label>
                    <Form.Control name='seller_email' type="email" defaultValue={toy?.seller_email} placeholder="Enter Seller Email address" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name='category' type="text" defaultValue={toy?.category} placeholder="Enter Category" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' type="number" defaultValue={toy?.price} placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name='rating' type="text" defaultValue={toy?.rating} placeholder="Enter Rating" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Available Quantity</Form.Label>
                    <Form.Control name='available_quantity' type="number" defaultValue={toy?.available_quantity} placeholder="Enter Quantity" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Detail Description</Form.Label>
                    <Form.Control name='detail_description' type="text" defaultValue={toy?.detail_description} placeholder="Enter Description" />
                </Form.Group>

                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Updatetoy;