import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);

    let classificacaoCalculada = '';
    if (imcCalculado < 18.5) {
      classificacaoCalculada = 'Abaixo do peso';
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      classificacaoCalculada = 'Peso normal';
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      classificacaoCalculada = 'Sobrepeso';
    } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
      classificacaoCalculada = 'Obesidade grau I';
    } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
      classificacaoCalculada = 'Obesidade grau II';
    } else if (imcCalculado >= 40) {
      classificacaoCalculada = 'Obesidade grau III';
    }
    setClassificacao(classificacaoCalculada);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <form onSubmit={calcularIMC}>
          <div>
            <label>
              Altura (cm):
              <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Peso (kg):
              <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Calcular IMC</button>
        </form>
        {imc && (
          <div>
            <h2>Seu IMC: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
