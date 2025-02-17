import React, { useState } from 'react';
import '../styles/GerenciarPacientes.css';
import api from '../services/api';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const GerenciarPacientes = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    sexo: '',
    data_nascimento: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/api/pacientes", formData);
      alert("Paciente cadastrado com sucesso!");
      setFormData({ nome: '', cpf: '', sexo: '', data_nascimento: '' });
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
      alert("Erro ao cadastrar paciente. Verifique os dados e tente novamente.");
    }
  };

  return (
    <>
      <div className="gerenciar-pacientes-container">
        <h1 className="gerenciar-pacientes-title">PACIENTE</h1>

        <form className="gerenciar-pacientes-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nome" 
            placeholder="Nome" 
            value={formData.nome} 
            onChange={handleChange} 
            className="gerenciar-pacientes-input" 
            required 
          />

          <input 
            type="text" 
            name="cpf" 
            placeholder="CPF" 
            value={formData.cpf} 
            onChange={handleChange} 
            className="gerenciar-pacientes-input" 
            required 
          />

          <select 
            name="sexo" 
            value={formData.sexo} 
            onChange={handleChange} 
            className="gerenciar-pacientes-select" 
            required
          >
            <option value="">Selecione o Sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>

          <input 
            type="date" 
            name="data_nascimento" 
            value={formData.data_nascimento} 
            onChange={handleChange} 
            className="gerenciar-pacientes-input" 
            required 
          />

          <button type="submit" className="gerenciar-pacientes-button gerenciar-pacientes-primary-button">Cadastrar</button>

          <button 
            type="button" 
            className="gerenciar-pacientes-button gerenciar-pacientes-secondary-button" 
            onClick={() => navigate('/Pacientes')}
          >
            Ver Pacientes Cadastrados
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default GerenciarPacientes;
