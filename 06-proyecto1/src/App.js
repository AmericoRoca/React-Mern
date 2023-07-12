import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";


function App() {
  return (
    <div className="layout">

            {/*cabecera*/}
            <header className="header">
                <div className="logo">
                    <div className="play">
                    </div>
                </div>
                <h1>Mis pelis</h1>
            </header>

            {/*navegacion*/}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/* contenido principal*/}
            <section className="content">
              <Listado />
            </section>
           

            {/*barra lateral */}

            <aside className="lateral">

              <Buscador />

              <Crear />

            </aside>

            {/*footer*/}
            <footer className="footer">
                &copy; Created by <a href="www.americoroca.com">americoroca.com</a>
            </footer>
      </div>
  );
}

export default App;
