import Nav from 'react-bootstrap/Nav';
import profile from '..//..//images/profile.png'

const ProfileIcon =()=> {
    return (
        <div className='w-25'>    
        <Nav.Link href="#"><img src={profile} className='w-25' /></Nav.Link>
        </div>
    )
}

export default ProfileIcon