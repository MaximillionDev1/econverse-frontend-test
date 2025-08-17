import React, { useRef } from 'react';
import type { Product } from '../../types/product';
import './ProductCarousel.scss';

interface ProductCarouselProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  formatPrice: (price: number) => string;
  calculateInstallment: (price: number) => string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  products, 
  onProductClick,
  formatPrice,
  calculateInstallment
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollBy = (distance: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: distance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <button 
          className="carousel-arrow left"
          onClick={() => scrollBy(-500)}
          aria-label="Voltar"
        >
          &lt;
        </button>
        
        <div className="carousel" ref={carouselRef}>
          {products.map((product) => (
            <div key={product.id} className="carousel-item">
              <div className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.photo} 
                    alt={product.productName} 
                    className="product-image" 
                    loading="lazy"
                  />
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.productName}</h3>
                  <p className="product-description">{product.descriptionShort}</p>
                  
                  <div className="product-pricing">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    <span className="installment">{calculateInstallment(product.price)}</span>
                    <span className="shipping">Frete grátis</span>
                  </div>
                  
                  <button 
                    className="buy-button"
                    onClick={() => onProductClick(product)}
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-arrow right"
          onClick={() => scrollBy(500)}
          aria-label="Avançar"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};