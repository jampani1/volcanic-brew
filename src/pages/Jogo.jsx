import { useState, useEffect, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { generateCoupon, getDiscount, getMessage } from '../utils/couponGenerator'
import { Link } from 'react-router-dom'

// Componente do grão de café 3D - otimizado (sem rotação contínua)
function CoffeeBean({ position, isRipe, onClick, id, rotation }) {
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      position={position}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation() // Evita propagar clique para outros objetos
        onClick(id, isRipe)
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.4 : 1}
    >
      {/* Formato de grão de café (cápsula) */}
      <capsuleGeometry args={[0.18, 0.35, 4, 8]} />
      <meshStandardMaterial
        color={isRipe ? '#DAA520' : '#228B22'}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  )
}

// Árvore de café estilizada
function CoffeeTree({ position }) {
  return (
    <group position={position}>
      {/* Tronco */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 8]} />
        <meshStandardMaterial color="#5D4037" roughness={0.8} />
      </mesh>
      {/* Copa - múltiplas esferas para visual mais orgânico */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#2E7D32" roughness={0.7} />
      </mesh>
      <mesh position={[-0.3, 1.2, 0.2]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#388E3C" roughness={0.7} />
      </mesh>
      <mesh position={[0.3, 1.3, -0.2]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color="#1B5E20" roughness={0.7} />
      </mesh>
    </group>
  )
}

// Montanhas no fundo
function Mountains() {
  return (
    <group position={[0, 0, -8]}>
      <mesh position={[-4, 1.5, 0]}>
        <coneGeometry args={[3, 4, 4]} />
        <meshStandardMaterial color="#4A7C59" flatShading />
      </mesh>
      <mesh position={[0, 2, -2]}>
        <coneGeometry args={[4, 5, 4]} />
        <meshStandardMaterial color="#3D6549" flatShading />
      </mesh>
      <mesh position={[4, 1.2, 0]}>
        <coneGeometry args={[2.5, 3.5, 4]} />
        <meshStandardMaterial color="#5A8F6A" flatShading />
      </mesh>
    </group>
  )
}

// Cena do jogo
function GameScene({ beans, onBeanClick }) {
  return (
    <>
      {/* Iluminação melhorada */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
        color="#FFF8E7"
      />
      <hemisphereLight
        skyColor="#87CEEB"
        groundColor="#4A7C59"
        intensity={0.5}
      />

      {/* Céu */}
      <mesh position={[0, 10, -15]}>
        <planeGeometry args={[50, 30]} />
        <meshBasicMaterial color="#87CEEB" />
      </mesh>

      {/* Montanhas */}
      <Mountains />

      {/* Chão - gramado */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#4CAF50" />
      </mesh>

      {/* Árvores decorativas */}
      <CoffeeTree position={[-3.5, 0, -2]} />
      <CoffeeTree position={[3.5, 0, -2]} />
      <CoffeeTree position={[-1.5, 0, -3]} />
      <CoffeeTree position={[1.5, 0, -3]} />
      <CoffeeTree position={[0, 0, -4]} />

      {/* Grãos de café */}
      {beans.map((bean) => (
        <CoffeeBean
          key={bean.id}
          id={bean.id}
          position={bean.position}
          rotation={bean.rotation}
          isRipe={bean.isRipe}
          onClick={onBeanClick}
        />
      ))}
    </>
  )
}

// Tela inicial
function IntroScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-serra to-cafe flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-4">☕</div>
        <h1 className="font-titulo text-3xl md:text-4xl font-bold text-white mb-3">
          Colheita do Café
        </h1>
        <p className="font-corpo text-white/90 text-base mb-6">
          Clique nos grãos <span className="text-yellow-300 font-bold">dourados</span> para colher!
          <br />
          Evite os <span className="text-green-300 font-bold">verdes</span>.
        </p>

        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 mb-6">
          <p className="font-corpo text-white font-semibold text-sm mb-3">Prêmios:</p>
          <div className="space-y-2 text-left">
            <div className="flex justify-between items-center text-white/90 text-sm font-corpo">
              <span>100+ pontos</span>
              <span className="bg-cta/80 px-3 py-1 rounded-full font-bold">5% OFF</span>
            </div>
            <div className="flex justify-between items-center text-white/90 text-sm font-corpo">
              <span>200+ pontos</span>
              <span className="bg-cta px-3 py-1 rounded-full font-bold">10% OFF</span>
            </div>
            <div className="flex justify-between items-center text-white/90 text-sm font-corpo">
              <span>300+ pontos</span>
              <span className="bg-yellow-500 px-3 py-1 rounded-full font-bold">15% OFF</span>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-cta hover:bg-cta-hover text-white font-titulo font-bold text-lg px-8 py-4 rounded-2xl transition-all transform hover:scale-105 shadow-lg"
        >
          Começar!
        </button>

        <Link
          to="/"
          className="inline-block mt-4 font-corpo text-white/60 hover:text-white/80 transition-colors text-sm"
        >
          ← Voltar ao site
        </Link>
      </div>
    </div>
  )
}

// Tela de resultado
function ResultScreen({ score, coupon, onPlayAgain }) {
  const discount = getDiscount(score)
  const message = getMessage(score)

  const handleShare = () => {
    const text = coupon
      ? `Ganhei ${discount}% de desconto no Café Sete Quedas! Código: ${coupon.code} ☕`
      : 'Joguei Colheita do Café no Café Sete Quedas! ☕'

    if (navigator.share) {
      navigator.share({ text })
    } else {
      navigator.clipboard.writeText(text)
      alert('Copiado para a área de transferência!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cafe to-cafe-dark flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-3">
          {discount >= 15 ? '🏆' : discount > 0 ? '🎉' : '😅'}
        </div>

        <h2 className="font-titulo text-2xl font-bold text-white mb-1">
          {message}
        </h2>

        <p className="font-corpo text-white/80 text-lg mb-5">
          <span className="text-cta font-bold text-2xl">{score}</span> pontos
        </p>

        {coupon ? (
          <div className="bg-white rounded-2xl p-5 mb-6 shadow-xl">
            <p className="font-corpo text-texto-light text-xs mb-1">Seu cupom:</p>
            <p className="font-titulo text-2xl font-bold text-cafe tracking-wider">{coupon.code}</p>
            <div className="mt-2 inline-block bg-cta text-white px-4 py-1 rounded-full">
              <span className="font-titulo font-bold">{discount}% OFF</span>
            </div>
            <p className="font-corpo text-texto-light text-xs mt-3">
              Apresente no caixa da cafeteria
            </p>
          </div>
        ) : (
          <div className="bg-white/10 rounded-2xl p-5 mb-6">
            <p className="font-corpo text-white/80 text-sm">
              Precisa de 100+ pontos para ganhar desconto.
              <br />Tente novamente!
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={onPlayAgain}
            className="w-full bg-cta hover:bg-cta-hover text-white font-titulo font-bold py-3 rounded-xl transition-all"
          >
            Jogar Novamente
          </button>

          {coupon && (
            <button
              onClick={handleShare}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-corpo font-semibold py-3 rounded-xl transition-all"
            >
              Compartilhar
            </button>
          )}

          <Link
            to="/loja"
            className="font-corpo text-white/60 hover:text-white/80 transition-colors text-sm"
          >
            Ir para a loja →
          </Link>
        </div>
      </div>
    </div>
  )
}

// Componente principal do jogo
export default function Jogo() {
  const [gameState, setGameState] = useState('intro') // intro, playing, result
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(20) // Reduzido para 20 segundos
  const [beans, setBeans] = useState([])
  const [coupon, setCoupon] = useState(null)

  // Gera posição aleatória para os grãos (com distância mínima)
  const generateBean = useCallback((existingBeans = []) => {
    let position
    let attempts = 0
    const minDistance = 1.2 // Distância mínima entre grãos

    // Tenta encontrar posição que não sobreponha
    do {
      position = [
        (Math.random() - 0.5) * 6,
        Math.random() * 1.8 + 0.5,
        (Math.random() - 0.5) * 4 - 1
      ]
      attempts++
    } while (
      attempts < 10 &&
      existingBeans.some(bean => {
        const dx = bean.position[0] - position[0]
        const dy = bean.position[1] - position[1]
        const dz = bean.position[2] - position[2]
        return Math.sqrt(dx*dx + dy*dy + dz*dz) < minDistance
      })
    )

    return {
      id: Math.random().toString(36).substring(2, 11),
      position,
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      isRipe: Math.random() > 0.35 // 65% chance de ser maduro
    }
  }, [])

  // Inicializa grãos quando começa o jogo
  useEffect(() => {
    if (gameState === 'playing') {
      const initialBeans = []
      for (let i = 0; i < 10; i++) {
        initialBeans.push(generateBean(initialBeans))
      }
      setBeans(initialBeans)
    }
  }, [gameState, generateBean])

  // Timer do jogo
  useEffect(() => {
    if (gameState !== 'playing') return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState('result')
          setCoupon(generateCoupon(score))
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState, score])

  // Spawna novos grãos
  useEffect(() => {
    if (gameState !== 'playing') return

    const spawner = setInterval(() => {
      setBeans((prev) => {
        // Mantém entre 8-12 grãos na tela (menos = mais performance)
        if (prev.length < 12) {
          return [...prev, generateBean(prev)]
        }
        return prev
      })
    }, 500)

    return () => clearInterval(spawner)
  }, [gameState, generateBean])

  // Handler de clique no grão
  const handleBeanClick = useCallback((id, isRipe) => {
    setBeans((prev) => prev.filter((bean) => bean.id !== id))
    setScore((prev) => Math.max(0, prev + (isRipe ? 10 : -5))) // Não vai abaixo de 0
  }, [])

  // Reinicia o jogo
  const handlePlayAgain = () => {
    setScore(0)
    setTimeLeft(20)
    setBeans([])
    setCoupon(null)
    setGameState('intro')
  }

  // Tela inicial
  if (gameState === 'intro') {
    return <IntroScreen onStart={() => setGameState('playing')} />
  }

  // Tela de resultado
  if (gameState === 'result') {
    return (
      <ResultScreen
        score={score}
        coupon={coupon}
        onPlayAgain={handlePlayAgain}
      />
    )
  }

  // Tela do jogo
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* HUD Superior */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
          <p className="font-corpo text-texto-light text-[10px] uppercase tracking-wider">Pontos</p>
          <p className="font-titulo text-3xl font-bold text-cafe leading-none">{score}</p>
        </div>

        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg ${timeLeft <= 5 ? 'animate-pulse' : ''}`}>
          <p className="font-corpo text-texto-light text-[10px] uppercase tracking-wider">Tempo</p>
          <p className={`font-titulo text-3xl font-bold leading-none ${timeLeft <= 5 ? 'text-red-500' : 'text-cafe'}`}>
            {timeLeft}s
          </p>
        </div>
      </div>

      {/* Legenda inferior */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span className="font-corpo text-xs text-texto">+10</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-600"></div>
            <span className="font-corpo text-xs text-texto">-5</span>
          </div>
        </div>
      </div>

      {/* Canvas 3D */}
      <Canvas
        camera={{ position: [0, 4, 8], fov: 50 }}
        style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #B8E0F0 50%, #87CEEB 100%)' }}
      >
        <fog attach="fog" args={['#B8E0F0', 8, 20]} />
        <GameScene beans={beans} onBeanClick={handleBeanClick} />
      </Canvas>
    </div>
  )
}
