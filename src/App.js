import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import Header from './components/Header';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormularioInscrever from './pages/Formulario';
import Tecnologias from './pages/Tecnologias';
import Footer from './components/Footer';
import FormularioContato from './pages/Formulario_Contato';
import FormularioDoacao from './pages/Formulario_Doacao';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container fluid>
          <Row className='d-flex justify-content-center'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/tecnologias" element={<Tecnologias />} />
              <Route path="/inscrever" element={<FormularioInscrever />} />
              <Route path="/contato" element={<FormularioContato />} />
              <Route path="/doacao" element={<FormularioDoacao />} />
            </Routes>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
