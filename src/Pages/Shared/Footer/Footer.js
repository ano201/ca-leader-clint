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
                    <Col className='d-flex justify-content-around border'>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#home'>Home</HashLink>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/explore'>Cars</HashLink>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#review'>Review</HashLink>
                        <HashLink className='text-decoration-none text-light fw-bolder' to='/home#testimonial'>Testimonial</HashLink>
                    </Col>
                </Row>
                <Row>
                    <Col md='6' sm='12' className='my-3'>
                        <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSq4UseyC_QBUTR2cY55NIUzI6zso8xHf5A&usqp=CAU" alt="" />
                    </Col>
                    <Col md='6' sm='12'>
                        <h3 className='text-light'>Ensuring your satisfication is our passion</h3>
                        <p>CaLeader has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.</p>
                    </Col>
                </Row>
                <div className='text-center'><small>&copy;2021 this site is created by Murad</small></div>
            </Container>
        </div>
    );
};

export default Footer;