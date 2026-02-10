import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  CoffeeIcon,
  MilkIcon,
  GiftIcon,
  TruckIcon,
  VolcanoIcon,
  PackageIcon,
  ShieldIcon,
  MessageIcon,
  StarIcon,
  LeafIcon
} from '../components/Icons'

// Dados dos produtos (placeholder - futuramente virá do Supabase)
const PRODUCTS = [
  {
    id: 1,
    name: 'Café Especial - Kit com 2',
    category: 'Café Gourmet',
    price: 25.00,
    originalPrice: null,
    image: null,
    badge: 'Mais Vendido',
    badgeStyle: 'bg-cafe text-white',
    inStock: true,
    description: 'Kit com 2 pacotes de café especial moído',
    icon: 'coffee',
  },
  {
    id: 2,
    name: 'Café Especial em Grãos - 250g',
    category: 'Cafés Especiais',
    price: 30.00,
    originalPrice: 35.00,
    image: null,
    badge: 'Promoção',
    badgeStyle: 'bg-cta text-white',
    inStock: true,
    description: 'Grãos selecionados para moagem na hora',
    icon: 'coffee',
  },
  {
    id: 3,
    name: 'Café Especial - 10 Cápsulas',
    category: 'Cafés Especiais',
    price: 20.00,
    originalPrice: null,
    image: null,
    badge: null,
    inStock: false,
    description: 'Cápsulas compatíveis com Nespresso',
    icon: 'coffee',
  },
  {
    id: 4,
    name: 'Café Torrado e Moído - 250g',
    category: 'Café Gourmet',
    price: 17.50,
    originalPrice: null,
    image: null,
    badge: 'Novo',
    badgeStyle: 'bg-serra text-white',
    inStock: true,
    description: 'Torra média, sabor equilibrado',
    icon: 'coffee',
  },
  {
    id: 5,
    name: 'Leite Integral - 1L',
    category: 'Laticínios',
    price: 8.00,
    originalPrice: null,
    image: null,
    badge: null,
    inStock: true,
    description: 'Leite fresco da fazenda',
    icon: 'milk',
  },
  {
    id: 6,
    name: 'Kit Café da Manhã',
    category: 'Kits',
    price: 45.00,
    originalPrice: 52.00,
    image: null,
    badge: 'Economia',
    badgeStyle: 'bg-cta text-white',
    inStock: true,
    description: 'Café + Leite + Pão de Queijo',
    icon: 'gift',
  },
]

const CATEGORIES = ['Todos', 'Café Gourmet', 'Cafés Especiais', 'Laticínios', 'Kits']

// Mapeamento de ícones
const iconMap = {
  coffee: CoffeeIcon,
  milk: MilkIcon,
  gift: GiftIcon,
}

// Componente de Card de Produto
function ProductCard({ product }) {
  const IconComponent = iconMap[product.icon] || CoffeeIcon

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Imagem do Produto */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Placeholder da imagem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <IconComponent className="w-16 h-16 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 ${product.badgeStyle} text-xs font-medium px-3 py-1 rounded-full`}>
            {product.badge}
          </span>
        )}

        {/* Esgotado overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <span className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Esgotado
            </span>
          </div>
        )}

        {/* Quick action on hover */}
        {product.inStock && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full bg-white hover:bg-creme text-cafe font-corpo font-medium py-2.5 rounded-lg transition-colors">
              Adicionar ao Carrinho
            </button>
          </div>
        )}
      </div>

      {/* Info do Produto */}
      <div className="p-5">
        <p className="font-corpo text-xs text-texto-light uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-titulo text-base font-bold text-cafe mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="font-corpo text-sm text-texto-light mb-3 line-clamp-1">
          {product.description}
        </p>

        {/* Preço */}
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="font-corpo text-sm text-texto-light line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
          <span className="font-titulo text-lg font-bold text-cafe">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
    </div>
  )
}

