import './BrandNavigation.scss';
import Logo from '../../assets/logo.png';

export const BrandsNavigation = () => {
  const brands = Array(5).fill({ name: "Marca", logo: Logo });

  return (
    <section className="brands-navigation">
      <h2 className="section-title">Navegue por marcas</h2>
      
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="brand-logo-container">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="brand-logo"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
