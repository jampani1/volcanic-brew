import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { generateCoupon, getDiscount } from '../utils/couponGenerator'

// Emojis temáticos do café
const CARD_EMOJIS = ['☕', '🫘', '🥛', '🍰', '🥐', '❤️', '⛰️', '☀️']

// Embaralha o array
function shuffle(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Cria o baralho com pares
function createDeck() {
  const pairs = [...CARD_EMOJIS, ...CARD_EMOJIS]
  return shuffle(pairs).map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }))
}

// Calcula pontuação baseada no tempo
function calculateScore(seconds) {
  if (seconds <= 60) return 300  // 15% desconto
  if (seconds <= 90) return 200  // 10% desconto
  if (seconds <= 120) return 100 // 5% desconto
  return 50 // Sem desconto significativo
}

// Componente de carta
function Card({ card, onClick, disabled }) {
  const handleClick = () => {
    if (!disabled && !card.isFlipped && !card.isMatched) {
      onClick(card.id)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`
        aspect-square cursor-pointer perspective-1000
        ${disabled || card.isFlipped || card.isMatched ? 'pointer-events-none' : ''}
      `}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-500 transform-style-3d
          ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}
        `}
      >
        {/* Frente (verso da carta) */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-cafe to-cafe-dark rounded-xl flex items-center justify-center shadow-lg border-2 border-cafe-light">
          <span className="text-3xl md:text-4xl text-white/30">?</span>
        </div>

        {/* Verso (emoji) */}
        <div
          className={`
            absolute inset-0 backface-hidden rotate-y-180 rounded-xl flex items-center justify-center shadow-lg border-2
            ${card.isMatched ? 'bg-green-100 border-green-400' : 'bg-white border-cta'}
          `}
        >
          <span className="text-4xl md:text-5xl">{card.emoji}</span>
        </div>
      </div>
    </div>
  )
}

// Tela inicial
function IntroScreen({ onStart }) {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-cafe via-cafe-dark to-black flex items-center justify-center px-4">
      <div className={`text-center max-w-md transition-all duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-7xl mb-6 animate-bounce">🧠</div>
        <h1 className="font-titulo text-3xl md:text-4xl font-bold text-white mb-3">
          Jogo da Memória
        </h1>
        <p className="font-corpo text-white/80 text-base mb-8">
          Encontre os pares e ganhe desconto!
          <br />Quanto mais rápido, maior o prêmio.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6 text-left">
          <p className="font-corpo text-white/90 text-sm mb-3">Premiação por tempo:</p>
          <ul className="font-corpo text-white/70 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-cta">🏆</span> Até 60s = <span className="text-cta font-bold">15% OFF</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cta">🥈</span> Até 90s = <span className="text-cta font-bold">10% OFF</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cta">🥉</span> Até 120s = <span className="text-cta font-bold">5% OFF</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-cta hover:bg-cta-hover text-white font-titulo font-bold text-lg py-4 rounded-2xl transition-all transform hover:scale-105 shadow-lg"
        >
          Começar Jogo
        </button>

        <Link
          to="/"
          className="inline-block mt-4 font-corpo text-white/50 hover:text-white/70 transition-colors text-sm"
        >
          ← Voltar ao site
        </Link>
      </div>
    </div>
  )
}

// Tela do jogo
function GameScreen({ onComplete }) {
  const [cards, setCards] = useState(() => createDeck())
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isChecking, setIsChecking] = useState(false)

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Verifica se completou
  useEffect(() => {
    if (matchedPairs === 8) {
      const score = calculateScore(seconds)
      setTimeout(() => onComplete(score, seconds, moves), 500)
    }
  }, [matchedPairs, seconds, moves, onComplete])

  // Verifica match quando 2 cartas estão viradas
  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true)
      setMoves((m) => m + 1)

      const [first, second] = flippedCards
      const firstCard = cards.find((c) => c.id === first)
      const secondCard = cards.find((c) => c.id === second)

      if (firstCard.emoji === secondCard.emoji) {
        // Match!
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, isMatched: true }
                : card
            )
          )
          setMatchedPairs((p) => p + 1)
          setFlippedCards([])
          setIsChecking(false)
        }, 500)
      } else {
        // Sem match - desvira
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          )
          setFlippedCards([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }, [flippedCards, cards])

  const handleCardClick = useCallback((cardId) => {
    if (isChecking || flippedCards.length >= 2) return

    setCards((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, isFlipped: true } : card
      )
    )
    setFlippedCards((prev) => [...prev, cardId])
  }, [isChecking, flippedCards])

  const formatTime = (s) => {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cafe via-cafe-dark to-black px-4 py-6">
      {/* Header com stats */}
      <div className="max-w-md mx-auto mb-6">
        <div className="flex justify-between items-center text-white mb-4">
          <Link to="/" className="font-corpo text-white/50 hover:text-white/70 text-sm">
            ← Sair
          </Link>
          <h1 className="font-titulo text-xl font-bold">Jogo da Memória</h1>
          <div className="w-12"></div>
        </div>

        <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="text-center">
            <p className="font-corpo text-white/60 text-xs">Tempo</p>
            <p className={`font-titulo text-xl font-bold ${seconds > 90 ? 'text-red-400' : seconds > 60 ? 'text-yellow-400' : 'text-cta'}`}>
              {formatTime(seconds)}
            </p>
          </div>
          <div className="text-center">
            <p className="font-corpo text-white/60 text-xs">Pares</p>
            <p className="font-titulo text-xl font-bold text-white">
              {matchedPairs}/8
            </p>
          </div>
          <div className="text-center">
            <p className="font-corpo text-white/60 text-xs">Jogadas</p>
            <p className="font-titulo text-xl font-bold text-white">
              {moves}
            </p>
          </div>
        </div>
      </div>

      {/* Grid de cartas */}
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={handleCardClick}
              disabled={isChecking}
            />
          ))}
        </div>
      </div>

      {/* Dica de tempo */}
      <div className="max-w-md mx-auto mt-6 text-center">
        <p className="font-corpo text-white/40 text-xs">
          {seconds <= 60 ? '🏆 Rumo aos 15%!' : seconds <= 90 ? '🥈 Ainda dá 10%!' : seconds <= 120 ? '🥉 Corra para 5%!' : '⏰ Continue tentando!'}
        </p>
      </div>
    </div>
  )
}

