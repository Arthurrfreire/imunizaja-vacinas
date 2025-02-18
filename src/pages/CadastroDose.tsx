import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CadastroDose.css";

const CadastroDose = () => {
  const [pacientes, setPacientes] = useState([]);
  const [doses, setDoses] = useState([]);
  const [formData, setFormData] = useState({
    id_paciente: "",
    id_dose: "",
    data_aplicacao: "",
    fabricante: "",
    lote: "",
    local_aplicacao: "",
    profissional_aplicador: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8080/paciente")
      .then((response) => setPacientes(response.data))
      .catch((error) => console.error("Erro ao buscar pacientes:", error));

      axios.get("http://localhost:8080/doses") 
      .then((response) => {
          console.log("Doses carregadas:", response.data); // Debug
          setDoses(response.data);
      })
      .catch((error) => console.error("Erro ao buscar doses:", error));
}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/imunizacoes", formData);
      alert("Dose cadastrada com sucesso!");
      setFormData({
        id_paciente: "",
        id_dose: "",
        data_aplicacao: "",
        fabricante: "",
        lote: "",
        local_aplicacao: "",
        profissional_aplicador: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar dose:", error);
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="title">Cadastro de Doses</h2>

      <form onSubmit={handleSubmit} className="form">
        <select name="id_paciente" value={formData.id_paciente} onChange={handleChange} required>
          <option value="">Selecione um paciente</option>
          {pacientes.map((paciente: any) => (
            <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
          ))}
        </select>

        <select name="id_dose" value={formData.id_dose} onChange={handleChange} required>
          <option value="">Selecione uma dose</option>
          {doses.map((dose: any) => (
            <option key={dose.id} value={dose.id}>{dose.dose}</option>
          ))}
        </select>

        <input type="date" name="data_aplicacao" value={formData.data_aplicacao} onChange={handleChange} required />
        <input type="text" name="fabricante" placeholder="Fabricante" value={formData.fabricante} onChange={handleChange} required />
        <input type="text" name="lote" placeholder="Lote" value={formData.lote} onChange={handleChange} required />
        <input type="text" name="local_aplicacao" placeholder="Local da Aplicação" value={formData.local_aplicacao} onChange={handleChange} required />
        <input type="text" name="profissional_aplicador" placeholder="Profissional que aplicou" value={formData.profissional_aplicador} onChange={handleChange} required />
        <button type="submit" className="primary-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroDose;
