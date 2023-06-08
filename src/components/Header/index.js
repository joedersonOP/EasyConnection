import './Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/Menu';
import Logo from '../../assets/logoEasy.png';
import { Link } from 'react-router-dom';
import MenuHamburguer from '../MenuHamburguer';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 915 });

    return (
        <>
            <Row className='Header'>
                <Col sm={3} className='d-flex justify-content-center'>
                    <Link to='/'>
                        <img src={Logo} alt="Logo Easy Connection" />
                    </Link>
                </Col>
                {isMobile ? (
                    <Col sm={7}><MenuHamburguer /></Col>
                ) : (
                    <>
                        <Col><Menu /></Col>
                        <Col sm={6} className='d-none'><MenuHamburguer /></Col>
                    </>
                )}
            </Row>
        </>
    )
}

export default Header;