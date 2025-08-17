import React, { useState, useEffect } from 'react';
import type { Product } from '../../types/product';
import { getProducts } from '../../services/products';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { Modal } from '../Modal/Modal';
import { ProductModal } from '../ProductModal/ProductModal';
import './ProductShowcase.scss';

interface ProductShowcaseProps {
  showAllCategories?: boolean; // Nova prop para controle
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  showAllCategories = false 
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category?.toLowerCase() === activeCategory);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  };

  const calculateInstallment = (price: number, installments: number = 10) => {
    const value = (price / installments).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `ou ${installments}x de R$ ${value} sem juros`;
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) return <div className="loading">Carregando produtos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="product-showcase">
      <h2 className="section-title">
        <span className="title-text">Produtos relacionados</span>
      </h2>
      
      {/* Renderização condicional das categorias */}
      {showAllCategories ? (
        <div className="category-tabs-container">
          <div className="category-tabs">
            {['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'].map((category) => (
              <button
                key={category}
                className={`category-tab ${activeCategory === category.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveCategory(category === 'VER TODOS' ? 'all' : category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="single-category-container">
          <button 
            className="view-all-button"
            onClick={() => setActiveCategory('all')}
          >
            VER TODOS
          </button>
        </div>
      )}

      <ProductCarousel 
        products={filteredProducts}
        onProductClick={openModal}
        formatPrice={formatPrice}
        calculateInstallment={calculateInstallment}
      />

      <Modal isOpen={!!selectedProduct} onClose={closeModal}>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={closeModal}
            formatPrice={formatPrice}
            calculateInstallment={calculateInstallment}
          />
        )}
      </Modal>
    </section>
  );
};

export default ProductShowcase;