import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarIcon from './CarIcon';
import LogoNav from './LogoNav';
import {Link, NavLink} from 'react-router-dom'


const NavBar =()=> {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to='/'>
            <LogoNav />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                
            <Nav.Link href="#features">Hombres</Nav.Link>
            <Nav.Link href="#pricing">Mujeres</Nav.Link>

            </Nav>
            <Nav>
                <Link to='/cart'>
                    <CarIcon/>
                </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default NavBar;