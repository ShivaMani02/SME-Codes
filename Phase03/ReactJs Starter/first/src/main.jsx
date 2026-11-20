import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import { Footer } from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App title="Iphone" desc="phone iphone16" price="100000" />
    <App title="Samsung" desc="phone Samsung Ultra" price="105000" />
    <App title="Oppo" desc="phone oppo cam"  />
    <Footer />
  </StrictMode>,
)
