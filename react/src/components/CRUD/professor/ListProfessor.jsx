import React from "react";
import { professor } from "./data";
import ProfessorTableRow from "./ProfessorTableRow";

const ListProfessor = () => {
  function generateTable() {
    if (!professor) return;
    return professor.map((professor, i) => {
      return <ProfessorTableRow professor={professor} key={i} />;
    });
  }

  return (
    <div>
      <h2>Listar Professor</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Universidade</th>
          <th>Titulação</th>
          <th colSpan="2"> </th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
