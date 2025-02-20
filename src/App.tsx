import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import Calendario from "./pages/Calendario";
import GerenciarPacientes from "./pages/GerenciarPacientes";
import Navbar from "./components/Navbar"; 
import CadastroDose from "./pages/CadastroDose";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Exibir a Navbar apenas se NÃO estiver na página inicial */}
      {location.pathname !== "/" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/vacinas" element={<CadastroDose />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/gerenciar-pacientes" element={<GerenciarPacientes />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Layout />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
