import React, { useState, useEffect } from 'react';
import '../pages/Agendamento.css';
import logo from '../Imagens/Agendamento/LogoAgend.png';

const Agendamento = () => {
  const [formData, setFormData] = useState({
    nome: '', telefone: '', barbeiro: '', data: '', horario: '', observacoes: ''
  });

  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [agendado, setAgendado] = useState(false);

  const hoje = new Date().toISOString().split("T")[0];
  const ocupados = ['10:00', '15:30'];

  useEffect(() => {
    const slots = [];
    for (let h = 9; h < 12; h++) {
      for (let m = 0; m < 60; m += 30) {
        slots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
      }
    }
    for (let h = 14; h < 20; h++) {
      for (let m = 0; m < 60; m += 30) {
        slots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
      }
    }
    setHorariosDisponiveis(slots);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'data' && value !== '') {
      const dia = new Date(value).getUTCDay();
      if (dia === 0 && formData.barbeiro === 'gabriel') {
        setFormData(prev => ({ ...prev, [name]: value, barbeiro: 'tubarao', horario: '' }));
        return;
      }
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.horario) return alert("Selecione um horário!");
    setAgendado(true);
  };

  const isDomingo = formData.data && new Date(formData.data).getUTCDay() === 0;

  return (
    <div className="agendamento-page">
      <div className="agendamento-container">
        
        {!agendado ? (
          <>
            <div className="logo-wrapper-form">
              <img src={logo} alt="Logo" className="logo-circular" />
            </div>

            <form onSubmit={handleSubmit} className="form-agendamento">
              <h2>Agende seu Estilo</h2>
              
              <div className="input-group">
                <label>Nome Completo:</label>
                <input type="text" name="nome" required value={formData.nome} onChange={handleChange} placeholder="Seu nome" />
              </div>

              <div className="input-group">
                <label>Telefone / WhatsApp:</label>
                <input type="tel" name="telefone" required value={formData.telefone} onChange={handleChange} placeholder="(79) 99999-9999" />
              </div>

              <div className="input-group">
                <label>Data do Agendamento:</label>
                <input type="date" name="data" min={hoje} required value={formData.data} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Escolha o Barbeiro:</label>
                <select name="barbeiro" required value={formData.barbeiro} onChange={handleChange}>
                  <option value="">Selecione...</option>
                  <option value="tubarao">Tubarão do Corte</option>
                  {!isDomingo && <option value="gabriel">Gabriel</option>}
                </select>
              </div>

              {isDomingo && <p className="aviso-dom">⚠️ Domingo: Apenas Tubarão do corte atende com adiantamento de 50% do valor.</p>}

              <div className="input-group">
                <label>Horários:</label>
                <div className="grid-horarios">
                  {horariosDisponiveis.map(h => (
                    <button 
                      key={h} type="button" 
                      className={`btn-hora ${formData.horario === h ? 'active' : ''} ${ocupados.includes(h) ? 'lock' : ''}`}
                      disabled={ocupados.includes(h)}
                      onClick={() => setFormData({...formData, horario: h})}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label>Observações (Opcional):</label>
                <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} rows="3" placeholder="Ex: Risquinho na sobrancelha..." />
              </div>

              <div className="acoes-form">
                <button type="submit" className="btn-confirmar">Confirmar</button>
                <button type="button" className="btn-limpar" onClick={() => setFormData({nome:'', telefone:'', barbeiro:'', data:'', horario:'', observacoes:''})}>Limpar</button>
              </div>
            </form>
          </>
        ) : (
          <div className="sucesso">
            <div className="logo-sucesso-container">
               <img src={logo} alt="Logo" className="logo-circular" />
            </div>

            <h3>Agendado com Sucesso!</h3>
            <p>Tudo pronto, <strong>{formData.nome.split(' ')[0]}</strong>!</p>
            <p>Seu horário foi marcado para o dia {formData.data.split('-').reverse().join('/')} às {formData.horario}.</p>
            
            <button onClick={() => setAgendado(false)} className="btn-confirmar">Voltar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agendamento;