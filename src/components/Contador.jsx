import React, {useState} from 'react'

const Contador = () => {
    const [counter, setContador] = useState(0);
    const aumentar = () => {setContador(counter+1)}
    const restar = () => {setContador(counter-1)}
  return (
    <div>
        <h2>Contador: {counter}</h2>
        <button onClick={aumentar}>+</button>
        <button onClick={restar}>-</button>
        <h5>
            {
                counter%2==0?'Par': 'Impar'
            }
        </h5>
    </div>
  )
}

export default Contador