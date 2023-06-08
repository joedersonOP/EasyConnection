import { Col } from "react-bootstrap";
import './Tecnologias.css';
import BannerPD from "../../components/BannerPD";
import bannerNoticia from "../../assets/bannerNoticias.png"
import CardTecnologias from "../../components/CardTecnologias";


const Tecnologias = () => {
    const tecnologias = [
        { "cod_tecnologia": 1, "titulo": "Conheça os Benefícios da Agricultura Vertical!", "conteudo": "A agricultura vertical é a prática de cultivar culturas em camadas empilhadas verticalmente em um ambiente controlado, onde um ambiente natural é modificado para aumentar o rendimento da colheita.", "imagem": "tecnologia_1.jpg", "link": "https://agropos.com.br/agricultura-vertical" },
        { "cod_tecnologia": 2, "titulo": "Integrar criação de peixes com hortaliças economiza 90% de água e elimina químicos", "conteudo": "A criação de peixes associada ao cultivo de hortaliças, chamada de aquaponia, pode economizar até 90% de água em relação à agricultura convencional e ainda eliminar completamente a liberação de efluentes no meio ambiente, pois trata-se de um sistema fechado, diferentemente das criações convencionais. Motivados por essas vantagens, pesquisadores da Embrapa Tabuleiros Costeiros (SE) têm desenvolvido sistemas de diferentes portes de aquaponia que podem ser de produção doméstica ou mesmo em escala industrial.", "imagem": "tecnologia_2.jpg", "link": "https://www.embrapa.br/busca-de-noticias/-/noticia/2767622/integrar-criacao-de-peixes-com-hortalicas-economiza-90-de-agua-e-elimina-quimicos" },
        { "cod_tecnologia": 3, "titulo": "Agricultura sustentável, entenda tudo sobre: contexto, definição, exemplos", "conteudo": "Agricultura sustentável é aquela que respeita o meio ambiente, é justa do ponto de vista social e consegue ser economicamente viável. A agricultura para ser considerada sustentável deve garantir, às gerações futuras, a capacidade de suprir as necessidades de produção e qualidade de vida no planeta.", "imagem": "tecnologia_3.jpg", "link": "https://meiosustentavel.com.br/agricultura-sustentavel/" }
    ]
    return (
        <>
            <BannerPD img={bannerNoticia} titulo={'Tecnologias'} />
            <Col className="teste m-3 d-flex justify-content-center">
                {tecnologias.slice(0, 3).map((tecnologia) => (
                    <CardTecnologias key={tecnologia.cod_tecnologia} titulo={tecnologia.titulo} descricao={tecnologia.conteudo} imagem={tecnologia.imagem} link={tecnologia.link} />
                ))}
            </Col>
        </>
    );
}

export default Tecnologias;