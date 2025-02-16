import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import Vacinas from "./pages/Vacinas";
import Calendario from "./pages/Calendario";
import GerenciarPacientes from "./pages/GerenciarPacientes";
import Navbar from "./components/Navbar"; 

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Exibir a Navbar apenas se NÃO estiver na página inicial */}
      {location.pathname !== "/" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/vacinas" element={<Vacinas />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/gerenciar-pacientes" element={<GerenciarPacientes />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
