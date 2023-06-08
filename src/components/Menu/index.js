import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <>
            <nav className="navMenu">
                <Link to='/noticias'>
                    Notícias
                </Link>
                <Link to='/tecnologias'>
                    Tecnologias
                </Link>
                <Link to='/inscrever'>
                    Inscreva-se
                </Link>
                <Link to='/contato'>
                    Contato
                </Link>
                <Link to='/doacao'>
                    Doação
                </Link>
                <div className="dot"></div>
            </nav>
        </>
    )
}

export default Menu;