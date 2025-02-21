import React from 'react';
import '../styles/PowerBIReport.css';

const PowerBIReport = () => {
  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <iframe 
          title="ImunizaJá"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/view?r=eyJrIjoiZmIwZjQ1ZWYtZTIyMy00N2ZhLThjZDAtMjYxYTYwN2IwY2ZiIiwidCI6ImU2Mjg5NjA3LTY0ZTItNDk3Yi04MGE4LTU0MDc0YzY1NWU5ZSJ9"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default PowerBIReport;
