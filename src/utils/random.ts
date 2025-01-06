export function generateUniqueRandomNumbers(
  quantity: number,
  min: number,
  max: number
): number[] {
  const numbers = new Set<number>();
  const range = max - min + 1;
  
  if (quantity > range) {
    throw new Error("Quantidade solicitada maior que o intervalo disponível");
  }
  
  while (numbers.size < quantity) {
    numbers.add(Math.floor(Math.random() * range) + min);
  }
  
  return Array.from(numbers);
}