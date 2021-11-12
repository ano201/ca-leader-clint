import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {

    const { user, logOut } = useAuth();
    const cStyle = 'text-decoration-none ms-2 text-secondary hdark';
    return (
        <Navbar className='sticky-top mb-4' bg="light" expand="lg">
            <Container>
                <HashLink to='/home#home'>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={"https://smartdata.tonytemplates.com/caleader/wp-content/themes/caleader/assets/images/logo-dark.svg"}
                            width="150"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </HashLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bolder d-flex align-items-center">
                        <HashLink className={cStyle} to='/home#home'>Home</HashLink>
                        <HashLink className={cStyle} to='/explore#explore'>Explore More</HashLink>
                        {
                            user?.email ? <><Link className={cStyle} to='/dashboard'>Dashboard</Link>
                                <Button onClick={logOut} className='ms-2' variant="outline-secondary" color="inherit">{user.displayName} Logout</Button>
                            </> :
                                <Link className={cStyle} to='/login'>Login/Registration</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;