import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import PopularRoutes from './components/PopularRoutes.jsx'
import WhyCTM from './components/WhyCTM.jsx'
import Premium from './components/Premium.jsx'
import Messagerie from './components/Messagerie.jsx'
import NetworkMap from './components/NetworkMap.jsx'
import AppDownload from './components/AppDownload.jsx'
import Footer from './components/Footer.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import Cursor from './components/Cursor.jsx'

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
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
