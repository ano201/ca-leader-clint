import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const AddNewItem = () => {

    const [success, setSuccess] = useState(false);
    const [rating, setRating] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRating = { ...rating };
        newRating[field] = value;
        setRating(newRating);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch('https://young-depths-96533.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} style={{ maxWidth: '450px' }} className='m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} type="Text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} type="Text" name='img' placeholder="Enter Image Link" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} name='shortDescription' as="textarea" rows={2} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Full Description</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} name='fullDescription' as="textarea" rows={4} />
                </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} type="number" name='cost' placeholder="Enter Price" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {success && <Alert variant='primary'>
                New Item Successfylly Added...
            </Alert>}
        </div>
    );
};

export default AddNewItem;