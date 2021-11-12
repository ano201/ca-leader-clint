import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='position-relative'>
            <img className='img-fluid' src={'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/slide-02.jpg'} alt="" />
            <Container className='position-absolute me-auto text-light' style={{ bottom: 15, fontSize: 70 }}>
                <p>Accelerating The Future</p>
            </Container>
        </div>
    );
};

export default Banner;