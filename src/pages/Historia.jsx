import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Historia() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* TODO: Adicionar imagem de fundo */}
        <div className="absolute inset-0 bg-cafe"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-titulo text-4xl md:text-6xl font-bold text-white mb-4">
            Nossa História
          </h1>
          <p className="font-corpo text-white/80 text-lg md:text-xl">
            Tradição de 5 gerações desde 1819
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">

          {/* Timeline Mobile - Vertical */}
          <div className="md:hidden timeline-vertical">
            <div className="timeline-item reveal delay-100">
              <div className="timeline-dot">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <p className="font-titulo text-xl font-bold text-cafe">1819</p>
              <p className="font-corpo text-texto-light text-sm">Terras na família há mais de 200 anos</p>
            </div>

            <div className="timeline-item reveal delay-200">
              <div className="timeline-dot">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <p className="font-titulo text-xl font-bold text-cafe">1977</p>
              <p className="font-corpo text-texto-light text-sm">Fazenda Sete Quedas é desmembrada</p>
            </div>

            <div className="timeline-item reveal delay-300">
              <div className="timeline-dot">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <p className="font-titulo text-xl font-bold text-cafe">1993</p>
              <p className="font-corpo text-texto-light text-sm">Cafeteria fundada no centro de Poços</p>
            </div>

            <div className="timeline-item reveal delay-400">
              <div className="timeline-dot">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <p className="font-titulo text-xl font-bold text-cafe">Hoje</p>
              <p className="font-corpo text-texto-light text-sm">5ª geração produzindo café e leite</p>
            </div>
          </div>

          {/* Timeline Desktop - Horizontal */}
          <div className="hidden md:block relative">
            {/* Linha horizontal */}
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200">
              <div className="h-full bg-cta origin-left animate-grow-line"></div>
            </div>

            <div className="grid grid-cols-4 gap-8 text-center relative">
              {/* Marco 1 */}
              <div className="reveal delay-100">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1819</p>
                <p className="font-corpo text-texto-light text-sm">Terras na família</p>
              </div>

              {/* Marco 2 */}
              <div className="reveal delay-200">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1977</p>
                <p className="font-corpo text-texto-light text-sm">Fazenda desmembrada</p>
              </div>

              {/* Marco 3 */}
              <div className="reveal delay-300">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1993</p>
                <p className="font-corpo text-texto-light text-sm">Cafeteria fundada</p>
              </div>

              {/* Marco 4 */}
              <div className="reveal delay-400">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">4</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">Hoje</p>
                <p className="font-corpo text-texto-light text-sm">5ª geração</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* A Fazenda */}
      <section className="bg-creme py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* Bloco 1: Imagem | Texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal-left h-64 md:h-80 bg-serra rounded-lg flex items-center justify-center hover-lift">
              <span className="text-6xl">🌿</span>
            </div>
            <div className="reveal-right">
              <h2 className="font-titulo text-3xl font-bold text-cafe mb-4">
                A Fazenda Sete Quedas
              </h2>
              <p className="font-corpo text-texto-light leading-relaxed">
                Desmembrada da Fazenda Espírito Santo em 1977, em terras que
                estão na família desde 1819. Há cinco gerações dedicadas à
                produção de café e leite.
              </p>
            </div>
          </div>

          {/* Bloco 2: Texto | Imagem (ordem invertida) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal-left order-2 md:order-1">
              <h3 className="font-titulo text-2xl font-bold text-cafe mb-4">
                Nosso Café
              </h3>
              <p className="font-corpo text-texto-light leading-relaxed">
                Colhido entre maio e setembro, lavado no mesmo dia e separado
                conforme o estágio de maturação. Após secar, descansa em tulhas
                para garantir a melhor qualidade.
              </p>
            </div>
            <div className="reveal-right h-64 md:h-80 bg-cafe-light rounded-lg flex items-center justify-center hover-lift order-1 md:order-2">
              <span className="text-6xl">☕</span>
            </div>
          </div>

          {/* Bloco 3: Imagem | Texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left h-64 md:h-80 bg-white rounded-lg flex items-center justify-center hover-lift">
              <span className="text-6xl">🥛</span>
            </div>
            <div className="reveal-right">
              <h3 className="font-titulo text-2xl font-bold text-cafe mb-4">
                Nosso Leite
              </h3>
              <p className="font-corpo text-texto-light leading-relaxed">
                Oriundo de vacas exclusivas da nossa fazenda, com rebanho fechado
                há quase 20 anos. Ordenha mecânica 3 vezes ao dia, resfriado a 4°C
                e pasteurizado sem contato manual.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* A Cafeteria */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal text-center mb-12">
            <h2 className="font-titulo text-3xl md:text-4xl font-bold text-cafe mb-4">
              O Café e Leiteria
            </h2>
            <p className="font-corpo text-texto-light max-w-2xl mx-auto">
              Tradicional cafeteria fundada em 1993 no centro de Poços de Caldas.
              Há mais de 28 anos atendendo moradores e turistas com produtos
              direto da nossa fazenda.
            </p>
          </div>

          {/* Grid de fotos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="reveal delay-100 h-64 bg-gray-200 rounded-lg overflow-hidden hover-lift hover-zoom">
              {/* TODO: Imagem entrada1 */}
              <div className="w-full h-full bg-cafe-light flex items-center justify-center">
                <span className="text-4xl">📸</span>
              </div>
            </div>
            <div className="reveal delay-200 h-64 bg-gray-200 rounded-lg overflow-hidden hover-lift hover-zoom">
              {/* TODO: Imagem entrada2 */}
              <div className="w-full h-full bg-cafe-light flex items-center justify-center">
                <span className="text-4xl">📸</span>
              </div>
            </div>
            <div className="reveal delay-300 h-64 bg-gray-200 rounded-lg overflow-hidden hover-lift hover-zoom">
              {/* TODO: Imagem inside_view */}
              <div className="w-full h-full bg-cafe-light flex items-center justify-center">
                <span className="text-4xl">📸</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-cafe py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="reveal font-titulo text-3xl md:text-4xl font-bold text-white mb-4">
            Venha nos Visitar
          </h2>
          <p className="reveal delay-100 font-corpo text-white/80 mb-8 max-w-xl mx-auto">
            Experimente o sabor autêntico do café vulcânico de Poços de Caldas,
            direto da fazenda para sua xícara.
          </p>
          <div className="reveal delay-200 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com/?q=Café+Sete+Quedas+Poços+de+Caldas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-cafe font-corpo font-semibold px-8 py-3 rounded-lg hover:bg-creme transition-colors"
            >
              Ver no Mapa
            </a>
            <Link
              to="/loja"
              className="inline-block bg-cta text-white font-corpo font-semibold px-8 py-3 rounded-lg hover:bg-cta-hover transition-colors"
            >
              Comprar Online
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe-dark py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            {/* Contato */}
            <div>
              <h4 className="font-titulo text-lg font-bold text-white mb-4">Contato</h4>
              <p className="font-corpo text-sm mb-2">Rua Junqueiras, 606 - Centro</p>
              <p className="font-corpo text-sm mb-2">Poços de Caldas - MG</p>
              <p className="font-corpo text-sm">(35) 3721-1234</p>
            </div>

            {/* Horário */}
            <div>
              <h4 className="font-titulo text-lg font-bold text-white mb-4">Horário</h4>
              <p className="font-corpo text-sm mb-2">Segunda a Sexta: 7h - 19h</p>
              <p className="font-corpo text-sm mb-2">Sábado: 7h - 18h</p>
              <p className="font-corpo text-sm">Domingo: 8h - 12h</p>
            </div>

            {/* Redes */}
            <div>
              <h4 className="font-titulo text-lg font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-cta transition-colors">Instagram</a>
                <a href="#" className="text-white/80 hover:text-cta transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="font-corpo text-sm text-white/60">
              © 2024 Café Sete Quedas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
