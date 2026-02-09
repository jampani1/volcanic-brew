import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function GameFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  // Aparece após 3 segundos na página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Para de pulsar após ser clicado
  const handleClick = () => {
    setIsPulsing(false)
  }

  if (!isVisible) return null

  return (
    <Link
      to="/jogo"
      onClick={handleClick}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 group"
    >
      {/* Círculo pulsante de fundo */}
      {isPulsing && (
        <span className="absolute inset-0 rounded-full bg-cta animate-ping opacity-75"></span>
      )}

      {/* Botão principal */}
      <div className="relative bg-gradient-to-br from-cta to-cafe text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        {/* Ícone de grão de café + joystick */}
        <div className="relative">
          <span className="text-2xl">☕</span>
          <span className="absolute -top-1 -right-1 text-xs bg-white text-cafe rounded-full w-5 h-5 flex items-center justify-center font-bold">
            🎮
          </span>
        </div>
      </div>

      {/* Tooltip que aparece no hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-white text-cafe px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          <p className="font-titulo font-bold text-sm">Jogue e Ganhe!</p>
          <p className="font-corpo text-xs text-texto-light">Até 15% de desconto</p>
        </div>
        {/* Seta */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
      </div>
    </Link>
  )
}
