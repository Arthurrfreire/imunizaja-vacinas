import StatsCard from "../components/StatsCard";
import CoverageChart from "../components/CoverageChart";
import "../styles/DashboardVacinas.css";

const DashboardVacinas = () => {
    // Exemplo de dados (depois pode vir de um banco de dados ou API)
    const totalVacinas = 1500;
    const vacinasAtrasadas = 8; // Percentual
    const coberturaVacinal = 75; // Percentual

    return (
        <>
            {/* Seção superior (Informações gerais) */}
            <section className="dashboard-header">
                <h1>📊 Estatísticas de Vacinação</h1>
                <div className="stats-container">
                    <StatsCard title="💉 Total de Vacinas Aplicadas" value={totalVacinas} color="#1259c3" />
                    <StatsCard title="📅 Vacinas Atrasadas" value={`${vacinasAtrasadas}%`} color="#d9534f" />
                    <StatsCard title="👥 População Vacinada" value={`${coberturaVacinal}%`} color="#2d7d2f" />
                </div>
            </section>

            {/* Seção independente para gráficos */}
            <section className="dashboard-charts">
                <h2>📈 Cobertura Vacinal</h2>
                <div className="chart-container">
                    <CoverageChart vacinados={coberturaVacinal} naoVacinados={100 - coberturaVacinal} />
                </div>
            </section>
        </>
    );
};

export default DashboardVacinas;
