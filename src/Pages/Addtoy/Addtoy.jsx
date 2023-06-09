import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProviders';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Addtoy = () => {

    const pageTitle = 'Ultimate Toy Verse | Add Toy'

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
        fetch("https://ultimatetoyverse-server.vercel.app/addtoy", {
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
        <Helmet><title>{pageTitle}</title></Helmet>

            <Form onSubmit={handleAddtoy}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name='picture' type="text" placeholder="Enter Picture URL" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Toy Name</Form.Label>
                    <Form.Control name='toy_name' type="text" placeholder="Enter Toy Name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control name='seller_name' type="text" defaultValue={user?.displayName} placeholder="Enter Seller Name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Seller Email address</Form.Label>
                    <Form.Control name='seller_email' type="email" defaultValue={user?.email} placeholder="Enter Seller Email address" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name='category' type="text" placeholder="Enter Category" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' type="number" step="0.01" placeholder="Enter Price" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name='rating' type="text" placeholder="Enter Rating" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Available Quantity</Form.Label>
                    <Form.Control name='available_quantity' type="number" placeholder="Enter Quantity" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Detail Description</Form.Label>
                    <Form.Control name='detail_description' type="text" placeholder="Enter Description" />
                </Form.Group>

                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Addtoy;