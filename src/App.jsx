import { useState } from 'react'
import './App.css'
import Compclase from './components/Compclase'
import Compfuncion from './components/Compfuncion'
import Parrafo from './components/Parrafo'
import Contador from './components/Contador'
import CambiaTexto from './components/CambiaTexto'
import Listas from './components/Listas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Compclase />

      <div className="active">buenas noches</div>
      <Contador />
      <CambiaTexto />
      <Compfuncion />
      <Parrafo />
      <Listas />
    </div>
    </>
  )
}

export default App
