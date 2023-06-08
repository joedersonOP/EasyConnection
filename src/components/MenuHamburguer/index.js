import { Link } from 'react-router-dom';
import './MenuHamburguer.css';

const MenuHamburguer = () => {
    return (
        <div>
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn"><span></span></label>
            <label htmlFor="active" className="close"></label>
            <div className="wrapper">
                <ul>
                    <li><Link to="/noticias">Notícia</Link></li>
                    <li><Link to="/tecnologias">Tecnologia</Link></li>
                    <li><Link to="/inscrever">Inscreva-se</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/doacao">Doacao</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuHamburguer;