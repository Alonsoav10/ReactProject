import Navbar from 'react-bootstrap/Navbar';
import logo from '..//..//images/logo.png'

const LogoNav =()=> {
    return (
        <div className='w-25'>    
        <Navbar.Brand href="#home"><img src={logo} className='w-25' /></Navbar.Brand>
        </div>
    )
}

export default LogoNav