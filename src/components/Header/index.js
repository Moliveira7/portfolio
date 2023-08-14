import { Link } from "react-router-dom";
import './Header.css';


export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programacao">Programação</Link></li>
            <li><Link to="/projetos-mecatronicos">Projetos Mecatrônicos</Link></li>
            <li><Link to="/contatos">Contatos</Link></li>
          </ul>
        </nav>
      </header>
      
    </>
  );
}
