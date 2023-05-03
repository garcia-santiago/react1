import React from 'react'

const Parrafo = () => {
    const texto1 = 'Real Madrid'
    const urlIMG = 'https://upload.wikimedia.org/wikipedia/an/thumb/c/c7/Logo_Real_Madrid.svg/1200px-Logo_Real_Madrid.svg.png'
    const altText = 'Logo del Real Madrid'
  return (
    <>
        <div>
            Componente Parrafo!
            <h3>{texto1}</h3>
            <img src={urlIMG} alt={altText} width={700} height={900} />
        </div>
    </>
  )
}

export default Parrafo