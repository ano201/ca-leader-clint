import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Product from '../Shared/Product/Product';

const Explore = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://young-depths-96533.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <div id='explore' style={{ background: '#D6DBDF' }}>
            <Navigation></Navigation>
            <Container style={{ background: '#D6DBDF', minHeight: '80vh' }}>
                <Row>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;