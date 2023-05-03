import React, { useState } from 'react'

const CambiaTexto = () => {
    const [text, setTexto] = useState('Texto default')
    const click = () => setTexto('Texto actualizado!')
  return (
    <div>
        <p>{text}</p>
        <button onClick={click}>Actualizar TXT</button>
    </div>
  )
}

export default CambiaTexto