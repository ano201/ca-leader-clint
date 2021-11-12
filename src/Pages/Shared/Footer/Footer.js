import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <div className='bg-secondary mt-3'>
            <Container>
                <div className='w-25 m-auto'>
                    <img className='img-fluid' src="https://smartdata.tonytemplates.com/caleader/wp-content/themes/caleader/assets/images/logo-dark.svg" alt="" />
                </div>
                <Row>
                    <Col md='6' sm='12' className='d-flex justify-content-around'>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#home'>Home</HashLink>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#cars'>Cars</HashLink>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#review'>Review</HashLink>
                    </Col>
                    <Col md='6' sm='12' className='d-flex justify-content-around'>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#testimonial'>Testimonial</HashLink>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#testimonial'>Testimonial</HashLink>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#testimonial'>Testimonial</HashLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;