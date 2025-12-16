import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css'; 
import imgBarbearia from './Imagens/imgBarbearia.png';

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="/">Meu Projeto</a>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            <MenuIcon />
          </button>

          <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* IMAGEM FORA DO CONTAINER DA NAVBAR */}
      <div className="image-container">
        <img src={imgBarbearia} alt="Imagem da barbearia" />
      </div>
    </>
  );
}

export default App;