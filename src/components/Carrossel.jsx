import { useState, useEffect } from "react";
import './Carrossel.css';

import img1 from '../Imagens/Carrossel/img1.png';
import img2 from '../Imagens/Carrossel/img2.png';
import img3 from '../Imagens/Carrossel/img3.png';
import img4 from '../Imagens/Carrossel/img4.png';
import img5 from '../Imagens/Carrossel/img5.png';
import img6 from '../Imagens/Carrossel/img6.png';
import img7 from '../Imagens/Carrossel/img7.png';
import img8 from '../Imagens/Carrossel/img8.png';
import img9 from '../Imagens/Carrossel/img9.png';

const imagens = [img1, img2 ,img3 ,img4 ,img5 ,img6 ,img7 ,img8 ,img9];

function Carrossel(){
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) =>
        prevIndice === imagens.length - 1 ? 0 : prevIndice + 1
        );
    };

    const voltarSlide = () => {
        setIndiceAtual((prevIndice) =>
        prevIndice === 0 ? imagens.length - 1 : prevIndice - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setIndiceAtual((prevIndice) => 
            prevIndice === imagens.length - 1 ? 0 : prevIndice + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="carrossel-container">
            <button className="carrossel-btn prev" onClick={voltarSlide}>
                &#10094;
            </button>
            <div 
            className="carrossel-track"
            style={{ transform: `translateX(-${indiceAtual * 100}%)`}}
            >
                {imagens.map((img, index) => (
                    <div className="carrossel-item" key={index}>
                        <img src={img} alt={`Slide ${index}`}/>
                    </div>
                ))}
            </div>
            <button className="carrossel-btn next" onClick={proximoSlide}>
                &#10095;
            </button>
            <div className="carrossel-indicators">
                {imagens.map((_, index) =>
                <span key={index}
                className={`dot ${indiceAtual === index ? 'active' : ''}`}
                onClick={() => setIndiceAtual(index)}></span>
                )}
            </div>
        </div>
    );
}

export default Carrossel;