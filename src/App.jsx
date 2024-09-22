import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Services from './components/services/Services'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <main className='recursive '>

    <Header/>
      <Hero/>
      <Services/>
    </main>
    </>
  )
}

export default App
