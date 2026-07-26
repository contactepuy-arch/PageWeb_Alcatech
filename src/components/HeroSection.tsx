const HeroSection = () => {
  return (
    <main id="accueil" className="hero">
      <section className="hero-content">
        <p className="eyebrow">Bureau d'etudes et conseil technique</p>
        <h1>ALCATECH accompagne vos projets electriques et industriels.</h1>
        <p className="hero-text">
          De l'analyse technique a la preparation de dossiers, ALCATECH aide les
          maitres d'ouvrage, industriels et partenaires a avancer avec des choix
          clairs, documentes et exploitables.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Demander un echange
          </a>
          <a className="button secondary" href="#services">
            Voir les services
          </a>
        </div>
      </section>
      <aside className="hero-panel" aria-label="Domaines d'intervention">
        <div>
          <span>01</span>
          <strong>Etudes electriques</strong>
          <p>Analyse, dimensionnement, synthese et appui technique.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Projets industriels</strong>
          <p>Coordination technique, suivi documentaire et aide a la decision.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Conseil operationnel</strong>
          <p>Structuration des besoins, comparaison et recommandations.</p>
        </div>
      </aside>
    </main>
  );
};

export default HeroSection;
