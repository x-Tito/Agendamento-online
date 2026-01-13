import imgBarbearia from '../Imagens/imgBarbearia.png';
import Carrossel from '../components/Carrossel';
import '../pages/Home.css';

function Home() {
    return(
    <>
        <div className="image-container">
        <img src={imgBarbearia} alt="Imagem da barbearia" />
        </div>
        <section className="secao-horarios">
        <div className="card-horario-home">
          <div className="horario-info">
            <h3>HORÁRIO DE ATENDIMENTO</h3>
            <div className="linha-turquesa"></div>
            <p><strong>Segunda a Sábado:</strong> 09:00 às 12:00 — 14:30 às 20:00</p>
            <p className="domingo-destaque"><strong>Domingo:</strong> Somente com agendamento e adiantamento de 50% do valor</p>
          </div>
          <a href="/agende" className="btn-agendar-home">AGENDAR AGORA</a>
        </div>
      </section>
      <section className="sessao-intro">
        <h1>Nossos Melhores Cortes</h1>
        <p>Transforme seu visual com os profissionais da Barbearia Strike!</p>
      </section>
      <Carrossel/>
    </>
    );
}

export default Home;