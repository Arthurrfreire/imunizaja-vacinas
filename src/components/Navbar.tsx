import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  // Oculta a navbar apenas na página inicial
  if (location.pathname === "/") return null;

  return (
    <nav className="navbar">
      <Link to="/">Início</Link>
      <Link to="/pacientes">Pacientes</Link>
      <Link to="/vacinas">Vacinas</Link>
      <Link to="/calendario">Calendário</Link>
      <Link to="/gerenciar-pacientes">Gerenciar Pacientes</Link>
    </nav>
  );
};

export default Navbar;
