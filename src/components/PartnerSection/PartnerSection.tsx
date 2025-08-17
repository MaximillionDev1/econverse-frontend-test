import './PartnerSection.scss';

const partnersData = [
  {
    id: 1,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
];

export const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="partners-grid">
        {partnersData.map((partner) => (
          <div
            key={partner.id}
            className="partners-banner"
          >
            <div className="banner-content">
              <h2 className="banner-title">{partner.title}</h2>
              <p className="banner-description">{partner.description}</p>
              <button className="banner-button">CONFIRA</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
