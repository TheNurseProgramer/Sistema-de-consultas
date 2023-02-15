import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({paciente,itemPaciente,setPaciente,setItempacient}) => {

    const [nombre,setNombre] = useState ("");
    const [APaterno,setAPaterno] = useState ("");
    const [AMaterno,setAMaterno] = useState ("");
    const [mail,setMail] = useState ("");
    const [fecha,setFecha] = useState ("");
    const [observacion,setObservacion] = useState ("");
    const [error,setError] = useState (false)

    //*Useeffect para editar los paciented 
    useEffect(()=>{
    if (Object.keys(itemPaciente).length>0){
        setNombre (itemPaciente.nombre)
        setAPaterno (itemPaciente.APaterno)
        setAMaterno (itemPaciente.AMaterno)
        setMail (itemPaciente.mail)
        setFecha (itemPaciente.fecha)
        setObservacion (itemPaciente.observacion)
    }
   
    },[itemPaciente])    

    class PacienteMed {
        constructor (nombre, APaterno, AMaterno, mail,fecha,observacion){
            this.nombre=nombre,
            this.APaterno=APaterno,
            this.AMaterno=AMaterno,
            this.mail=mail,
            this.fecha=fecha,
            this.observacion=observacion,
            this.id
        }
        generateId = () => Math.random().toString(36).substr(2, 18)+ Date.now().toString(36);
    }
   
    //* funcion para validar la informacion
    const enviar = (e ) => {
        e.preventDefault ();
    //* se valida la informacion
        if ([nombre, APaterno, AMaterno, mail,fecha,observacion].includes ("") ){
        setError (true)
        }else{
        setError (false);
    //* se genera el array de pacientes
        const PacienteLista = new PacienteMed (nombre, APaterno, AMaterno, mail,fecha,observacion)
            if (itemPaciente.id){
                PacienteLista.id = itemPaciente.id
                const pacienteAux = paciente.map (aux => aux.id === itemPaciente.id ? PacienteLista : aux)
                setPaciente (pacienteAux)
                setItempacient ({})
            }else{
                PacienteLista.id = PacienteLista.generateId()
                setPaciente ([...paciente , PacienteLista])
            }
        
        setNombre ("")
        setAPaterno ("")
        setAMaterno ("")
        setMail ("")
        setFecha ("")
        setObservacion ("")
        };
    }
    return ( 
        <div className="w-2/5">
            <h2 className="text-center my-4 font-bold text-indigo-500">Datos personales</h2>
            <form className="bg-white shadow-md rounded-md px-10 py-5 mb-10 sm:w-full"
            onSubmit={enviar}>
            {error && <Error/>}
{/* INPUT DE NOMBRE */} 
                <div className=" block py-2 px-2">
                    <label htmlFor="Nombre" className="block font-semibold">Nombres</label>
                    <input id = "Nombre" 
                    type="text" 
                    placeholder="Nombres" 
                    className="border-2 w-full p-2 mt-2 rounded-md" 
                    value={nombre}
                    onChange= {(e)=>setNombre(e.target.value)}/>
                </div>
{/*INPUT DE APELLIDO PATERNO */}
                <div className=" block py-2 px-2">
                    <label className="block font-semibold" htmlFor="ap" >Apellido Paterno</label>
                    <input id = "ap" 
                    type="text" 
                    placeholder="Primer apellido" 
                    className="border-2 w-full p-2 mt-2 rounded-md"
                    value={APaterno}
                    onChange= {(e)=>setAPaterno(e.target.value)}/>
                </div>
{/*INPUT DE APELLIDO MATERNO*/} 
                <div className=" block py-2 px-2">
                    <label htmlFor="am" className="block font-semibold">Apellido Materno</label>
                    <input id = "am" 
                    type="text" 
                    placeholder="Segundo apellido" 
                    className="border-2 w-full p-2 mt-2 rounded-md"
                    value={AMaterno}
                    onChange= {(e)=>setAMaterno(e.target.value)}/>
                </div>
{/* INPUT DE EMIAL*/}
                <div className=" block py-2 px-2">
                    <label htmlFor="mail" className="block font-semibold">Email</label>
                    <input id = "mail" 
                    type="email" 
                    placeholder="tu.correo@email.com" 
                    className="border-2 w-full p-2 mt-2 rounded-md"
                    value={mail}
                    onChange= {(e)=>setMail(e.target.value)}/>
                </div>
{/*INPUT DE FECHA*/}
                <div className=" block py-2 px-2">
                    <label htmlFor="fecha" className="block font-semibold">Seleccionar Fecha</label>
                    <input id = "fecha" 
                    type="date"
                    className="border-2 w-full p-2 mt-2 rounded-md"
                    value={fecha}
                    onChange= {(e)=>setFecha(e.target.value)}/>
                </div>
{/*INPUT DE OBSERVACIONES*/}
                <div className=" block py-2 px-2">
                    <label htmlFor="Observaciones" className="block font-semibold">Observaciones</label>
                    <textarea id="Observaciones" 
                    className="border-2 w-full p-2 mt-2 rounded-md"
                    value={observacion}
                    onChange= {(e)=>setObservacion(e.target.value)}></textarea>
                </div>
            <input type="submit" id="enviar" className=" bg-indigo-500 p-3 text-white w-full hover:bg-indigo-800 cursor-pointer rounded-md" value={itemPaciente.id ? "Editar paciente" : "Agregar paciente"}/>
            </form>
        </div>
     );
} 
export default Formulario;