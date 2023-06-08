import 'swiper/css';
import './Home.css';
import backGroundVideo from '../../assets/ods2.mp4';
import CardHome from '../../components/CardHome';
import CardBanner from '../../components/CardBanner';
import QuemSomos from '../../components/QuemSomos';

const Home = () => {
    const integrantes = [{
        nome: 'Joederson Pereira',
        rm: 'RM97192',
        turma: '1TDSPT',
        foto: './images/integrantes/Joederson.jpg'
    },
    {
        nome: 'Igor Lemos',
        rm: 'RM97012',
        turma: '1TDSPT',
        foto: './images/integrantes/Igor.jpg'
    },
    {
        nome: 'Ricardo Antunes',
        rm: 'RM97439',
        turma: '1TDSPT',
        foto: './images/integrantes/Ricardo.jpg'
    },
    {
        nome: 'Mario Ito',
        rm: 'RM96950',
        turma: '1TDSPT',
        foto: './images/integrantes/Mario.jpg'
    },
    {
        nome: 'Pablo Lage',
        rm: 'RM97282',
        turma: '1TDSPT',
        foto: './images/integrantes/Pablo.jpg'
    }
    ];
    return (
        <div className="homePage">
            <div className='container-video'>
                <video className="video-element" autoPlay loop>
                    <source src={backGroundVideo} type="video/mp4" />
                </video>
            </div>
            <CardHome />
            <CardBanner />
            <h2 id="estilo_integrantes">Integrantes EasyConnection</h2>
            <div className="d-flex justify-content-center flex-wrap">
                {integrantes.map((integrante) => (
                    <QuemSomos key={integrante.rm} nome={integrante.nome} turma={integrante.turma} rm={integrante.rm} foto={integrante.foto} />
                ))}
            </div>
        </div>
    )
}

export default Home;