import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Listado({ lista, setLista, setColaboradores }) {  
    const eliminarColaborador = (colaborador) => {
        const listaFiltrada = lista.filter(elem => elem.id !== colaborador.id)
        setLista(listaFiltrada)
        setColaboradores(listaFiltrada)
    }

    return (
      <Table striped bordered hover variant="light" size='xl'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {lista.map((elem)=>(
                <tr key={elem.id}>
                    <td>{elem.nombre}</td>
                    <td>{elem.correo}</td>
                    <td>{elem.edad}</td>
                    <td>{elem.cargo}</td>
                    <td>{elem.telefono}</td>
                    <td><Button variant="danger" onClick={()=>eliminarColaborador(elem)}>X</Button></td>
                </tr>
            ))}
        </tbody>
      </Table>
    )
  }
  export default Listado;