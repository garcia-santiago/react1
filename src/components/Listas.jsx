import React from 'react'

const Listas = () => {
    const arrayI = ['Football', 'Baseball', 'Tennis', 'Basketball', 'Hockey']
    const [lista, setLista] = React.useState(arrayI)

    const obj1 = [
        {id: 1, nombre:'Juan', apellido:'Perez'},
        {id: 2, nombre:'Pedro', apellido:'García'},
        {id: 3, nombre:'Maria', apellido:'Perez'},

    ]
    const [usuarios, setUsuarios] = React.useState(obj1)
    return (
    <div>
        <h2>Listas</h2>
        <ol>
            {
                lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ol>
        <ul>
            {
                usuarios.map((item) => (
                    <li key={item.id}>{item.nombre} {item.apellido}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Listas