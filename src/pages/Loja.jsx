import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

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
    badgeColor: 'bg-cta',
    inStock: true,
    description: 'Kit com 2 pacotes de café especial moído',
  },
  {
    id: 2,
    name: 'Café Especial em Grãos - 250g',
    category: 'Cafés Especiais',
    price: 30.00,
    originalPrice: 35.00,
    image: null,
    badge: 'Promoção',
    badgeColor: 'bg-red-500',
    inStock: true,
    description: 'Grãos selecionados para moagem na hora',
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
  },
  {
    id: 4,
    name: 'Café Torrado e Moído - 250g',
    category: 'Café Gourmet',
    price: 17.50,
    originalPrice: null,
    image: null,
    badge: 'Novo',
    badgeColor: 'bg-serra',
    inStock: true,
    description: 'Torra média, sabor equilibrado',
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
  },
  {
    id: 6,
    name: 'Kit Café da Manhã',
    category: 'Kits',
    price: 45.00,
    originalPrice: 52.00,
    image: null,
    badge: 'Economia',
    badgeColor: 'bg-cta',
    inStock: true,
    description: 'Café + Leite + Pão de Queijo',
  },
]

const CATEGORIES = ['Todos', 'Café Gourmet', 'Cafés Especiais', 'Laticínios', 'Kits']

// Componente de Card de Produto
function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Imagem do Produto */}
      <div className="relative aspect-square bg-gradient-to-br from-creme to-gray-100 overflow-hidden">
        {/* Placeholder da imagem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {product.category.includes('Café') ? '☕' : product.category === 'Laticínios' ? '🥛' : '🎁'}
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {product.badge}
          </span>
        )}

        {/* Esgotado overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg">
              ESGOTADO
            </span>
          </div>
        )}

        {/* Quick actions on hover */}
        {product.inStock && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full bg-cta hover:bg-cta-hover text-white font-corpo font-semibold py-2 rounded-lg transition-colors">
              Adicionar ao Carrinho
            </button>
          </div>
        )}
      </div>

      {/* Info do Produto */}
      <div className="p-4">
        <p className="font-corpo text-xs text-texto-light uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-titulo text-lg font-bold text-cafe mb-1 line-clamp-2">
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
          <span className="font-titulo text-xl font-bold text-cafe">
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
    <div className="bg-serra/10 border border-serra/20 rounded-xl p-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🚚</span>
        <div className="flex-1">
          {remaining > 0 ? (
            <p className="font-corpo text-sm text-texto">
              Faltam <strong className="text-serra">R$ {remaining.toFixed(2).replace('.', ',')}</strong> para frete grátis!
            </p>
          ) : (
            <p className="font-corpo text-sm text-serra font-bold">
              Parabéns! Você ganhou frete grátis!
            </p>
          )}
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
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
    return 0 // relevância mantém ordem original
  })

  return (
    <>
      {/* Hero da Loja */}
      <section className="bg-gradient-to-r from-cafe to-cafe-dark py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="font-titulo text-3xl md:text-5xl font-bold mb-4">
              Nossa Loja
            </h1>
            <p className="font-corpo text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Produtos frescos direto da Fazenda Sete Quedas para sua casa.
              Café vulcânico de altitude e laticínios de qualidade.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>🚚</span>
                <span className="font-corpo text-sm">Frete Grátis +R$100</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>🏡</span>
                <span className="font-corpo text-sm">Direto da Fazenda</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>⭐</span>
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
                    font-corpo text-sm px-4 py-2 rounded-full transition-all
                    ${selectedCategory === category
                      ? 'bg-cafe text-white'
                      : 'bg-white text-texto hover:bg-cafe/10'}
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
                className="font-corpo text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta"
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
              <span className="text-6xl mb-4 block">🔍</span>
              <p className="font-titulo text-xl text-cafe mb-2">Nenhum produto encontrado</p>
              <p className="font-corpo text-texto-light">Tente outra categoria</p>
            </div>
          )}

        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="reveal delay-100 text-center">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🌋</span>
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1">Café Vulcânico</h4>
              <p className="font-corpo text-sm text-texto-light">Solo único de Poços de Caldas</p>
            </div>
            <div className="reveal delay-200 text-center">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📦</span>
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1">Envio Rápido</h4>
              <p className="font-corpo text-sm text-texto-light">Despachamos em até 24h</p>
            </div>
            <div className="reveal delay-300 text-center">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🔒</span>
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1">Compra Segura</h4>
              <p className="font-corpo text-sm text-texto-light">Pagamento 100% protegido</p>
            </div>
            <div className="reveal delay-400 text-center">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">💬</span>
              </div>
              <h4 className="font-titulo font-bold text-cafe mb-1">Atendimento</h4>
              <p className="font-corpo text-sm text-texto-light">Suporte via WhatsApp</p>
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
              className="flex-1 font-corpo px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
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
            <div className="reveal delay-100 bg-creme rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cta">★</span>
                ))}
              </div>
              <p className="font-corpo text-texto-light mb-4 italic">
                "Melhor café que já provei! O sabor é incomparável, você sente a diferença do café vulcânico. Virei cliente fiel."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cafe rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="font-corpo font-bold text-cafe">Maria Silva</p>
                  <p className="font-corpo text-xs text-texto-light">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="reveal delay-200 bg-creme rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cta">★</span>
                ))}
              </div>
              <p className="font-corpo text-texto-light mb-4 italic">
                "Entrega super rápida e o produto chegou muito bem embalado. O leite é fresquinho, dá pra sentir a qualidade!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cafe rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <p className="font-corpo font-bold text-cafe">João Santos</p>
                  <p className="font-corpo text-xs text-texto-light">Poços de Caldas, MG</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="reveal delay-300 bg-creme rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cta">★</span>
                ))}
              </div>
              <p className="font-corpo text-texto-light mb-4 italic">
                "Compro há 3 anos e nunca me decepcionei. O kit café da manhã é perfeito para presentear. Recomendo demais!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cafe rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="font-corpo font-bold text-cafe">Ana Oliveira</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
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
