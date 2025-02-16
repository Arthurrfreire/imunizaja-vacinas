import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Pacientes.css";
import Footer from "../components/Footer";

interface Paciente {
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string;
}

const Pacientes = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    api
      .get("/api/pacientes")
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => console.error("Erro ao buscar pacientes:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Lista de Pacientes</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Email</th>
              <th>Data de Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.length > 0 ? (
              pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.cpf}</td>
                  <td>{paciente.email}</td>
                  <td>{paciente.dataNascimento}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="no-data">
                  Nenhum paciente cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Pacientes;
