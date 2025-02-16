import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Vacinas.css";
import Footer from "../components/Footer";

interface Paciente {
  id: number;
  nome: string;
}

const Vacinas = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [formData, setFormData] = useState({
    pacienteId: "",
    dose: "",
    dataAplicacao: "",
    fabricante: "",
    lote: "",
    localAplicacao: "",
    profissional: "",
  });

  useEffect(() => {
    api
      .get("/api/pacientes")
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => console.error("Erro ao buscar pacientes:", error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post("/api/vacinas", formData)
      .then(() => {
        setFormData({
          pacienteId: "",
          dose: "",
          dataAplicacao: "",
          fabricante: "",
          lote: "",
          localAplicacao: "",
          profissional: "",
        });
      })
      .catch((error) => console.error("Erro ao cadastrar vacina:", error));
  };

  return (
    <div className="container">
      <h1 className="title">Cadastro de Vacinas</h1>
      
      <form className="form" onSubmit={handleSubmit}>
        {/* Nome (Paciente) */}
        <select name="pacienteId" value={formData.pacienteId} onChange={handleChange} className="input" required>
          <option value="">Selecione um paciente</option>
          {pacientes.map((paciente) => (
            <option key={paciente.id} value={paciente.id}>
              {paciente.nome}
            </option>
          ))}
        </select>

        {/* Dose */}
        <input type="text" name="dose" placeholder="Dose" value={formData.dose} onChange={handleChange} className="input" required />

        {/* Data da Aplicação */}
        <input type="date" name="dataAplicacao" value={formData.dataAplicacao} onChange={handleChange} className="input" required />

        {/* Fabricante */}
        <input type="text" name="fabricante" placeholder="Fabricante" value={formData.fabricante} onChange={handleChange} className="input" required />

        {/* Lote */}
        <input type="text" name="lote" placeholder="Lote" value={formData.lote} onChange={handleChange} className="input" required />

        {/* Local da Aplicação */}
        <input type="text" name="localAplicacao" placeholder="Local da Aplicação" value={formData.localAplicacao} onChange={handleChange} className="input" required />

        {/* Profissional que aplicou */}
        <input type="text" name="profissional" placeholder="Profissional que aplicou" value={formData.profissional} onChange={handleChange} className="input" required />

        {/* Botão de Cadastrar */}
        <button type="submit" className="button primary-button">Cadastrar</button>
      </form>

      <Footer />
    </div>
  );
};

export default Vacinas;
