import './style.css';
import Logo_Md2One from '../../img/Logo_Md2One.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <img src={Logo_Md2One} width="20%" height="20%" alt="Logo Md2One"></img>
                </div>
                <p>&copy; {new Date().getFullYear()} Miqueias dOliveira. Todos os direitos reservados.</p>
            </div>
        </footer>
  );
}