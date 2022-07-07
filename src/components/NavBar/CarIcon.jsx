import Nav from 'react-bootstrap/Nav';
import carrito from '..//..//images/carrito.png'

const CarIcon =()=> {
    return (
        <div className='w-25'>    
        <Nav.Link href="#"><img src={carrito} className='w-25' /></Nav.Link>
        </div>
    )
}

export default CarIcon