const CURRENCY_FORMATTER = new Intl.NumberFormat('sp', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 2,
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
