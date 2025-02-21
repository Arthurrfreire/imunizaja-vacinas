import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import Calendario from "./pages/Calendario";
import GerenciarPacientes from "./pages/GerenciarPacientes";
import CadastroDose from "./pages/CadastroDose";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import PowerBIReport from "./pages/PowerBIReport";  // Importa o componente do relatório

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
        <Route path="/relatorio" element={<PowerBIReport />} /> {/* Nova rota */}
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