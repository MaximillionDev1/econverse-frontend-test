
import type { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
  const data = await res.json();
  
  return data.products.map((product: Product, index: number) => ({
    ...product,
    id: index + 1,
    category: 'CELULAR' 
  }));
}