import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SComponente } from './SComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiComponente />
        <hr/>
        <SComponente/>
      </header>
    </div>
  );
}

export default App;
