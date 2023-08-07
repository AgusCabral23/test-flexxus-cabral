import React, { useState } from "react";

function StudentForm() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const alumno = new Alumno(nombre, parseInt(edad, 10));
    const mensajeAlumno = alumno.esMayorEdad()
      ? "es mayor de edad."
      : "NO es mayor de edad.";
    setMensaje(`${alumno.nombre} ${mensajeAlumno}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={handleEdadChange}
            required
          />
        </div>
        <button type="submit">Guardar Alumno</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  esMayorEdad() {
    return this.edad >= 18;
  }
}

export default StudentForm;
