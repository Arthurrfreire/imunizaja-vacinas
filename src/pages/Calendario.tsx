import React, { useState } from 'react';
import '../styles/Calendario.css';
import crianca from '../assets/crianca.png';
import adolescente from '../assets/adolecente.png';
import adultoIdoso1 from '../assets/adulto-idoso1.png';
import gestante from '../assets/gestante.png';
import Footer from '../components/Footer';

const Calendario = () => {
  const [imagemAtual, setImagemAtual] = useState(crianca);

  return (
    <div className="calendario-container">
      <h1 className="title">Calendário Nacional de Vacinação</h1>

      <div className="button-group">
        <button onClick={() => setImagemAtual(crianca)}>Criança</button>
        <button onClick={() => setImagemAtual(adolescente)}>Adolescente</button>
        <button onClick={() => setImagemAtual(adultoIdoso1)}>Adulto e Idoso</button>
        <button onClick={() => setImagemAtual(gestante)}>Gestante</button>
      </div>

      <div className="image-container">
        <img src={imagemAtual} alt="Calendário de Vacinação" className="calendario-image" />
      </div>
    </div>
  );
};

export default Calendario;
