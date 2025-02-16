import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar os componentes necessários do ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Definição da interface para os props
interface CoverageChartProps {
  vacinados: number;
  naoVacinados: number;
}

const CoverageChart: React.FC<CoverageChartProps> = ({ vacinados, naoVacinados }) => {
  const data = {
    labels: ["Vacinados", "Não Vacinados"],
    datasets: [
      {
        label: "Cobertura Vacinal",
        data: [vacinados, naoVacinados],
        backgroundColor: ["#2d7d2f", "#d9534f"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
    maintainAspectRatio: false,
    backgroundColor: "transparent"
  };

  return <Bar data={data} options={options} />;
};

export default CoverageChart;
