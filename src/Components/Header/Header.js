import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TO DO APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/todo'>To Do</Nav.Link>
                        <Nav.Link as={Link} to='/'>Completed Task</Nav.Link>
                        <Nav.Link as={Link} to='/calender'>Calender</Nav.Link>
                    
                        {
                            user ? <Nav.Link onClick={() => signOut(auth)}>SignOUt</Nav.Link>
                            :
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;