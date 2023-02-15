import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Aboutus, Blog, CTA, Footer, Hero, Reasons, Services, Stats, Steps, Teams, Testimonials } from '../components'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ARCHIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Hero />
       <Aboutus/>
       <Services/>
       <Stats />
      {/*<CTA/>
      
      
      <Reasons />
      
      <Steps />

      <Teams/>
      <Testimonials />
      <Blog />
      <Footer /> */}
     
    </div>
  )
}

export default Home
