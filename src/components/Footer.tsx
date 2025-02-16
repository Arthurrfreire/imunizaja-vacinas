import "../styles/Footer.css";
import logo1000devs from "../assets/images/logo1000devs.png";
import logohospital from "../assets/images/logohospital.png";
import logojj from "../assets/images/logojj.png";
import logomestra from "../assets/images/logomestra.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Apoio ao projeto:</p>
      <div className="logos">
        <img src={logo1000devs} alt="1000 Devs" />
        <img src={logohospital} alt="Hospital" />
        <img src={logojj} alt="Johnson & Johnson" />
        <img src={logomestra} alt="Mesttra" />
      </div>
    </footer>
  );
};

export default Footer;
