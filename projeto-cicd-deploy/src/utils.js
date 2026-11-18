export function calcularTotal(preco, quantidade) {
  if (preco < 0 || quantidade < 0) return 0;
  return Number((preco * quantidade).toFixed(2));
}