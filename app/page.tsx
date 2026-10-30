import Image from "next/image";

const services = [
  {
    n: "01",
    title: "Études électriques",
    text: "Conception, dimensionnement et vérification de vos installations HTA et BT, de l'avant-projet jusqu'au dossier d'exécution.",
    tags: ["Bilans de puissance", "Notes de calcul", "Schémas unifilaires"],
  },
  {
    n: "02",
    title: "Projets industriels",
    text: "Pilotage technique des interfaces électriques, coordination des intervenants et maîtrise des jalons sur sites industriels exigeants.",
    tags: ["Cahiers des charges", "Suivi fournisseurs", "Planification"],
  },
  {
    n: "03",
    title: "Essais & mise en service",
    text: "Préparation, supervision et suivi des essais pour sécuriser la mise sous tension et la réception de vos équipements.",
    tags: ["Plans d'essais", "Protections électriques", "Réception FAT / SAT"],
  },
  {
    n: "04",
    title: "Assistance technique",
    text: "Une expertise directement mobilisable auprès de vos équipes pour analyser, décider et résoudre les points techniques critiques.",
    tags: ["Diagnostic", "Visa documentaire", "Support chantier"],
  },
];

const sectors = [
  {
    n: "01",
    icon: "H₂O",
    title: "Hydroélectricité",
    text: "Études, coordination et mise en service des systèmes électriques de centrales hydroélectriques : alternateurs, auxiliaires, protections, distribution HTA/BT et interfaces d'exploitation.",
  },
  {
    n: "02",
    icon: "NUC",
    title: "Énergie nucléaire",
    text: "Assistance en ingénierie électrique pour les installations nucléaires, avec une attention particulière portée à la sûreté, à la traçabilité documentaire et aux exigences réglementaires.",
  },
  {
    n: "03",
    icon: "ENR",
    title: "Énergies renouvelables",
    text: "Intégration électrique de projets solaires, éoliens et de stockage d'énergie : raccordement, distribution, coordination des protections et mise en service.",
  },
  {
    n: "04",
    icon: "GRID",
    title: "Réseaux électriques",
    text: "Études de réseaux HTA/BT, sélectivité et protection, postes électriques, contrôle-commande et fiabilisation des systèmes de distribution et de transport d'énergie.",
  },
];

