const HeroSection = () => {
  return (
    <main id="accueil" className="hero">
      <section className="hero-content">
        <p className="eyebrow">Ingenierie electrique et consultance technique</p>
        <h1>ALCATECH structure vos projets electriques et industriels.</h1>
        <p className="hero-text">
          Etudes electriques, assistance technique, documentation projet et
          conseil industriel pour transformer un besoin complexe en decisions
          claires, documentees et exploitables.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Presenter un projet
          </a>
          <a className="button secondary" href="#services">
            Voir les services
          </a>
        </div>
        <dl className="hero-metrics" aria-label="Points forts ALCATECH">
          <div>
            <dt>Analyse</dt>
            <dd>Reseaux, installations et contraintes techniques</dd>
          </div>
          <div>
            <dt>Decision</dt>
            <dd>Comparaison de solutions et recommandations</dd>
          </div>
          <div>
            <dt>Documentation</dt>
            <dd>Dossiers, notes et supports projet</dd>
          </div>
        </dl>
      </section>
      <aside className="hero-panel" aria-label="Domaines d'intervention">
        <div>
          <span>01</span>
          <strong>Ingenierie electrique</strong>
          <p>Etudes, dimensionnement, verification et notes techniques.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Consultance industrielle</strong>
          <p>Cadrage des besoins, arbitrage technique et suivi des risques.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Assistance projet</strong>
          <p>Preparation documentaire, synthese et appui aux equipes.</p>
        </div>
      </aside>
    </main>
  );
};

export default HeroSection;
