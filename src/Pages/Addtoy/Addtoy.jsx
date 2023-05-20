import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProviders';
import { toast } from 'react-toastify';

const Addtoy = () => {

    const { user } = useContext(AuthContext);

    const handleAddtoy = event => {
        event.preventDefault();
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
        const toy = {picture, toy_name, seller_name, seller_email, price, rating, available_quantity, category, detail_description}
        fetch("http://localhost:5000/addtoy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toy),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        form.reset();
        toast.success(`Successfully Added ${toy_name}`)
    }

    return (
        <div className='bg-dark p-5 w-50 mx-auto mt-5 shadow text-white'>
            <Form onSubmit={handleAddtoy}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name='picture' type="text" placeholder="Enter Picture URL" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Toy Name</Form.Label>
                    <Form.Control name='toy_name' type="text" placeholder="Enter Toy Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control name='seller_name' type="text" value={user?.displayName} placeholder="Enter Seller Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Seller Email address</Form.Label>
                    <Form.Control name='seller_email' type="email" value={user?.email} placeholder="Enter Seller Email address" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name='category' type="text" placeholder="Enter Category" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' type="number" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name='rating' type="text" placeholder="Enter Rating" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Available Quantity</Form.Label>
                    <Form.Control name='available_quantity' type="number" placeholder="Enter Quantity" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Detail Description</Form.Label>
                    <Form.Control name='detail_description' type="text" placeholder="Enter Description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Addtoy;