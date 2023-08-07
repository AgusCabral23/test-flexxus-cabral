import OddNumbers from "./components/odd-numbers/odd-numbers";
import Operators from "./components/operators/operator";
import StudentForm from "./components/student-age/student";
import ProductList from "./components/marketplace/market";

function App() {
  const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

const elementosNoComunes = y.filter((elemento) => !x.includes(elemento));

console.log(elementosNoComunes);
  return (
    <div>
      <h1>Impares</h1>
      <OddNumbers />

      <h1>Programa de Sueldos de Operarios</h1>
      <Operators />

      <h1>Formulario Estudiantes</h1>
      <StudentForm />

      <h1>Marketplace</h1>
      <ProductList />
    </div>
  );
}

export default App;
