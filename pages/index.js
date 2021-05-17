import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Abhishek Sahu</title>
        <meta name="description" content="This Resume is design and developed by abhishek sahu ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-7xl">
        <h1 className="text-5xl text-red-500" >
          Welcome to my portfolio
        </h1>
        <h1 className="text-3xl"> this is the teting purpose text </h1>
       </main>
    </div>
  )
}
