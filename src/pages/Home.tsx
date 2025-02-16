import { Link } from "react-router-dom";
import "../styles/Home.css";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png"; // Imagem da logo principal

const Home = () => {
  return (
    <div className="home-container">
      {/* Logo principal grande no topo */}
      <img src={logo} alt="Logo ImunizaJá" className="logo-main" />

      <h1>ImunizaJá - Gestão de Vacinas Familiares</h1>
      <p>Gerencie o calendário vacinal de toda sua família de forma simples e eficiente.</p>

      <div className="buttons">
        <Link to="/gerenciar-pacientes" className="btn">Gerenciar Pacientes</Link>
        <Link to="/vacinas" className="btn">Gerenciar Vacinas</Link>
        <Link to="/calendario" className="btn">Calendário Vacinal</Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
