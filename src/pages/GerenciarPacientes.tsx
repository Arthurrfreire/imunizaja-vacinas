import React, { useState } from 'react';
import '../styles/GerenciarPacientes.css';
import api from '../services/api';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const GerenciarPacientes = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    dataNascimento: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post("/api/pacientes", formData)
      .then(() => {
        setFormData({ nome: '', cpf: '', email: '', dataNascimento: '' });
      })
      .catch(error => console.error("Erro ao cadastrar paciente:", error));
  };

  return (
    
    <div className="container centered-container">
      <h1 className="title">PACIENTE</h1>
      
      {/* Formulário de Cadastro */}
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} className="input large" required />
        <div className="input-group">
          <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} className="input small" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input medium" required />
          <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="input small" required />
        </div>
        <button type="submit" className="button primary-button">Cadastrar</button>
      </form>

      {/* Botão para acessar a página de Clientes */}
      <button className="button secondary-button" onClick={() => navigate('/Pacientes')}>Ver Pacientes Cadastrados</button>
      
      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default GerenciarPacientes;
