type StatsCardProps = {
    title: string;
    value: number | string;
    color: string;
  };
  
  const StatsCard = ({ title, value, color }: StatsCardProps) => {
    return (
      <div className="stats-card">
        <h3>{title}</h3>
        <p style={{ color }}>{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
  