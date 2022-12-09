import './App.css';
import logo from './images/img.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import './hoja-estilos/Boton.css';
import { useState } from 'react';

function App() {

  const [numero, setNumero] = useState(0);

  const manejarClic = () => {
    setNumero(numero + 1);
  }

  const reiniciaContador = () => {
    setNumero(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
          src={logo}
          alt='Logo de app'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numero={numero} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciaContador}
        />
      </div>
    </div>
  );
}

export default App;
