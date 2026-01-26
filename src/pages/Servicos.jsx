import React from 'react';
import './Servicos.css';
import imagemPagamentos from'../Imagens/Servicos/FormasdePag.png';

const listaServicos = [
  { nome: "Corte", preco: "R$ 25" },
  { nome: "Barba", preco: "R$ 15" },
  { nome: "Corte com Barba", preco: "R$ 35" },
  { nome: "Pé do Cabelo", preco: "R$ 10" },
  { nome: "Sobrancelha", preco: "R$ 5" },
  { nome: "Pigmentação Barba", preco: "R$ 5" },
  { nome: "Pigmentação Cabelo", preco: "R$ 10" },
  { nome: "Corte Infantil", preco: "R$ 30" },
];

function Servicos() {
  return (
    <div className="pagina-interna">
      <div className="servicos-container">
        <h1>NOSSOS SERVIÇOS</h1>
        <p className="subtitulo">Preços justos e qualidade impecável para o seu estilo.</p>
        
        <div className="servicos-grid">
          {listaServicos.map((item, index) => (
            <div key={index} className="servico-item">
              <span className="servico-nome">{item.nome}</span>
              <div className="divisor-pontilhado"></div>
              <span className="servico-preco">{item.preco}</span>
            </div>
          ))}
        </div>

        <div className="pagamentos-container">
          <img 
            src={imagemPagamentos} 
            alt="Formas de Pagamento" 
            className="imagem-pagamentos" 
          />
          </div>
        <div className="aviso-agendamento">
          <p>Gostou? Garanta o seu horário agora mesmo!</p>
        </div>
      </div>
    </div>
  );
}

export default Servicos;