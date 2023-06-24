import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SComponente } from './SComponente';
import { TComponente } from './TComponente';

function App() {

  const ficha_medica = {
    altura: "175cm",
    grupo: "a",
    estado: "Bueno"
  }

  const numero = 12345;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiComponente />
        <hr/>
        <SComponente/>
        <hr/>
        <TComponente 
          nombre="Americo"
          apellido="Chiclana"
          ficha={ficha_medica}
        />
      </header>
    </div>
  );
}

export default App;
