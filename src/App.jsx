import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PopularRoutes from './components/PopularRoutes.jsx'
import WhyCTM from './components/WhyCTM.jsx'
import Premium from './components/Premium.jsx'
import Messagerie from './components/Messagerie.jsx'
import NetworkMap from './components/NetworkMap.jsx'
import AppDownload from './components/AppDownload.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularRoutes />
        <WhyCTM />
        <Premium />
        <Messagerie />
        <NetworkMap />
        <AppDownload />
      </main>
      <Footer />
    </>
  )
}
