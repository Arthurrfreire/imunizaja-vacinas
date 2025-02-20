import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Pacientes.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  sexo: string;
  data_nascimento: string;
}

const Pacientes = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [editando, setEditando] = useState<Paciente | null>(null);

  useEffect(() => {
    carregarPacientes();
  }, []);

  const carregarPacientes = () => {
    api
      .get("/paciente")
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => console.error("Erro ao buscar pacientes:", error));
  };

  const handleExcluir = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este paciente?")) {
      try {
        await api.delete(`/paciente/${id}`);
        toast.success("✅ Paciente excluído com sucesso!");
        carregarPacientes();
      } catch (error) {
        toast.error("❌ Erro ao excluir paciente.");
        console.error("Erro ao excluir paciente:", error);
      }
    }
  };

  const handleEditar = (paciente: Paciente) => {
    setEditando(paciente);
  };

  const handleSalvarEdicao = async () => {
    if (editando) {
      try {
        await api.put(`/paciente/${editando.id}`, editando);
        toast.success("✅ Paciente atualizado com sucesso!");
        setEditando(null);
        carregarPacientes();
      } catch (error) {
        toast.error("❌ Erro ao atualizar paciente.");
        console.error("Erro ao atualizar paciente:", error);
      }
    }
  };

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
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.length > 0 ? (
              pacientes.map((paciente) => (
                <tr key={paciente.id}>
                  <td>
                    {editando?.id === paciente.id ? (
                      <input
                        type="text"
                        value={editando.nome}
                        onChange={(e) => setEditando({ ...editando, nome: e.target.value })}
                      />
                    ) : (
                      paciente.nome
                    )}
                  </td>
                  <td>
                    {editando?.id === paciente.id ? (
                      <input
                        type="text"
                        value={editando.cpf}
                        onChange={(e) => setEditando({ ...editando, cpf: e.target.value })}
                      />
                    ) : (
                      paciente.cpf
                    )}
                  </td>
                  <td>
                    {editando?.id === paciente.id ? (
                      <select
                        value={editando.sexo}
                        onChange={(e) => setEditando({ ...editando, sexo: e.target.value })}
                      >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                      </select>
                    ) : (
                      paciente.sexo
                    )}
                  </td>
                  <td>
                    {editando?.id === paciente.id ? (
                      <input
                        type="date"
                        value={editando.data_nascimento}
                        onChange={(e) => setEditando({ ...editando, data_nascimento: e.target.value })}
                      />
                    ) : (
                      paciente.data_nascimento
                    )}
                  </td>
                  <td className="acoes">
                    {editando?.id === paciente.id ? (
                      <button className="salvar-btn" onClick={handleSalvarEdicao}>
                        💾 Salvar
                      </button>
                    ) : (
                      <button className="editar-btn" onClick={() => handleEditar(paciente)}>
                        ✏️ Editar
                      </button>
                    )}
                    <button className="excluir-btn" onClick={() => handleExcluir(paciente.id)}>
                      ❌ Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="pacientes-no-data">
                  Nenhum paciente cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pacientes;
