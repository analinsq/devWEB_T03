import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CreateStudent = () => {
  const { name, setName } = useState("");
  const { course, setCourse } = useState("");
  const { ira, setIra } = useState(0);

  const handleSubmit = (event) => {
    console.log(name);
    console.log(course);
    console.log(ira);
  };

  return (
    <div>
      <h2> Criar Estudante</h2>
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
          <label>Curso:</label>
          <input
            type="text"
            className="form-control"
            value={course}
            course="course"
            onChange={(event) => {
              setCourse(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>IRA:</label>
          <input
            type="number"
            className="form-control"
            value={ira}
            ira="ira"
            onChange={(event) => {
              setIra(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input type="submit" value="Criar Estudante" />
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;
