const Pacientes = ({paciente,setItempacient,eliminar}) => {
  const confirmacion = () => {
    const respuesta = confirm("¿Seguro que deasea eliminar al paciente?")
    respuesta && eliminar(paciente.id)
  }
    return (
    <div className="bg-white mb-2 shadow-md rounded-md px-10 py-5 mx-2">
        <p className="block font-semibold mb-1">Id: {" "}
            <span className="text-red-500"> {paciente.id}</span>
        </p>
        <p className="block font-semibold mb-1">Nombre: {" "}
            <span className="text-gray-500"> {paciente.nombre}</span>
        </p>
        <p className="block font-semibold mb-1">Apellido Paterno: {" "}
            <span className="text-gray-500"> {paciente.APaterno}</span>
        </p>
        <p className="block font-semibold mb-1">Apellido Materno: {" "}
            <span className="text-gray-500"> {paciente.AMaterno}</span>
        </p>
        <p className="block font-semibold mb-1">Email: {" "}
            <span className="text-gray-500"> {paciente.mail}</span>
        </p>
        <p className="block font-semibold mb-1">Fecha de consulta: {" "}
            <span className="text-gray-500"> {paciente.fecha}</span>
        </p>
        <p className="block font-semibold mb-1">Observaciones: {" "}
            <p className="text-gray-500 text-justify"> {paciente.observacion}</p>
        </p>
        <div className="flex justify-between mt-5">
            <button type="button" className=" bg-indigo-500 px-10 py-2 rounded-md text-white mr-10 hover:bg-indigo-800 cursor-pointer"
            onClick={()=>setItempacient(paciente)}>Editar</button>
            <button type="button" className=" bg-red-500 px-10 py-2 rounded-md text-white hover:bg-red-800 cursor-pointer"
            onClick={confirmacion}>Eliminar</button>
        </div>
    </div>
  )
}

export default Pacientes