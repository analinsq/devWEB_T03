import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CreateProfessor = () => {
  const { name, setName } = useState("");
  const { university, setUniversity } = useState("");
  const { degree, setDegree } = useState("");

  const handleSubmit = (event) => {
    console.log(name);
    console.log(university);
    console.log(degree);
  };

  return (
    <div>
      <h2> Criar Professor</h2>
      <h2>Name: {name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Universidade:</label>
          <input
            type="text"
            className="form-control"
            value={university}
            university="university"
            onChange={(event) => {
              setUniversity(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Titulação:</label>
          <input
            type="text"
            className="form-control"
            value={degree}
            degree="degree"
            onChange={(event) => {
              setDegree(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input type="submit" value="Criar Professor" />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessor;
