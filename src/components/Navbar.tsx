const Navbar = () => {
  return (
    <header className="navbar">
      <a className="brand" href="#accueil" aria-label="Accueil ALCATECH">
        <span className="brand-mark">A</span>
        <span>
          <strong>ALCATECH</strong>
          <small>Ingenierie & conseil</small>
        </span>
      </a>
      <nav aria-label="Navigation principale">
        <a href="#services">Services</a>
        <a href="#apropos">A propos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
