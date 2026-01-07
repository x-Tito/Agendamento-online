import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import Carrossel from './Carrossel';

function App(){
  return(
  <div className='app'>
    <Navbar/>
    <main className='content'>
      <section className="sessao-intro">
        <h1>Nossos Melhores Cortes</h1>
        <p>Transforme seu visual com os profissionais da Barbearia Strike!</p>
      </section>
    <Carrossel/>
    </main>
    <Footer/>
  </div>
  )
}

export default App;