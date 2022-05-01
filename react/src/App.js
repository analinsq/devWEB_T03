import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

// import Herois from './components/Exerc01';
// import Info from './components/atividade01/Questao02';

// import Casa from './components/Hardcoded/Casa';
// import Personagem from './components/Hardcoded/Personagem';

// import IMC from './components/atividade02/IMC';
// import IMCClasse from './components/atividade02/IMCClasse';
// import Filho from './components/filho_pai/Filho';
// import Pai from './components/filho_pai/Pai';
// import CidadeSimples from './components/cidades/CidadeSimples'
// import CidadeCC from './components/cidades/CidadeComClasse';
// import Arena from './components/atividade02/questao04/Arena';
// import Hero from './components/atividade02/questao04/Hero';
// import saitama from '../src/imagens/saitama.png';
// import minato from '../src/imagens/minato.png'
// import caramelo from "../src/imagens/caramelo.jpg"
// import Arena from './components/atividade02/questao01/Arena2';
// import Hero2 from './components/atividade02/questao01/Hero2';
// import Arena2 from './components/atividade02/questao01/Arena2';

// import Contador from '../src/hooks/Contador';

import About from "./components/pag/About";
import Home from "./components/pag/Home";
// import Page01 from './components/pag/Page01';
// import Page02 from './components/pag/Page02';

import CreateStudent from "./components/CRUD/student/CreateStudent";
import EditStudent from "./components/CRUD/student/EditStudent";
import ListStudent from "./components/CRUD/student/ListStudent";
import StudentTableRow from "./components/CRUD/student/StudentTableRow";

import CreateProfessor from "./components/CRUD/professor/CreateProfessor";
import EditProfessor from "./components/CRUD/professor/EditProfessor";
import ListProfessor from "./components/CRUD/professor/ListProfessor";
import ProfessorTableRow from "./components/CRUD/professor/ProfessorTableRow";

// O import e o componente a baixo preciasam
// ter o mesmo nome e letra maiúscula no início :)

// function App() {
//   return (
//     <IMCClasse altura = {1.77} peso = {56.0} />
//   )
// }

// function App() {
//   return (
//     <Herois sm = 'Superman' bt = 'Batman' ww ='Wonder Woman'/>
//   )
// }

// function App() {
//   return (
//     <Info nome='Ana' curso='SI' cidade='Quixeramobim'/>
//   )
// }

/*--------------------- PERSONAGENS E CASAS --------------------- */

// function App() {
//   return (
//     <Casa>
//        <Personagem nome = 'Arya' casa = 'Stark'/>
//        <Personagem nome = 'Tyrion' casa = 'Lannister'/>
//        <Personagem nome = 'Jhon' casa = 'Stark'/>
//     </Casa>
//   )
// }

// function App() {
//   return (
//     <Casa>
//        <Personagem nome = 'Arya' casa = 'Stark'/>
//        <Personagem nome = 'Tyrion' casa = 'Lannister'/>
//        <Personagem nome = 'Jhon' casa = 'Stark'/>
//     </Casa>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Filho/>
//     </div>
//   )
// }

/*--------------------- CIDADES --------------------- */

// function App() {
//   return (
//     <div>
//       <CidadeCC/>
//     </div>
//   )
// }

/*--------------------- ATIVIDADE 02 --------------------- */

//QUESTAO 01:

// function App(){
//   return(
//     <div class = 'App'>
//         <Arena2/>
//     </div>
//   )
// }

//QUESTÃO 04:

// function App() {
//   return(
//     <div className='App'>
//     <Arena show="A prova é no Moodle"
//           arena="Castelão"
//           enemy="Aragas">
//       <Hero nome="Saitama" imagem = {saitama}/>
//       <Hero nome="Minato" imagem = {minato}/>
//       <Hero nome="DogCaramelo" imagem = {caramelo}/>
//     </Arena>
//   </div>
//   )
// }

/*--------------------- HOOKS --------------------- */

// function App(){
//   return(
//     <div>
//         <Contador/>
//     </div>
//   )
// }

// export default App;

/*--------------------- NAVEGAÇÃO --------------------- */

function App() {
  function studentDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Estudante
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createStudent" className="nav-link">
              Criar Estudante
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listStudent" className="nav-link">
              Listar Estudante
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  function professorDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Professor
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createProfessor" className="nav-link">
              Criar Professor
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listProfessor" className="nav-link">
              Listar Professor
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            {studentDropDown()}
            {professorDropDown()}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
