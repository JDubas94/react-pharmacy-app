export function calculateDiscount(oldPrice, price) {
  if (!oldPrice || !price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}