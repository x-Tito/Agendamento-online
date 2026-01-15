import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import imgBarbearia from '../Imagens/imgBarbearia.png';
import LogoBarbearia from '../Imagens/LogoBarbearia.png';

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
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="/">
              <img src={LogoBarbearia} alt="Logo Navbar" className="logo-nav"/>
            </a>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            <MenuIcon />
          </button>

          <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/sobre" onClick={toggleMenu}>Sobre</Link></li>
              <li><Link to="/servicos" onClick={toggleMenu}>Serviços</Link></li>
              <li><Link to="/agende" className='btn-agende' onClick={toggleMenu}>Agendamento</Link></li>
            </ul>
          </div>
        </nav>
      </div>      
  );
}

export default App;