// src/hooks/useProducts.ts
import { useState, useEffect } from "react";
import type { Product } from "../types/product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );
        const data = await response.json();
        setProducts(data.products); 
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};