// Componente de Barra de Frete Grátis
function FreeShippingBar({ currentValue = 0, threshold = 100 }) {
  const percentage = Math.min((currentValue / threshold) * 100, 100)
  const remaining = threshold - currentValue

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-serra/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <TruckIcon className="w-5 h-5 text-serra" />
        </div>
        <div className="flex-1">
          {remaining > 0 ? (
            <p className="font-corpo text-sm text-texto">
              Faltam <strong className="text-serra">R$ {remaining.toFixed(2).replace('.', ',')}</strong> para frete grátis
            </p>
          ) : (
            <p className="font-corpo text-sm text-serra font-medium">
              Parabéns! Você ganhou frete grátis
            </p>
          )}
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-serra rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default function Loja() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState('relevancia')
  useScrollReveal()

  const filteredProducts = selectedCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'menor-preco') return a.price - b.price
    if (sortBy === 'maior-preco') return b.price - a.price
    if (sortBy === 'nome') return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <>
      {/* Hero da Loja */}
      <section className="bg-cafe py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white">
            <p className="font-corpo text-white/60 text-sm mb-3 tracking-widest uppercase">
              Direto da Fazenda
            </p>
            <h1 className="font-titulo text-3xl md:text-5xl font-bold mb-4">
              Nossa Loja
            </h1>
            <p className="font-corpo text-white/70 text-base max-w-xl mx-auto mb-8">
              Produtos frescos da Fazenda Sete Quedas. Café vulcânico de altitude e laticínios de qualidade.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <TruckIcon className="w-5 h-5" />
                <span className="font-corpo text-sm">Frete Grátis +R$100</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <LeafIcon className="w-5 h-5" />
                <span className="font-corpo text-sm">Direto da Fazenda</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <StarIcon className="w-5 h-5" filled />
                <span className="font-corpo text-sm">+500 Avaliações</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="bg-creme py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">

          {/* Barra de Frete Grátis */}
          <div className="reveal mb-8">
            <FreeShippingBar currentValue={0} threshold={100} />
          </div>

          {/* Filtros e Ordenação */}
          <div className="reveal flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Categorias */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    font-corpo text-sm px-4 py-2 rounded-lg transition-all
                    ${selectedCategory === category
                      ? 'bg-cafe text-white'
                      : 'bg-white text-texto hover:bg-cafe/5 border border-gray-200'}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Ordenação */}
            <div className="flex items-center gap-2">
              <span className="font-corpo text-sm text-texto-light">Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-corpo text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta/50"
              >
                <option value="relevancia">Relevância</option>
                <option value="menor-preco">Menor Preço</option>
                <option value="maior-preco">Maior Preço</option>
                <option value="nome">Nome A-Z</option>
              </select>
            </div>
          </div>

          {/* Contagem de resultados */}
          <p className="reveal font-corpo text-sm text-texto-light mb-6">
            Exibindo {sortedProducts.length} produto{sortedProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {sortedProducts.map((product, index) => (
              <div key={product.id} className={`reveal delay-${(index % 4 + 1) * 100}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CoffeeIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="font-titulo text-xl text-cafe mb-2">Nenhum produto encontrado</p>
              <p className="font-corpo text-texto-light">Tente outra categoria</p>
            </div>
          )}

        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="reveal delay-100 text-center">
              <div className="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <VolcanoIcon className="w-7 h-7 text-cta" />
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1 text-sm">Café Vulcânico</h4>
              <p className="font-corpo text-xs text-texto-light">Solo único de Poços de Caldas</p>
            </div>
            <div className="reveal delay-200 text-center">
              <div className="w-14 h-14 bg-serra/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <PackageIcon className="w-7 h-7 text-serra" />
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1 text-sm">Envio Rápido</h4>
              <p className="font-corpo text-xs text-texto-light">Despachamos em até 24h</p>
            </div>
            <div className="reveal delay-300 text-center">
              <div className="w-14 h-14 bg-cafe/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ShieldIcon className="w-7 h-7 text-cafe" />
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1 text-sm">Compra Segura</h4>
              <p className="font-corpo text-xs text-texto-light">Pagamento 100% protegido</p>
            </div>
            <div className="reveal delay-400 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageIcon className="w-7 h-7 text-blue-500" />
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1 text-sm">Atendimento</h4>
              <p className="font-corpo text-xs text-texto-light">Suporte via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-cta py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="reveal font-titulo text-2xl md:text-3xl font-bold text-white mb-3">
            Receba Ofertas Exclusivas
          </h2>
          <p className="reveal delay-100 font-corpo text-white/80 mb-6">
            Cadastre-se e ganhe 10% de desconto na primeira compra
          </p>
          <form className="reveal delay-200 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 font-corpo px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-cafe hover:bg-cafe-dark text-white font-corpo font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Quero Desconto
            </button>
          </form>
        </div>
      </section>

      {/* Avaliações / Social Proof */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="reveal font-titulo text-2xl md:text-3xl font-bold text-cafe text-center mb-8">
            O Que Nossos Clientes Dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Depoimento 1 */}
            <div className="reveal delay-100 bg-creme rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-cta" filled />
                ))}
              </div>
              <p className="font-corpo text-texto-light mb-4 text-sm leading-relaxed">
                "Melhor café que já provei! O sabor é incomparável, você sente a diferença do café vulcânico. Virei cliente fiel."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cafe rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium text-sm">M</span>
                </div>
                <div>
                  <p className="font-corpo font-medium text-cafe text-sm">Maria Silva</p>
                  <p className="font-corpo text-xs text-texto-light">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="reveal delay-200 bg-creme rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-cta" filled />
                ))}
              </div>
              <p className="font-corpo text-texto-light mb-4 text-sm leading-relaxed">
                "Entrega super rápida e o produto chegou muito bem embalado. O leite é fresquinho, dá pra sentir a qualidade!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cafe rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium text-sm">J</span>
                </div>
                <div>
                  <p className="font-corpo font-medium text-cafe text-sm">João Santos</p>
                  <p className="font-corpo text-xs text-texto-light">Poços de Caldas, MG</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="reveal delay-300 bg-creme rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-cta" filled />
                ))}
              </div>
              <p className="font-corpo text-texto-light mb-4 text-sm leading-relaxed">
                "Compro há 3 anos e nunca me decepcionei. O kit café da manhã é perfeito para presentear. Recomendo demais!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cafe rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium text-sm">A</span>
                </div>
                <div>
                  <p className="font-corpo font-medium text-cafe text-sm">Ana Oliveira</p>
                  <p className="font-corpo text-xs text-texto-light">Campinas, SP</p>
                </div>
              </div>
            </div>
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

          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-corpo text-sm text-white/40">
                © 2024 Café Sete Quedas. Todos os direitos reservados.
              </p>
              <a
                href="https://jampani.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-corpo text-sm text-white/40 hover:text-cta transition-colors"
              >
                <span>Desenvolvido por</span>
                <span className="font-semibold text-white/60 group-hover:text-cta transition-colors">jampani.me</span>
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
