import '../styles/components/footer.css'

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <section className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p className="text-copyright">&copy; {getYear()} Copyright - Jackson Dhanyel Santin</p>
            <nav className="menu-copyright">
              <ul>
                <li>
                  <a href="#about">
                    Sobre mim
                  </a>
                </li>
                <li>
                  <a href="#skill-edutation">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#experience-testimonials">
                    Experiência
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;