// Tela de resultado
function ResultScreen({ score, seconds, moves, onRestart }) {
  const [fadeIn, setFadeIn] = useState(false)
  const coupon = generateCoupon(score)
  const discount = getDiscount(score)

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100)
  }, [])

  const formatTime = (s) => {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleShare = () => {
    const text = `Completei o Jogo da Memória do Café Sete Quedas em ${formatTime(seconds)} com ${moves} jogadas! Ganhei ${discount}% de desconto! ☕🧠`
    if (navigator.share) {
      navigator.share({ text })
    } else {
      navigator.clipboard.writeText(text)
      alert('Copiado para a área de transferência!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cafe via-cafe-dark to-black flex items-center justify-center px-4 py-8">
      <div className={`text-center max-w-md transition-all duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Resultado */}
        <div className="text-6xl mb-4">
          {discount >= 15 ? '🏆' : discount >= 10 ? '🥈' : discount >= 5 ? '🥉' : '☕'}
        </div>
        <h2 className="font-titulo text-3xl font-bold text-white mb-2">
          {discount >= 15 ? 'Memória de Mestre!' : discount >= 10 ? 'Muito Bem!' : discount >= 5 ? 'Bom Trabalho!' : 'Concluído!'}
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
          <div className="text-center">
            <p className="font-corpo text-white/60 text-xs">Tempo</p>
            <p className="font-titulo text-2xl font-bold text-cta">{formatTime(seconds)}</p>
          </div>
          <div className="text-center">
            <p className="font-corpo text-white/60 text-xs">Jogadas</p>
            <p className="font-titulo text-2xl font-bold text-white">{moves}</p>
          </div>
        </div>

        {/* Cupom */}
        {coupon && (
          <div className="bg-white rounded-2xl p-5 mb-6 shadow-xl">
            <p className="font-corpo text-texto-light text-xs mb-1">Seu cupom de desconto:</p>
            <p className="font-titulo text-2xl font-bold text-cafe tracking-wider mb-2">{coupon.code}</p>
            <div className="inline-block bg-cta text-white px-4 py-1 rounded-full">
              <span className="font-titulo font-bold">{discount}% OFF</span>
            </div>
            <p className="font-corpo text-texto-light text-xs mt-3">
              Válido para compras na loja
            </p>
          </div>
        )}

        {!coupon && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6">
            <p className="font-corpo text-white/80 text-sm">
              Tente novamente para ganhar um desconto!
              <br />Complete em menos de 2 minutos.
            </p>
          </div>
        )}

        {/* Ações */}
        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-corpo font-semibold py-3 rounded-xl transition-all"
          >
            Jogar Novamente
          </button>

          <button
            onClick={handleShare}
            className="w-full bg-cta hover:bg-cta-hover text-white font-titulo font-bold py-3 rounded-xl transition-all"
          >
            Compartilhar Resultado
          </button>

          <Link
            to="/"
            className="inline-block font-corpo text-white/50 hover:text-white/70 transition-colors text-sm"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  )
}

// Componente principal
export default function Jogo() {
  const [gameState, setGameState] = useState('intro')
  const [result, setResult] = useState(null)

  const handleStart = () => {
    setGameState('playing')
    setResult(null)
  }

  const handleComplete = useCallback((score, seconds, moves) => {
    setResult({ score, seconds, moves })
    setGameState('result')
  }, [])

  const handleRestart = () => {
    setGameState('intro')
    setResult(null)
  }

  if (gameState === 'intro') {
    return <IntroScreen onStart={handleStart} />
  }

  if (gameState === 'result' && result) {
    return (
      <ResultScreen
        score={result.score}
        seconds={result.seconds}
        moves={result.moves}
        onRestart={handleRestart}
      />
    )
  }

  return <GameScreen onComplete={handleComplete} />
}
