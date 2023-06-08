import "./CardHome.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoticiasImg from '../../assets/ImagemNoticias.png';
import TecnologiasImg from '../../assets/ImagemTecnologia.png';
import { Link } from "react-router-dom";

const CardHome = () => {
    return (
        <Row className="Card" sm={12}>
            <Col className="Noticias" style={{ backgroundImage: `url(${NoticiasImg})` }}>
                <h2 sm={6}>Notícias</h2>
                <Link to='/noticias'>
                    <button>Acessar Conteúdo</button>
                </Link>
            </Col>

            <Col className="Tecnologias" style={{ backgroundImage: `url(${TecnologiasImg})` }}>
                <h2 sm={6}>Tecnologias</h2>
                <Link to='/tecnologias'>
                    <button>Acessar Conteúdo</button>
                </Link>
            </Col>
        </Row>
    )
}

export default CardHome;