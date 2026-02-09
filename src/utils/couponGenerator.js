// Gera um código de cupom único baseado na pontuação
export function generateCoupon(score) {
  const discount = getDiscount(score)
  if (discount === 0) return null

  // Gera código alfanumérico de 6 caracteres
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return {
    code: `CAFE-${code}`,
    discount,
    score,
    createdAt: new Date().toISOString()
  }
}

// Retorna desconto baseado na pontuação
export function getDiscount(score) {
  if (score >= 300) return 15
  if (score >= 200) return 10
  if (score >= 100) return 5
  return 0
}

// Retorna mensagem baseada na pontuação
export function getMessage(score) {
  if (score >= 300) return 'Mestre da Colheita!'
  if (score >= 200) return 'Ótima colheita!'
  if (score >= 100) return 'Bom começo, colhedor!'
  return 'Tente novamente!'
}
