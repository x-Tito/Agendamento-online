import React from "react";
import '../pages/Sobre.css';
import FotoLogoHist from '../Imagens/Sobre/LogoHistoria.png';

function Sobre() {
    return (
        <div className="pagina-interna">
            <div className="sobre-texto">
                <h1>Nossa História</h1>
                <p>
                    Fundada em meados de 2025 pelos colegas de trabalho Givanilson e Gabriel, a Barbearia
                    Strike nasceu de um sonho compartilhado e muito esforço. O que começou como um projeto
                    ambicioso transformou-se em uma missão de vida: elevar a autoestima masculina através
                    da excelência. Desde o primeiro dia, nosso propósito foi revolucionar o conceito de 
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
    )
}

export default Sobre;