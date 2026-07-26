const AboutSection = () => {
  return (
    <section id="methode" className="section method-section">
      <div className="section-heading">
        <p className="eyebrow">Methode</p>
        <h2>Une demarche simple pour securiser les decisions techniques.</h2>
      </div>
      <div className="method-grid">
        <article>
          <span>01</span>
          <h3>Diagnostiquer</h3>
          <p>Comprendre le besoin, les contraintes, les donnees disponibles et les risques principaux.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Analyser</h3>
          <p>Etudier les options, verifier les hypotheses et comparer les solutions possibles.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Documenter</h3>
          <p>Produire des livrables clairs pour decider, consulter, suivre ou transmettre.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Accompagner</h3>
          <p>Appuyer les prochaines etapes avec une lecture technique pragmatique.</p>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
