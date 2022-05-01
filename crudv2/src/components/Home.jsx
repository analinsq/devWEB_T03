import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <h2>Seja bem-vindo(a)!</h2>
                <p>Acredito no seu potencial :)</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export default Home