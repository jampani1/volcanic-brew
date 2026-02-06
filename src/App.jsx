import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Loja from './pages/Loja'
import Historia from './pages/Historia'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/historia" element={<Historia />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
