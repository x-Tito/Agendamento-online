import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Footer from './Footer';
import './App.css';
import Sobre from '../pages/Sobre';
import Servicos from '../pages/Servicos';
import Agendamento from '../pages/Agendamento';

function App(){
  return(
    <Router>
  <div className='app'>
    <Navbar/>

    <main className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
        <Route path='/agende' element={<Agendamento/>}/>

      </Routes>
    </main>
    <Footer/>
  </div>
  </Router>
  );
}

export default App;