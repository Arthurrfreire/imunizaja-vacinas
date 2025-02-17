import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Pacientes.css";
import Footer from "../components/Footer";

interface Paciente {
  nome: string;
  cpf: string;
  sexo: string;
  data_nascimento: string;
}

const Pacientes = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    api
      .get("/paciente")
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => console.error("Erro ao buscar pacientes:", error));
  }, []);

  return (
    <div className="pacientes-container">
      <h1 className="pacientes-title">Lista de Pacientes</h1>
      <div className="pacientes-table-container">
        <table className="pacientes-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Sexo</th>
              <th>Data de Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.length > 0 ? (
              pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.cpf}</td>
                  <td>{paciente.sexo}</td>
                  <td>{paciente.data_nascimento}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="pacientes-no-data">
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
