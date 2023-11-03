import Grade from "../components/Grade";

export default function Home() {
    return (
        <div className="App">
        <header className="App-header">
            <div>
                <h1>Pedro Henrique</h1>
                <h3>Desenvolvedor de software</h3>
            </div>
            {/* <div>
      Contato
    </div> */}
        </header>
        <div className="corpo">
            {/* <section>
                <h2>Quem sou</h2>
                <p>Pernambucano, 21 anos, desenvolvedor web </p>
            </section> */}
            <section>
                <h2>Portfólio</h2>
                <Grade />
            </section>
        </div>
        <footer className="footer">&copy; Santos Pereira 2023</footer>
    </div>
    );
}