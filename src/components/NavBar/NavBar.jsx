import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarIcon from './CarIcon';
import LogoNav from './LogoNav';
import ProfileIcon from './ProfileIcon';

const NavBar =()=> {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <LogoNav />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Hombres</Nav.Link>
            <Nav.Link href="#pricing">Mujeres</Nav.Link>
            <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Adidas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Puma</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <CarIcon />
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default NavBar;