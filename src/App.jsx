import './App.css'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alert from './components/Alert'
import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'

function App() {
  const [message, setAlert] = useState({
    error: false,
    msg:"",
    color:"",
  })
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [lista, setLista] = useState(colaboradores)

  return (
    <>
    <h1>Lista de Colaboradores</h1>
    <Buscador colaboradores={colaboradores} setLista={setLista} />
    <div className='container'>
    <Listado 
    lista={lista}
    setLista={setLista}
    setColaboradores={setColaboradores}
    />
    <div>
    <h2>Agregar colaborador</h2>
    <Formulario
    setAlert={setAlert}
    colaboradores={colaboradores}
    setLista={setLista}
    setColaboradores={setColaboradores}
    />
    <Alert color={message.color} msg={message.msg}/>
    </div>
    </div>
    </>
  )
}
export default App
