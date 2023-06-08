import "./BannerPD.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BannerPD = (props) => {
    return (
        <div>
            <Row>
                <Col className="Banner" sm={12} style={{ backgroundImage: `url(${props.img})` }}>
                    {/* <img src={props.img} alt="Imagem"/> */}
                    <h1 md={6}>{props.titulo}</h1>
                </Col>
            </Row>
        </div>
    )
}

export default BannerPD;