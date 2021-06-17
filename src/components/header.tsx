import '../styles/components/header.css';

import logoImg from '../images/logo.png';

function Header() {
  return (
    <section className="section-header d-flex justify-content-center align-items-center">
      <div className="content-section">
        <img className="mx-auto d-block" src={logoImg} alt="Logo JDS" />
        <h1 className="text-center text-white">Jackson Dhanyel Santin</h1>
        <p className="text-center text-white">Developer | Front-end</p>
      </div>
    </section>
  );
}

export default Header;