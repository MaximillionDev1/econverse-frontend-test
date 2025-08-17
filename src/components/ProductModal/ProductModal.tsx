// components/ProductModal/ProductModal.tsx
import React from 'react';
import type { Product } from '../../types/product';
import './ProductModal.scss'; 

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  formatPrice: (price: number) => string;
  calculateInstallment: (price: number) => string;
}

export const ProductModal: React.FC<ProductModalProps> = ({ 
  product, 
  onClose,
  formatPrice,
  calculateInstallment
}) => {
  return (
    <div className="product-modal">
      <div className="modal-image-container">
        <img 
          src={product.photo} 
          alt={product.productName} 
          className="modal-image"
        />
      </div>
      
      <div className="modal-details">
        <h2 className="modal-title">{product.productName}</h2>
        <p className="modal-description">{product.descriptionShort}</p>
        
        <div className="modal-pricing">
          <span className="modal-price">{formatPrice(product.price)}</span>
          <p className="modal-installment">{calculateInstallment(product.price)}</p>
        </div>
        
        <button 
          className="modal-buy-button"
          onClick={() => {
            // Lógica de compra
            onClose();
          }}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};