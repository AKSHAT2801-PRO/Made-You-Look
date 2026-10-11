import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Strip from './components/Strip.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'
import StickyBook from './components/StickyBook.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strip />
        <Services />
        <Gallery />
        <About />
        <Booking />
      </main>
      <Footer />
      <StickyBook />
    </>
  )
}
