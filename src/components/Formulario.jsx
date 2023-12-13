import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Formulario({ setAlert, colaboradores, setLista, setColaboradores}) {
    //Estados del formulario
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const [telefono, setTelefono]  = useState('')
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   
    //Envio de Formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        //Validar campos
        if(nombre === '' || correo === '' || edad === '' || cargo === ''|| telefono === ''){
            setAlert({
                error: true,
                msg: "Completa todos los campos",
                color: "danger",
            })
            return
        }
        if(!emailPattern.test(correo)){
            setAlert({
                error: true,
                msg: "Ingrese un email valido",
                color: "danger",
            })
            return
        }
         //Agregamos la tarea
        const nuevoColaborador =  {
        id: colaboradores.length + 1,
        nombre: nombre,
        correo: correo,
        edad: edad,
        cargo: cargo,
        telefono: telefono,
        }
        setColaboradores([...colaboradores, nuevoColaborador])
        setLista([...colaboradores, nuevoColaborador])
        
        setAlert({
                error: false,
                msg: "Colaborador agregado con exito",
                color: "success",
        })
        //vaciar el formulario
        setNombre('')
        setCorreo('')
        setEdad('')
        setCargo('')
        setTelefono('')
        return
    }
    return(
       <>
        <Form onSubmit={enviarFormulario} noValidate>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Nombre del colaborador" onChange={(e) => setNombre(e.target.value)} value={nombre} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email del Colaborador" onChange={(e) => setCorreo(e.target.value)} value={correo} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Edad del colaborador" onChange={(e) => setEdad(e.target.value)} value={edad} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirm">
                <Form.Control type="text" placeholder="Cargo del colaborador" onChange={(e) => setCargo(e.target.value)} value={cargo}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirm">
                <Form.Control type="text" placeholder="Telefono del colaborador" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
            </Form.Group>
            <Button variant="primary" type="submit" className="btnRegistro">
                Agregar colaborador
            </Button>
        </Form>
       </> 
    )
}
export default Formulario