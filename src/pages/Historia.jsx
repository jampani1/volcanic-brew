import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  CoffeeIcon,
  MilkIcon,
  LeafIcon,
  VolcanoIcon,
  MountainIcon,
  CowIcon,
  ThermometerIcon,
  SparklesIcon,
  BuildingIcon,
  MapPinIcon,
  ClockIcon,
  TrophyIcon
} from '../components/Icons'

export default function Historia() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cafe"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4">
          <p className="font-corpo text-white/60 text-sm mb-3 tracking-widest uppercase">
            Tradição desde 1819
          </p>
          <h1 className="font-titulo text-4xl md:text-6xl font-bold text-white mb-4">
            Nossa História
          </h1>
          <p className="font-corpo text-white/70 text-lg">
            Cinco gerações dedicadas à excelência
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 border-b border-gray-100">
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
                <div className="w-12 h-12 bg-cta rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1819</p>
                <p className="font-corpo text-texto-light text-sm">Terras na família</p>
              </div>

              <div className="reveal delay-200">
                <div className="w-12 h-12 bg-cta rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1977</p>
                <p className="font-corpo text-texto-light text-sm">Fazenda desmembrada</p>
              </div>

              <div className="reveal delay-300">
                <div className="w-12 h-12 bg-cta rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="font-titulo text-xl font-bold text-cafe">1993</p>
                <p className="font-corpo text-texto-light text-sm">Cafeteria fundada</p>
              </div>

              <div className="reveal delay-400">
                <div className="w-12 h-12 bg-cta rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
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
            <div className="w-16 h-16 bg-serra/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LeafIcon className="w-8 h-8 text-serra" />
            </div>
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
            <div className="reveal-left h-72 md:h-96 bg-gradient-to-br from-cafe/10 to-cafe/20 rounded-xl flex items-center justify-center">
              <CoffeeIcon className="w-24 h-24 text-cafe/40" />
            </div>
            <div className="reveal-right">
              <p className="font-corpo text-cta text-sm font-medium mb-2 tracking-wider uppercase">
                Produção Artesanal
              </p>
              <h3 className="font-titulo text-2xl md:text-3xl font-bold text-cafe mb-4">
                Nosso Café
              </h3>
              <p className="font-corpo text-texto-light leading-relaxed mb-4">
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
                <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-cta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <VolcanoIcon className="w-5 h-5 text-cta" />
                  </div>
                  <p className="font-corpo text-sm text-texto">Café Vulcânico</p>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-serra/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MountainIcon className="w-5 h-5 text-serra" />
                  </div>
                  <p className="font-corpo text-sm text-texto">Altitude 1.200m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nosso Leite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left order-2 md:order-1">
              <p className="font-corpo text-cta text-sm font-medium mb-2 tracking-wider uppercase">
                Qualidade Garantida
              </p>
              <h3 className="font-titulo text-2xl md:text-3xl font-bold text-cafe mb-4">
                Nosso Leite
              </h3>
              <p className="font-corpo text-texto-light leading-relaxed mb-4">
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
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-serra/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <CowIcon className="w-4 h-4 text-serra" />
                  </div>
                  <p className="font-corpo text-xs text-texto-light">Rebanho Próprio</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <ThermometerIcon className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="font-corpo text-xs text-texto-light">Resfriado 4°C</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-cta/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <SparklesIcon className="w-4 h-4 text-cta" />
                  </div>
                  <p className="font-corpo text-xs text-texto-light">Processo Limpo</p>
                </div>
              </div>
            </div>
            <div className="reveal-right h-72 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center order-1 md:order-2">
              <MilkIcon className="w-24 h-24 text-gray-400" />
            </div>
          </div>

        </div>
      </section>

      {/* A Cafeteria */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal text-center mb-12">
            <div className="w-16 h-16 bg-cafe/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BuildingIcon className="w-8 h-8 text-cafe" />
            </div>
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
            <div className="reveal delay-100 bg-creme rounded-xl p-6">
              <div className="w-12 h-12 bg-serra/10 rounded-xl flex items-center justify-center mb-4">
                <MapPinIcon className="w-6 h-6 text-serra" />
              </div>
              <h4 className="font-titulo text-lg font-bold text-cafe mb-2">Centro de Poços</h4>
              <p className="font-corpo text-texto-light text-sm">
                Localização privilegiada no coração da cidade
              </p>
            </div>
            <div className="reveal delay-200 bg-creme rounded-xl p-6">
              <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-cta" />
              </div>
              <h4 className="font-titulo text-lg font-bold text-cafe mb-2">+28 Anos</h4>
              <p className="font-corpo text-texto-light text-sm">
                Atendendo moradores e turistas desde 1993
              </p>
            </div>
            <div className="reveal delay-300 bg-creme rounded-xl p-6">
              <div className="w-12 h-12 bg-cafe/10 rounded-xl flex items-center justify-center mb-4">
                <TrophyIcon className="w-6 h-6 text-cafe" />
              </div>
              <h4 className="font-titulo text-lg font-bold text-cafe mb-2">Produção Própria</h4>
              <p className="font-corpo text-texto-light text-sm">
                Café vulcânico e leite direto da nossa fazenda
              </p>
            </div>
          </div>

          {/* Texto adicional */}
          <div className="reveal bg-cafe rounded-xl p-8 text-center">
            <p className="font-corpo text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/70">
            <div>
              <h4 className="font-titulo text-lg font-bold text-white mb-4">Contato</h4>
              <p className="font-corpo text-sm mb-2">Rua Junqueiras, 606 - Centro</p>
              <p className="font-corpo text-sm mb-2">Poços de Caldas - MG</p>
              <p className="font-corpo text-sm">(35) 3721-1234</p>
            </div>

            <div>
              <h4 className="font-titulo text-lg font-bold text-white mb-4">Horário</h4>
              <p className="font-corpo text-sm mb-2">Segunda a Sexta: 7h - 19h</p>
              <p className="font-corpo text-sm mb-2">Sábado: 7h - 18h</p>
              <p className="font-corpo text-sm">Domingo: 8h - 12h</p>
            </div>

            <div>
              <h4 className="font-titulo text-lg font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cta rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cta rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="font-corpo text-sm text-white/40">
              © 2024 Café Sete Quedas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
