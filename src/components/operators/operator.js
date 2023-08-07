import React, { Component } from "react";

class Operators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sueldos: [],
    };
  }

  //argar los sueldos en el vector
  cargarSueldos = () => {
    const sueldos = [];
    for (let i = 0; i < 5; i++) {
      const sueldo = parseInt(
        prompt(`Ingrese el sueldo del operario ${i + 1}:`),
        10
      );
      sueldos.push(sueldo);
    }
    this.setState({ sueldos });
  };

  render() {
    const { sueldos } = this.state;

    return (
      <div>
        <button onClick={this.cargarSueldos}>Cargar Sueldos</button>
        {sueldos.length > 0 && (
          <div>
            <h2>Sueldos de los operarios:</h2>
            <ul>
              {sueldos.map((sueldo, index) => (
                <li key={index}>
                  Sueldo del operario {index + 1}: ${sueldo}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Operators;
