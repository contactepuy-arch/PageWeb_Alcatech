const services = [
  {
    title: "Ingenierie electrique",
    text: "Etudes techniques, analyse de reseaux, notes de calcul et verification de coherence.",
  },
  {
    title: "Consulting industriel",
    text: "Appui aux decisions, cadrage de besoins, comparaison de solutions et suivi des risques.",
  },
  {
    title: "Documentation projet",
    text: "Preparation de dossiers techniques, syntheses, comptes rendus et supports de reunion.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Un accompagnement technique clair et pragmatique.</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
