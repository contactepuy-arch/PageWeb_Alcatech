const services = [
  {
    title: "Ingenierie electrique",
    text: "Etudes electriques, analyse de reseaux, dimensionnement, verification de coherence et appui aux choix techniques.",
  },
  {
    title: "Consultance technique",
    text: "Cadrage des besoins, analyse de solutions, comparaison de fournisseurs et recommandations exploitables.",
  },
  {
    title: "Documentation projet",
    text: "Notes techniques, dossiers de consultation, syntheses, comptes rendus et supports de reunion.",
  },
  {
    title: "Assistance a maitrise d'ouvrage",
    text: "Aide a la decision, suivi des contraintes, coordination technique et accompagnement des etapes cles.",
  },
  {
    title: "Efficacite energetique",
    text: "Premiere analyse des usages, pistes d'optimisation et priorisation des actions pertinentes.",
  },
  {
    title: "Projets industriels",
    text: "Structuration, suivi documentaire et lecture technique des risques pour avancer avec methode.",
  },
];

const sectors = [
  "Industrie",
  "Energie",
  "Installations electriques",
  "Batiments techniques",
  "Infrastructures",
  "Projets d'efficacite energetique",
];

const ServicesSection = () => {
  return (
    <>
      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Un accompagnement technique clair, utile et documente.</h2>
          <p>
            ALCATECH intervient quand un projet demande de la rigueur technique,
            une lecture independante et des livrables faciles a exploiter.
          </p>
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
      <section id="secteurs" className="section sectors-section">
        <div className="section-heading">
          <p className="eyebrow">Secteurs et mots cles</p>
          <h2>Des sujets techniques traites avec une approche operationnelle.</h2>
        </div>
        <div className="keyword-list" aria-label="Secteurs ALCATECH">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
