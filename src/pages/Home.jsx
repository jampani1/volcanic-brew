import { Link } from 'react-router-dom'
import heroBg from '../assets/images/inside_view.webp'
// Adicione mais imagens conforme você baixar:
// import cafeEspecial from '../assets/images/cafe-especial.webp'
// import fazenda from '../assets/images/fazenda.webp'

const Home = () => {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen flex items-center justify-center">
        <img 
          src={heroBg} 
          alt="Interior da cafeteria Sete Quedas" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="font-corpo text-white/80 text-lg mb-4 tracking-wide">
            Serra da Mantiqueira • Poços de Caldas
          </p>
          <h1 className="font-titulo text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Tradição de 5 gerações em cada xícara
          </h1>
          <p className="font-corpo text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Café especial produzido em solo vulcânico, com amor e qualidade reconhecida
          </p>
          <Link 
            to="/loja"
            className="inline-block bg-cta hover:bg-white hover:text-cafe text-white font-corpo font-semibold text-lg py-4 px-12 rounded transition-all duration-300"
          >
            Conhecer nossos cafés
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== TRUST BADGES ========== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a 
              href="https://cafesetequedas.com.br/nossa-historia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg hover:bg-creme transition-colors group"
            >
              <span className="text-4xl mb-3">🏆</span>
              <h3 className="font-titulo text-xl font-bold text-cafe mb-2 group-hover:text-cta transition-colors">
                Café Premiado
              </h3>
              <p className="font-corpo text-texto-light text-sm">
                3º lugar no Concurso de Qualidade • Pontuação 83,55
              </p>
            </a>

            <a 
              href="https://maps.google.com/?q=Café+Sete+Quedas+Poços+de+Caldas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg hover:bg-creme transition-colors group"
            >
              <span className="text-4xl mb-3">📍</span>
              <h3 className="font-titulo text-xl font-bold text-cafe mb-2 group-hover:text-cta transition-colors">
                Serra da Mantiqueira
              </h3>
              <p className="font-corpo text-texto-light text-sm">
                Poços de Caldas, MG • Altitude 1.200m
              </p>
              <span className="font-corpo text-cta text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver no mapa →
              </span>
            </a>

            <div className="flex flex-col items-center p-6">
              <span className="text-4xl mb-3">☕</span>
              <h3 className="font-titulo text-xl font-bold text-cafe mb-2">
                Desde 1993
              </h3>
              <p className="font-corpo text-texto-light text-sm">
                Tradição familiar de 5 gerações
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUTOS EM DESTAQUE ========== */}
      <section className="bg-creme py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-titulo text-3xl md:text-4xl font-bold text-cafe mb-4">
              Nossos Cafés
            </h2>
            <p className="font-corpo text-texto-light max-w-2xl mx-auto">
              Produzidos com cuidado desde o plantio até a torra, nossos cafés carregam o sabor único da Serra da Mantiqueira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-64 bg-cafe-light flex items-center justify-center">
                {/* Substituir por imagem real */}
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="font-titulo text-xl font-bold text-cafe mb-2">
                  Café Especial
                </h3>
                <p className="font-corpo text-texto-light text-sm mb-4">
                  Pontuação 86 • Notas de chocolate e caramelo
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-corpo font-bold text-cafe text-xl">
                    R$ 45,00
                  </span>
                  <Link 
                    to="/loja"
                    className="bg-cta hover:bg-cta-hover text-white font-corpo text-sm font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Comprar
                  </Link>
                </div>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-64 bg-cafe-light flex items-center justify-center">
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="font-titulo text-xl font-bold text-cafe mb-2">
                  Café Tradicional
                </h3>
                <p className="font-corpo text-texto-light text-sm mb-4">
                  O sabor clássico do Sete Quedas
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-corpo font-bold text-cafe text-xl">
                    R$ 30,00
                  </span>
                  <Link 
                    to="/loja"
                    className="bg-cta hover:bg-cta-hover text-white font-corpo text-sm font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Comprar
                  </Link>
                </div>
              </div>
            </div>

            {/* Produto 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-64 bg-cafe-light flex items-center justify-center">
                <span className="text-6xl">🥛</span>
              </div>
              <div className="p-6">
                <h3 className="font-titulo text-xl font-bold text-cafe mb-2">
                  Leite Fresco
                </h3>
                <p className="font-corpo text-texto-light text-sm mb-4">
                  Direto da fazenda para sua mesa
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-corpo font-bold text-cafe text-xl">
                    R$ 12,00
                  </span>
                  <Link 
                    to="/loja"
                    className="bg-cta hover:bg-cta-hover text-white font-corpo text-sm font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/loja"
              className="inline-block border-2 border-cafe text-cafe hover:bg-cafe hover:text-white font-corpo font-semibold py-3 px-8 rounded transition-all duration-300"
            >
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SOBRE / HISTÓRIA ========== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="h-80 md:h-96 bg-serra rounded-lg flex items-center justify-center">
              {/* Substituir por imagem da fazenda */}
              <span className="text-8xl">🌿</span>
            </div>

            {/* Texto */}
            <div>
              <h2 className="font-titulo text-3xl md:text-4xl font-bold text-cafe mb-6">
                Nossa História
              </h2>
              <p className="font-corpo text-texto-light mb-4 leading-relaxed">
                O espaço é aconchegante e surpreendente, lembra até um pedacinho da Itália. A cafeteria é participante efetiva do Festival Café & Cultura, que reúne moradores e turistas.
              </p>
              <p className="font-corpo text-texto-light mb-6 leading-relaxed">
                O leite, o queijo, a coalhada e o café são produtos próprios, vêm da Fazenda Sete Quedas que fica na Serra da Mantiqueira. A altitude, clima e solo favorecem a qualidade do grão.
              </p>
              <Link 
                to="/historia"
                className="inline-flex items-center font-corpo font-semibold text-cta hover:text-cta-hover transition-colors"
              >
                Conheça mais sobre nós
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="bg-cafe py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-titulo text-3xl md:text-4xl font-bold text-white mb-4">
            Experimente o melhor café de Poços de Caldas
          </h2>
          <p className="font-corpo text-white/80 mb-8 text-lg">
            Entregamos em todo o Brasil. Peça agora e receba em casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/loja"
              className="bg-cta hover:bg-white hover:text-cafe text-white font-corpo font-semibold py-4 px-10 rounded transition-all duration-300"
            >
              Comprar Online
            </Link>
            <a 
              href="https://maps.google.com/?q=Café+Sete+Quedas+Poços+de+Caldas" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-cafe font-corpo font-semibold py-4 px-10 rounded transition-all duration-300"
            >
              Visitar Cafeteria
            </a>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-cafe-dark py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Coluna 1 - Sobre */}
            <div>
              <h3 className="font-titulo text-xl font-bold text-white mb-4">
                Café Sete Quedas
              </h3>
              <p className="font-corpo text-white/70 text-sm leading-relaxed">
                Café e Leiteria tradicional de Poços de Caldas. Produtos feitos com amor e qualidade reconhecida desde 1993.
              </p>
            </div>

            {/* Coluna 2 - Atendimento */}
            <div>
              <h3 className="font-titulo text-xl font-bold text-white mb-4">
                Atendimento
              </h3>
              <ul className="font-corpo text-white/70 text-sm space-y-2">
                <li>Segunda a Sábado</li>
                <li>9:00 às 19:00</li>
                <li className="pt-2">(35) 3722-6350</li>
                <li>(35) 9 9880-8064 (WhatsApp)</li>
              </ul>
            </div>

            {/* Coluna 3 - Redes */}
            <div>
              <h3 className="font-titulo text-xl font-bold text-white mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/cafesetequedas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-cta rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/cafesetequedas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-cta rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="font-corpo text-white/50 text-sm">
              © 2024 Café e Leiteria Sete Quedas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