const projectPhases = [
  {
    phase: "APS · APD · EPC",
    title: "Études & avant-projets",
    intro: "Concevoir et chiffrer une solution CFO HTA/BT adaptée aux installations industrielles neuves, existantes ou en revamping.",
    items: [
      "Chiffrage des heures d’études et respect des jalons",
      "Bilans de puissance, schémas unifilaires et notes de calcul",
      "Plans de cheminement et contribution à la maquette",
      "Programmes d’essais et vérification des livrables",
      "Préconsultation des fournisseurs et sous-traitants",
      "Relevés sur site et participation aux réunions techniques",
    ],
  },
  {
    phase: "CONTRACTUALISATION · EXÉCUTION",
    title: "Consultation & réalisation",
    intro: "Transformer les études en dossiers contractuels fiables, puis accompagner les équipes jusqu’aux essais des équipements.",
    items: [
      "Cahiers des charges travaux et spécifications matériels",
      "Consultation des fournisseurs et sous-traitants",
      "Analyse technique des offres et assistance au choix",
      "Surveillance des études d’exécution",
      "Assistance technique pendant les travaux",
      "Participation aux essais en usine (FAT) et sur site (SAT)",
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ALCATECH",
    description: "Bureau d'études et société d'ingénierie électrique industrielle à Lyon, intervenant en France et à l'étranger.",
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "Place", name: "International" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressCountry: "FR",
    },
    serviceType: ["Ingénierie électrique", "Études HTA BT", "Assistance technique", "Mise en service électrique"],
    knowsAbout: ["CFO", "HTA", "BT", "APS", "APD", "EPC", "Revamping industriel", "FAT", "SAT"],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="nav-wrap">
        <a className="brand" href="#accueil" aria-label="ALCATECH — Accueil">
          <Image src="/alcatech-logo.svg" alt="ALCATECH" width={700} height={320} priority />
        </a>
        <nav aria-label="Navigation principale">
          <a href="#expertises">Expertises</a>
          <a href="#approche">Approche</a>
          <a href="#secteurs">Secteurs</a>
          <a className="nav-cta" href="#contact">Parler de votre projet <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Ingénierie électrique · France & international</p>
          <h1>L&apos;expertise électrique<br />au service de vos<br /><em>projets industriels.</em></h1>
          <p className="hero-lead">ALCATECH accompagne les industriels et acteurs de l&apos;énergie dans la conception, la réalisation et la mise en service d&apos;installations électriques fiables et performantes.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Échanger sur votre besoin <Arrow /></a>
            <a className="button ghost" href="#expertises">Découvrir nos expertises ↓</a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span className="voltage">HTA</span><i /><span>BT</span>
        </div>
        <div className="hero-proof">
          <div><strong>Terrain</strong><span>Une expertise forgée sur des projets industriels complexes</span></div>
          <div><strong>Sur mesure</strong><span>Des solutions adaptées à vos contraintes techniques</span></div>
          <div><strong>France & international</strong><span>Interventions sur site en France et à l&apos;étranger</span></div>
        </div>
      </section>

      <section className="intro section" id="approche">
        <div className="section-label">01 — Notre mission</div>
        <div className="intro-copy">
          <h2>Transformer les contraintes<br />électriques en <em>solutions maîtrisées.</em></h2>
          <div className="intro-detail">
            <p>De l&apos;étude à la mise en service, nous faisons le lien entre les exigences techniques, les réalités du terrain et les objectifs de votre projet.</p>
            <p>Notre approche repose sur une vision globale des installations, une documentation rigoureuse et une collaboration étroite avec vos équipes.</p>
          </div>
        </div>
      </section>

      <section className="services section" id="expertises">
        <div className="section-head">
          <div className="section-label light">02 — Nos expertises</div>
          <h2>Une expertise technique,<br /><em>à chaque étape.</em></h2>
          <p>Des prestations ciblées ou un accompagnement complet pour vos projets d&apos;installations électriques industrielles.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.n}>
              <span className="service-num">{service.n}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="phase-intro">
          <span>De la faisabilité à la mise en service</span>
          <h3>Un accompagnement CFO HTA/BT sur tout le cycle du projet.</h3>
          <p>ALCATECH intervient en appui des équipes projet, en mission ciblée ou sur plusieurs phases, avec des déplacements ponctuels en France et à l’étranger selon les besoins.</p>
        </div>
        <div className="phase-grid">
          {projectPhases.map((phase) => (
            <article key={phase.phase}>
              <p className="phase-label">{phase.phase}</p>
              <h3>{phase.title}</h3>
              <p className="phase-copy">{phase.intro}</p>
              <ul>{phase.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="method section">
        <div className="section-label">03 — Notre méthode</div>
        <div className="method-layout">
          <div>
            <h2>Clarté. Rigueur.<br /><em>Engagement.</em></h2>
            <p>Un interlocuteur technique impliqué, capable de comprendre rapidement vos enjeux et de faire avancer concrètement votre projet.</p>
          </div>
          <ol>
            <li><span>01</span><div><strong>Comprendre</strong><p>Écoute du besoin, analyse de l&apos;existant et identification des contraintes.</p></div></li>
            <li><span>02</span><div><strong>Concevoir</strong><p>Définition d&apos;une solution robuste, conforme et adaptée à l&apos;exploitation.</p></div></li>
            <li><span>03</span><div><strong>Coordonner</strong><p>Pilotage des interfaces et anticipation des points de blocage.</p></div></li>
            <li><span>04</span><div><strong>Sécuriser</strong><p>Contrôle, essais et accompagnement jusqu&apos;à la mise en service.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="sectors section" id="secteurs">
        <div className="section-label light">04 — Secteurs d&apos;intervention</div>
        <div className="sector-heading">
          <h2>Des solutions électriques pour<br /><em>les secteurs énergétiques exigeants.</em></h2>
          <p>ALCATECH mobilise une expertise adaptée aux contraintes techniques, réglementaires et opérationnelles de chaque installation, en France comme à l&apos;international.</p>
        </div>
        <div className="sector-grid">
          {sectors.map((sector) => (
            <article key={sector.n}>
              <div className="sector-card-top">
                <span className="sector-icon" aria-hidden="true">{sector.icon}</span>
                <span className="sector-num">{sector.n}</span>
              </div>
              <h3>{sector.title}</h3>
              <p>{sector.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow"><span /> Un projet, un besoin, une question ?</p>
        <h2>Parlons de votre<br /><em>prochain défi.</em></h2>
        <p>Vous recherchez une expertise en ingénierie électrique industrielle ? Présentez-nous votre projet et échangeons sur la meilleure façon de le faire avancer.</p>
        <a className="button primary" href="mailto:contact@alcatech-ingenierie.fr?subject=Demande%20de%20contact%20—%20Projet%20électrique">contact@alcatech-ingenierie.fr <Arrow /></a>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/alcatech-logo.svg" alt="ALCATECH" width={700} height={320} /><p>Engineering · Industry · AI</p></div>
        <div><strong>Navigation</strong><a href="#expertises">Expertises</a><a href="#approche">Approche</a><a href="#secteurs">Secteurs</a></div>
        <div><strong>Localisation</strong><p>Lyon, France</p><p>Interventions en France et à l&apos;étranger</p></div>
        <div><strong>Contact</strong><a href="mailto:contact@alcatech-ingenierie.fr">contact@alcatech-ingenierie.fr</a></div>
        <p className="copyright">© {new Date().getFullYear()} ALCATECH. Tous droits réservés. <span>Ingénierie électrique industrielle en France et à l&apos;international</span></p>
      </footer>
    </main>
  );
}
