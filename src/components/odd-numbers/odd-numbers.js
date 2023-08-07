import React, { useState } from "react";

function OddNumbers() {
  const [numerosImpares, setNumerosImpares] = useState([]);
  const [mostrarImpares, setMostrarImpares] = useState(false);

  // Función para mostrar u ocultar los números impares al hacer clic en el botón
  const alternarMostrarImpares = () => {
    if (!mostrarImpares) {
      const impares = [];
      for (let i = 1; i <= 100; i += 2) {
        impares.push(i);
      }
      setNumerosImpares(impares);
    } else {
      setNumerosImpares([]);
    }
    setMostrarImpares(!mostrarImpares);
  };

  return (
    <div>
      <button onClick={alternarMostrarImpares}>
        {mostrarImpares ? "Ocultar Impares" : "Mostrar Impares"}
      </button>
      <ul>
        {mostrarImpares &&
          numerosImpares.map((numero, index) => <li key={index}>{numero}</li>)}
      </ul>
    </div>
  );
}

export default OddNumbers;
