import React from "react";
import '../pages/Sobre.css';
import FotoCEO1 from '../Imagens/Sobre/Ceo-Givanilson.png';
import FotoCEO2 from '../Imagens/Sobre/Ceo-Gabriel.png';
import FotoLogoHist from '../Imagens/Sobre/LogoHistoria.png';

function Sobre() {
    return (
        <div className="pagina-interna">
            <div className="secao-ceos">
                <h1>Nossos CEOs</h1>
                <div className="ceos-flex">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={FotoCEO1} alt="Gilvanilson"/>
                            </div>
                            <div className="flip-card-back">
                                <h3>Tubarão do Corte</h3>
                                <p>Mestre na navalha e estilo moderno. Focado em trazer inovação e técnica 
                                para a barbearia.</p>
                            </div>
                        </div>
                    </div>
                     <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={FotoCEO2} alt="Gabriel"/>
                            </div>
                            <div className="flip-card-back">
                                <h3>Gabriel</h3>
                                <p>Mestre na navalha e estilo moderno. Focado em trazer inovação e técnica 
                                para a barbearia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divisor"/>
            
                <div className="historia-container">
                <div className="sobre-texto">
                    <h1>Nossa História</h1>
                    <p>
                    Fundada em meados de 2025 pelos colegas de trabalho Givanilson e Gabriel, a Barbearia
                    Strike nasceu de um sonho compartilhado e muito esforço. O que começou como um projeto
                    ambicioso transformou-se em uma missão de vida: elevar a autoestima através
                    da excelência. Desde o primeiro dia, nosso propósito foi revoluc,ionar o conceito de 
                    cuidado pessoal, oferecendo mais do que um simples corte — proporcionamos uma experiência
                    completa de estilo, confiança e bem-estar. Com uma equipe dedicada e um ambiente
                    planejado em cada detalhe para você, nossa trajetória é escrita diariamente com
                    a paixão pela navalha.
                    </p>
                </div>
                <div className="sobre-card">
                <img src={FotoLogoHist} alt="LogoHistoria" className="card-img"/>
                </div>
            </div>
        </div>
    )
}

export default Sobre;