import "./Header.css";
import logo from "../../assets/logo.jpeg";


function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Logo de Colitas de Hilo" className="logo" />
        <div className="brand-text">
          <h1 className="title">Colitas de Hilo</h1>
          <p className="subtitle">"Regalos que Abrazan"</p>
        </div>
      </div>
    </header>
  );
}

export default Header;