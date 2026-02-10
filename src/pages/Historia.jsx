import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Historia() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cafe"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-titulo text-4xl md:text-6xl font-bold text-white mb-4">
            Nossa História
          </h1>
          <p className="font-corpo text-white/80 text-lg md:text-xl">
            Cinco gerações de tradição desde 1819
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
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200">
              <div className="h-full bg-cta origin-left animate-grow-line"></div>
            </div>

            <div className="grid grid-cols-4 gap-8 text-center relative">
              <div className="reveal delay-100">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1819</p>
                <p className="font-corpo text-texto-light text-sm">Terras na família</p>
              </div>

              <div className="reveal delay-200">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1977</p>
                <p className="font-corpo text-texto-light text-sm">Fazenda desmembrada</p>
              </div>

              <div className="reveal delay-300">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1993</p>
                <p className="font-corpo text-texto-light text-sm">Cafeteria fundada</p>
              </div>

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

          {/* Introdução */}
          <div className="reveal text-center mb-16">
            <span className="text-5xl mb-4 block">🏡</span>
            <h2 className="font-titulo text-3xl md:text-4xl font-bold text-cafe mb-4">
              A Fazenda Sete Quedas
            </h2>
            <p className="font-corpo text-texto-light max-w-2xl mx-auto leading-relaxed">
              Desmembrada da Fazenda Espírito Santo em 1977, em terras que estão na família
              desde 1819. Há cinco gerações dedicadas à produção de café e leite de qualidade.
            </p>
          </div>

          {/* Nosso Café */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="reveal-left h-72 md:h-96 bg-gradient-to-br from-cafe to-cafe-dark rounded-2xl flex items-center justify-center hover-lift">
              <span className="text-8xl">☕</span>
            </div>
            <div className="reveal-right">
              <h3 className="font-titulo text-2xl md:text-3xl font-bold text-cafe mb-4">
                Nosso Café
              </h3>
              <p className="font-corpo text-texto-light leading-relaxed mb-6">
                Colhido no período entre maio e setembro, nosso café é lavado no mesmo dia
                da colheita e separado no terreiro conforme o estágio de maturação:
                <strong className="text-cafe"> verde</strong>,
                <strong className="text-cafe"> cereja</strong> (maduro) e
                <strong className="text-cafe"> bóia</strong> (café mais seco).
              </p>
              <p className="font-corpo text-texto-light leading-relaxed mb-6">
                Depois de seco no terreiro ou nos secadores, ele descansa por um período
                em tulhas para depois ser beneficiado, garantindo um produto da melhor qualidade.
              </p>

              {/* Diferenciais do Café */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center hover-lift">
                  <span className="text-2xl mb-2 block">🌋</span>
                  <p className="font-corpo text-sm text-texto-light">Café Vulcânico</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center hover-lift">
                  <span className="text-2xl mb-2 block">⛰️</span>
                  <p className="font-corpo text-sm text-texto-light">Altitude Especial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nosso Leite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left order-2 md:order-1">
              <h3 className="font-titulo text-2xl md:text-3xl font-bold text-cafe mb-4">
                Nosso Leite
              </h3>
              <p className="font-corpo text-texto-light leading-relaxed mb-6">
                O Leite Sete Quedas é oriundo exclusivamente de vacas da nossa fazenda.
                Para garantir a qualidade e sanidade, mantemos um
                <strong className="text-cafe"> rebanho fechado há quase 20 anos</strong> —
                não entram animais de fora.
              </p>
              <p className="font-corpo text-texto-light leading-relaxed mb-6">
                As vacas são ordenhadas mecanicamente 3 vezes ao dia e alimentadas com
                dieta formulada pelos melhores nutricionistas. O leite é transferido por
                tubulações de aço inox até tanques, resfriado rapidamente a 4°C,
                pasteurizado e ensacado sem contato direto com funcionários.
              </p>

              {/* Diferenciais do Leite */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 text-center hover-lift">
                  <span className="text-xl mb-1 block">🐄</span>
                  <p className="font-corpo text-xs text-texto-light">Rebanho Próprio</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center hover-lift">
                  <span className="text-xl mb-1 block">🧊</span>
                  <p className="font-corpo text-xs text-texto-light">Resfriado a 4°C</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center hover-lift">
                  <span className="text-xl mb-1 block">✨</span>
                  <p className="font-corpo text-xs text-texto-light">Sem Contato Manual</p>
                </div>
              </div>
            </div>
            <div className="reveal-right h-72 md:h-96 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center hover-lift order-1 md:order-2 border border-gray-200">
              <span className="text-8xl">🥛</span>
            </div>
          </div>

        </div>
      </section>

      {/* A Cafeteria */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal text-center mb-12">
            <span className="text-5xl mb-4 block">🏛️</span>
            <h2 className="font-titulo text-3xl md:text-4xl font-bold text-cafe mb-4">
              O Café e Leiteria
            </h2>
            <p className="font-corpo text-texto-light max-w-3xl mx-auto leading-relaxed">
              Tradicional cafeteria e leiteria fundada em 1993 no centro de Poços de Caldas.
              Servimos desde o clássico café coado até drinques quentes e gelados.
            </p>
          </div>

          {/* Destaques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="reveal delay-100 bg-creme rounded-2xl p-6 text-center hover-lift">
              <span className="text-4xl mb-4 block">📍</span>
              <h4 className="font-titulo text-lg font-bold text-cafe mb-2">Centro de Poços</h4>
              <p className="font-corpo text-texto-light text-sm">
                Localização privilegiada no coração da cidade
              </p>
            </div>
            <div className="reveal delay-200 bg-creme rounded-2xl p-6 text-center hover-lift">
              <span className="text-4xl mb-4 block">⏰</span>
              <h4 className="font-titulo text-lg font-bold text-cafe mb-2">+28 Anos</h4>
              <p className="font-corpo text-texto-light text-sm">
                Atendendo moradores e turistas desde 1993
              </p>
            </div>
            <div className="reveal delay-300 bg-creme rounded-2xl p-6 text-center hover-lift">
              <span className="text-4xl mb-4 block">🏆</span>
              <h4 className="font-titulo text-lg font-bold text-cafe mb-2">Produção Própria</h4>
              <p className="font-corpo text-texto-light text-sm">
                Café vulcânico e leite direto da nossa fazenda
              </p>
            </div>
          </div>

          {/* Texto adicional */}
          <div className="reveal bg-gradient-to-r from-cafe to-cafe-dark rounded-2xl p-8 text-center">
            <p className="font-corpo text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              A produção própria de café vulcânico e de altitude, além do tratamento
              minucioso da produção leiteira, garantem
              <strong className="text-cta"> excelência na qualidade</strong> dos
              produtos oferecidos. Somos uma das cafeterias mais tradicionais de
              Poços de Caldas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-cta py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="reveal font-titulo text-3xl md:text-4xl font-bold text-white mb-4">
            Venha nos Visitar
          </h2>
          <p className="reveal delay-100 font-corpo text-white/90 mb-8 max-w-xl mx-auto">
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
              className="inline-block bg-cafe text-white font-corpo font-semibold px-8 py-3 rounded-lg hover:bg-cafe-dark transition-colors"
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
