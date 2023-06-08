import { Col } from "react-bootstrap";
import './Noticias.css';
import CardNoticias from "../../components/CardNoticias";
import BannerPD from "../../components/BannerPD";
import bannerNoticia from "../../assets/bannerNoticias.png"

const Noticias = () => {

    const noticias = [{ cod_noticia: 1, titulo: "Brasil desperdiça cerca de 27 milhões de toneladas de alimentos por ano; 60% vêm do consumo de famílias", conteudo: "Um levantamento da ONU mostra que o Brasil desperdiça por ano cerca de 27 milhões de toneladas de alimentos. Estima-se que 80% desse desperdício acontece no manuseio, transporte e centrais de abastecimento.", imagem: "noticia1.jpg", link: "https://g1.globo.com/profissao-reporter/noticia/2022/02/24/brasil-desperdica-cerca-de-27-milhoes-de-toneladas-de-alimentos-por-ano-60percent-vem-do-consumo-de-familias.ghtml" },
    { cod_noticia: 2, titulo: "Brasil é o 10º país que mais desperdiça alimentos no mundo", conteudo: "O Brasil é um dos principais produtores de alimentos do mundo, mas infelizmente também é um dos países com o maior índice de desperdício de alimentos. De acordo com dados do IBGE, cerca de 30% dos alimentos produzidos no país acabam sendo jogados fora, o equivalente a cerca de 46 milhões de toneladas de alimentos por ano.", imagem: "noticia2.jpg", link: "https://mercadoeconsumo.com.br/26/01/2023/sustentabilidade/brasil-e-o-10o-pais-que-mais-desperdica-alimentos-no-mundo/" },
    { cod_noticia: 3, titulo: "Comida desperdiçada no Brasil poderia alimentar 12 milhões de pessoas", conteudo: "Enquanto cerca de 19 milhões de brasileiros estão passando fome, o desperdício de comida no país poderia alimentar 12 milhões de pessoas por ano. Estes são dados de dois estudos publicados em 2021 pela Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede Penssan) e pelo Programa das Nações Unidas para o Meio Ambiente. E mostram que o desperdício de alimentos é um grave problema ambiental e social que precisamos combater com urgência.", imagem: "noticia3.jpg", link: "https://ciclovivo.com.br/mao-na-massa/faca-voce-mesmo/comida-desperdicada-no-brasil-poderia-alimentar-12-milhoes-de-pessoas/" },
    { cod_noticia: 4, titulo: "Desperdício de alimentos: causas e prejuízos", conteudo: "Você sabia que o desperdício de alimentos atinge um terço de toda a comida produzida no mundo? Pois é, a política do mercado financeiro que gera produção em excesso e o transporte são fatores significativos para esse problema. Mas além disso, há desperdício de alimentos na cozinha da nossa casa. Vamos dar uma olhada mais profunda nessa questão.", imagem: "noticia4.jpg", link: "https://www.ecycle.com.br/desperdicio-de-alimentos/" }, { cod_noticia: 5, titulo: "PNUMA e FAO convocam movimento no Brasil para reduzir perdas e desperdícios de alimentos", conteudo: "O Dia Internacional de Conscientização sobre Perdas e Desperdícios de Alimentos foi celebrado pelo segundo ano consecutivo nesta quarta-feira (29). No Brasil, o Programa das Nações Unidas para o Meio Ambiente (PNUMA) e a Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) realizaram uma campanha digital de sensibilização e ações em conjunto com governos estaduais e municipais em várias regiões do país.", imagem: "noticia5.jpg", link: "https://www.unep.org/pt-br/noticias-e-reportagens/comunicado-de-imprensa/pnuma-e-fao-convocam-movimento-no-brasil-para-reduzir" },
    { cod_noticia: 6, titulo: "Velit exercitation in non.", conteudo: "Dolor id eu cillum ad tempor ex ex aliquip ea incididunt proident proident aliquip non ad velit est esse aliquip exercitation in ut deserunt dolor.", imagem: "noticia6.jpg", link: "#" }];

    return (
        <>
            <BannerPD img={bannerNoticia} titulo={'Notícias'} />
            <Col className="teste m-3 d-flex justify-content-center">
                {noticias.slice(0, 6).map((noticia) => (
                    <CardNoticias key={noticia.cod_noticia} titulo={noticia.titulo} descricao={noticia.conteudo} imagem={noticia.imagem} link={noticia.link} />
                ))}
            </Col>
        </>
    );
}

export default Noticias;