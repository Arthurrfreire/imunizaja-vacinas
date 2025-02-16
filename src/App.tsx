import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import Vacinas from "./pages/Vacinas";
import Calendario from "./pages/Calendario";
import GerenciarPacientes from "./pages/GerenciarPacientes";
import Navbar from "./components/Navbar"; // Importando a Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* A Navbar não será renderizada na Home */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/vacinas" element={<Vacinas />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/gerenciar-pacientes" element={<GerenciarPacientes />} />
      </Routes>
    </Router>
  );
}

export default App;
