import '../styles/pages/experienceTestimonials.css';

import { FaWhatsapp } from "react-icons/fa";
import { FiCircle, FiCoffee, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { GrBriefcase } from "react-icons/gr";

import ReactTooltip from "react-tooltip";

function ExperienceTestimonials() {
  return (
    <section id="experience-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <section className="section-info section-experience">
              <GrBriefcase size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h3>Experiência</h3>
              <div className="time-line">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="time-item">
                      <div className="time-year">
                        2018 - Present
                      </div>
                      <div className="icon-holder-time wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h4 className="time-title"> VipWeb Soluções em Tecnologia / SIGASOFT </h4>
                      <h5 className="time-semitag"> Dev Front-end </h5>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="time-item">
                      <div className="time-year">
                        2018 - 2019
                      </div>
                      <div className="icon-holder-time wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h4 className="time-title"> VipWeb Soluções em Tecnologia / SIGASOFT </h4>
                      <h5 className="time-semitag"> Suporte </h5>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="time-item">
                      <div className="time-year">
                        2017-2018
                      </div>
                      <div className="icon-holder-time wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h4 className="time-title"> Ferragens União Colonial </h4>
                      <h5 className="time-semitag"> Vendedor </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-sm-4">
            <section className="section-info section-address">
              <FiCoffee size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h3>Vamos Tomar um Café</h3>
              <h5><strong>Enderço:</strong> Rua Duque de Caxias, 370, Centro</h5>
              <h5>
                <strong>E-mail:</strong>
                <a href="mailto:jackdhanyelsn@gmail.com" target="_blank" rel="noopener noreferrer"> jackdhanyelsn@gmail.com</a>
              </h5>
              <h5> <strong>Whatsapp:</strong>
                <a href="https://api.whatsapp.com/send?phone=54996262629" target="_blank" rel="noopener noreferrer" className="wpp-link" data-for="Whatsapp" data-tip="Whatsapp-tooltip">
                  (54) 9 9626-2629 <FaWhatsapp size={14} color="#cecece" />
                </a>
                <ReactTooltip id="Whatsapp" place="top" type="dark" effect="solid">
                  <span> Contate-me via Whatsapp</span>
                </ReactTooltip>
              </h5>
              <a href="https://www.google.com/maps/place/R.+Duque+de+Caxias,+370+-+Vila+Angela+Borella,+Marau+-+RS,+99150-000/@-28.4508903,-52.2039039,17z/data=!3m1!4b1!4m5!3m4!1s0x94e29cb7856850c3:0xf421e6be86b680d0!8m2!3d-28.450895!4d-52.2017152" target="_blank" rel="noopener noreferrer" className="map-iframe">
                <h4 className="map-open">
                  <FiMapPin size={18} color="#cecece" /> Ver no Mapa
                  <div className="line-divisor"></div>
                </h4>
              </a>
              <div className="social-footer d-inline-block">
                <a href="https://www.facebook.com/jackson.santin.52/" target="_blank" rel="noopener noreferrer">
                  <FiFacebook size={26} color="#cecece" />
                </a>
                <a href="https://twitter.com/DhanyelJack" target="_blank" rel="noopener noreferrer">
                  <FiTwitter size={26} color="#cecece" />
                </a>
                <a href="https://www.instagram.com/jackson_santin/" target="_blank" rel="noopener noreferrer">
                  <FiInstagram size={26} color="#cecece" />
                </a>
                <a href="https://www.linkedin.com/in/jackson-dhanyel-santin/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin size={26} color="#cecece" />
                </a>
                <a href="https://github.com/JacksonSantin" target="_blank" rel="noopener noreferrer">
                  <FiGithub size={26} color="#cecece" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTestimonials;