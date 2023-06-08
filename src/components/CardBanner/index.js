import "./CardBanner.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const CardBanner = () => {
    return (
        <Row className="BannerCard">
            <Col>
                <h3 sm={12}>Faça parte do EasyConnection</h3>
                <p>A plataforma de doação de alimentos EasyConnection buscará diminuir o índice de fome, promovendo a segurança alimentar, a melhoria da nutrição e o avanço da agricultura sustentável até 2030. Facilitando a conexão entre doadores e requisitantes, utilizando tecnologias inovadoras para aproveitar o potencial da IA generativa, esperamos criar um ecossistema alimentar mais justo, equitativo e sustentável para todos.
</p>
                <Link to='/inscrever'>
                    <button className="BotaoBanner">Se Inscreva</button>
                </Link>
            </Col>
        </Row>
    )
}

export default CardBanner;