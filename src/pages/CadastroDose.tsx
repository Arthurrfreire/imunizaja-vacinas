import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CadastroDose.css";

const CadastroDose = () => {
  const [pacientes, setPacientes] = useState([]);
  const [doses, setDoses] = useState([]);
  const [formData, setFormData] = useState({
    idPaciente: "",
    idDose: "",
    dataAplicacao: "",
    fabricante: "",
    lote: "",
    localAplicacao: "",
    profissionalAplicador: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pacientesResponse = await axios.get("http://localhost:8080/paciente");
        setPacientes(pacientesResponse.data);
      } catch (error) {
        console.error("❌ Erro ao buscar pacientes:", error);
      }

      try {
        const dosesResponse = await axios.get("http://localhost:8080/doses");
        setDoses(dosesResponse.data);
      } catch (error) {
        console.error("❌ Erro ao buscar doses:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: 
        name === "id_paciente" || name === "id_dose"
          ? value ? parseInt(value, 10) : ""  // Conversão segura para número
          : value.trim(),
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = "Campo obrigatório";
      }
    });

    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("❌ Preencha todos os campos obrigatórios antes de continuar.");
      return;
    }

    console.log("📤 Enviando JSON para API:", JSON.stringify(formData, null, 2));

    try {
      const response = await axios.post("http://localhost:8080/imunizacoes", formData);
      console.log("✅ Resposta da API:", response.data);
      alert("Dose cadastrada com sucesso!");

      setFormData({
        idPaciente: "",
        idDose: "",
        dataAplicacao: "",
        fabricante: "",
        lote: "",
        localAplicacao: "",
        profissionalAplicador: "",
      });

      setErrors({});
    } catch (error: any) {
      console.error("❌ Erro ao cadastrar dose:", error.response?.data || error.message);
      alert(`Erro ao cadastrar dose: ${error.response?.data?.mensagem || error.message}`);
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="title">Cadastro de Doses</h2>

      <form onSubmit={handleSubmit} className="form">
       
        <select name="idPaciente" value={formData.idPaciente} onChange={handleChange}>
          <option value="">Selecione um paciente</option>
          {pacientes.map((paciente: any) => (
            <option key={paciente.id} value={paciente.id}>
              {paciente.nome}
            </option>
          ))}
        </select>
        {errors.idPaciente && <p className="error">{errors.idPaciente}</p>}

       
        <select name="idDose" value={formData.idDose} onChange={handleChange}>
          <option value="">Selecione uma dose</option>
          {doses.map((dose: any) => (
            <option key={dose.id} value={dose.id}>
              {dose.dose}
            </option>
          ))}
        </select>
        {errors.idDose && <p className="error">{errors.idDose}</p>}

        
        <input type="date" name="dataAplicacao" value={formData.dataAplicacao} onChange={handleChange} />
        {errors.dataAplicacao && <p className="error">{errors.dataAplicacao}</p>}

       
        <input type="text" name="fabricante" placeholder="Fabricante" value={formData.fabricante} onChange={handleChange} />
        {errors.fabricante && <p className="error">{errors.fabricante}</p>}

       
        <input type="text" name="lote" placeholder="Lote" value={formData.lote} onChange={handleChange} />
        {errors.lote && <p className="error">{errors.lote}</p>}

       
        <input type="text" name="localAplicacao" placeholder="Local da Aplicação" value={formData.localAplicacao} onChange={handleChange} />
        {errors.localAplicacao && <p className="error">{errors.localAplicacao}</p>}

        
        <input type="text" name="profissionalAplicador" placeholder="Profissional que aplicou" value={formData.profissionalAplicador} onChange={handleChange} />
        {errors.profissionalAplicador && <p className="error">{errors.profissionalAplicador}</p>}

        <button type="submit" className="primary-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroDose;
