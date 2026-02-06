import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-titulo text-2xl font-bold text-white drop-shadow-md">
          Café Sete Quedas
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="font-corpo text-white/90 hover:text-white transition-colors">
            Início
          </Link>
          <Link to="/loja" className="font-corpo text-white/90 hover:text-white transition-colors">
            Loja
          </Link>
          <Link to="/historia" className="font-corpo text-white/90 hover:text-white transition-colors">
            Nossa História
          </Link>
          <Link 
            to="/loja" 
            className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-cafe text-white font-corpo font-semibold py-2 px-6 rounded transition-all duration-300"
          >
            Comprar
          </Link>
        </nav>

        {/* Botão Hamburger Mobile */}
        <button 
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white p-2"
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay Mobile */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Bottom Sheet Menu */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-3xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Links em row */}
        <nav className="flex justify-around py-6 px-4">
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center gap-2 text-texto hover:text-cta transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-corpo text-sm">Início</span>
          </Link>

          <Link 
            to="/loja" 
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center gap-2 text-texto hover:text-cta transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="font-corpo text-sm">Loja</span>
          </Link>

          <Link 
            to="/historia" 
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center gap-2 text-texto hover:text-cta transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="font-corpo text-sm">História</span>
          </Link>
        </nav>

        {/* Safe area padding para iPhones */}
        <div className="h-6"></div>
      </div>
    </header>
  )
}

export default Header
