import Head from 'next/head'

import Title from '../src/componentes/title/Title'
import Subtitle from '../src/componentes/subtitle/Subtitle'

function HomePage () {
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
    </div>
    </>
  )
}

export default HomePage 