import Head from 'next/head'
import { Layout } from 'components'

const Home: React.FC = () => {
  return (
    <div >
      <Head>
        <title>Vendas App</title>
        <meta name="description" content="Aplicativo de vendas do curso de Next.js e sprinboot do prof 
        Douglas de Souza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
      
    </div>
  )
}

export default Home
