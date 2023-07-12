

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
                <article className="peli-item">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description"></p>
                    <button className="edit">Edit</button>
                    <button className="delete">Remove</button>
                </article>
                <article className="peli-item">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description"></p>
                    <button className="edit">Edit</button>
                    <button className="delete">Remove</button>
                </article>
                <article className="peli-item">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description"></p>
                    <button className="edit">Edit</button>
                    <button className="delete">Remove</button>
                </article>
                <article className="peli-item">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description"></p>
                    <button className="edit">Edit</button>
                    <button className="delete">Remove</button>
                </article>
            </section>

            {/*barra lateral */}

            <aside className="lateral">
                <div className="search">
                    <h3>Buscador</h3>
                    <form>
                        <input type="text"/>
                        <button>Buscar</button>
                    </form>
                </div>
                <div className="add">
                    <h3 className="title">Añadir pelicula</h3>
                    <form action="">
                        <input type="text" placeholder="titulo"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="Enviar"/>
                    </form>
                
                </div>
            </aside>

            {/*footer*/}
            <footer className="footer">
                &copy; Created by <a>americoroca.com</a>
            </footer>
      </div>
  );
}

export default App;
