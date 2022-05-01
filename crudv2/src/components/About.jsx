import * as React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <main>
                <h2>Olá amigo (a)</h2>
                <p>
                    Como está se sentindo hoje?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About