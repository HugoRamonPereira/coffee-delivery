export function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    currency: 'BRL'
  });
}
