import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Barbers from './pages/Barbers'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

// IMPORTANT: For navigation, always use <Link> from react-router-dom, not <a> tags
// This ensures client-side routing works correctly with the preview URL base path
// Example: <Link to="/about">About</Link> instead of <a href="/about">About</a>

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/barbers" element={<Barbers />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Privacy Policy</h1><p className="mt-4">Privacy policy content goes here.</p></div>} />
        <Route path="/terms" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Terms of Service</h1><p className="mt-4">Terms of service content goes here.</p></div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default App
