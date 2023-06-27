import logo from './logo.svg';
import './App.css';
import { MiPrimerListado } from './components/MiPrimerListado';
import { ComponenteEjercicio } from './ComponenteEjercicio';

function App() {

  const añoActual = 2023;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en React - Hook useState</h1>
        <MiPrimerListado/>
        <br/>
        <ComponenteEjercicio
          año={ añoActual }
        />
      </header>
    </div>
  );
}

export default App;
