import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import GameFloatingButton from './components/GameFloatingButton'
import Home from './pages/Home'
import Loja from './pages/Loja'
import Historia from './pages/Historia'
import Jogo from './pages/Jogo'

// Componente wrapper para esconder header em páginas específicas
function AppContent() {
  const location = useLocation()
  const isGamePage = location.pathname === '/jogo'

  return (
    <div className="min-h-screen">
      {!isGamePage && <Header />}
      {!isGamePage && <GameFloatingButton />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/jogo" element={<Jogo />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
