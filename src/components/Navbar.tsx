const Navbar = () => {
  return (
    <header className="navbar">
      <a className="brand" href="#accueil" aria-label="Accueil ALCATECH">
        <span className="brand-mark">A</span>
        <span>
          <strong>ALCATECH</strong>
          <small>Ingenierie electrique</small>
        </span>
      </a>
      <nav aria-label="Navigation principale">
        <a href="#services">Services</a>
        <a href="#secteurs">Secteurs</a>
        <a href="#methode">Methode</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
