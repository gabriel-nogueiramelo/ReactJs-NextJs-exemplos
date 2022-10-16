import { useState } from 'react'
import Head from 'next/head'

import Title from '../src/componentes/title/Title'
import Subtitle from '../src/componentes/subtitle/Subtitle'
import Button from '../src/componentes/button/Button'


function HomePage () {
  const [click, setClick] = useState(0)

const handleClick = () => {
  setClick(click + 1)
}

  return (
    <>
    <Head>
      <title>Titulo diferente da home page</title>
    </Head>
    <div>
      <Title>Um titulo</Title>
      <Subtitle text="Um subtitulo" />
      <Title>Outro titulo</Title>
      <Subtitle text="Outro subtitulo" />
      <Button 
      onClick={handleClick}
      >
        Botão teste
        </Button>
        <p>Cliques: {click}</p>
    </div>
    </>
  )
}

export default HomePage 