import './App.css';
import { Testimonio } from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>

              <Testimonio 
              nombre='Francisco Javier Menayo Ramos'
              pais='España'
              imagen='Emma'
              cargo='Developer'
              empresa='freelance'
              testimonio='Me ha encantado poder aprender con los tutoriales de freecodecamp.Comienza mi nuevo futuro.'
              />

              <Testimonio 
              nombre='Javier'
              pais='España'
              imagen='Sarah'
              cargo='Estudiante'
              empresa='su casa'
              testimonio='No se para que es esto, pero mi papa esta muy contento y concentrado'
              />
              
              <Testimonio 
              nombre='Inés'
              pais='España'
              imagen='Shawn'
              cargo='Estudiante'
              empresa='su casa'
              testimonio='Me parece una forma muy provechosa de aprovechar el tiempo, valga la redundancia'
              />
      </div>
      
    </div>
  );
}

export default App;

