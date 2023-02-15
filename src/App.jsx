import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Listado from "./components/Lista"
import { useState } from "react"

function App() {

  const [paciente, setPaciente] = useState([])
  const [itemPacient, setItempacient] = useState({})
  //* Funcion para eliminar pacienter
  const eliminar = (id) => {
    const aux = paciente.filter (pacient => pacient.id != id)
    setPaciente(aux)
  }

  return (
    <>
    <Header></Header>
    <div className=" my-5 mx-5 flex flex-col sm:flex-row">
      <Formulario 
      paciente={paciente} 
      setPaciente={setPaciente} 
      itemPaciente={itemPacient}
      setItempacient={setItempacient}/>
      <Listado 
      paciente={paciente}
      eliminar = {eliminar} 
      setItempacient={setItempacient}/>
    </div>
    </>
  )
}

export default App
