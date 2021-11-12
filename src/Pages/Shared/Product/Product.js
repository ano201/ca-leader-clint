import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, shortDescription, cost, _id } = product;
    return (
        <Col>
            <Card style={{ width: '18rem', background: 'inherit' }} className="mb-3 border-0 m-auto">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Card.Text>
                        Price: {cost}
                    </Card.Text>
                    <Link to={`/product/${_id}`}><Button variant="primary">Buy Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;