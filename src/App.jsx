import './App.css'
import useLenis from './lib/useLenis'
import HoodieHero from './components/HoodieHero'
import Footer from './components/Footer'

function App() {
  useLenis()

  return (
    <>
      <HoodieHero />
      <Footer />
    </>
  )
}

export default App
