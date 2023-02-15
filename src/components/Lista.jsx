import Pacientes from "./Pacientes";

const Listado = ({paciente,setItempacient,eliminar}) => {

    return ( 
    <div className="w-3/5 sm:h-screen overflow-y-scroll">
        <h2 className="text-center my-4 font-bold text-indigo-500">{paciente.length===0 ? "No hay pacientes" : "Lista de pacientes"}</h2>
        {paciente.map (nuevoPaciente => 
        <Pacientes 
        paciente = {nuevoPaciente} 
        key= {nuevoPaciente.id} 
        setItempacient={setItempacient} 
        eliminar= {eliminar}/>)}
    </div> );
}
 
export default Listado;