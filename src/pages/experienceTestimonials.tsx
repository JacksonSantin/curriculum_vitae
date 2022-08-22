import "../styles/pages/experienceTestimonials.css";

import { FaWhatsapp } from "react-icons/fa";
import {
  FiCircle,
  FiCoffee,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
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
                      <div className="time-year">2022 - Presente</div>
                      <div
                        className="icon-holder-time wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h3 className="year-mobile d-none"> 2022 - Presente </h3>
                      <h4 className="time-title"> CGI Software de Gestão </h4>
                      <h5 className="time-semitag"> Dev Front-end </h5>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="time-item">
                      <div className="time-year">2018 - 2022</div>
                      <div
                        className="icon-holder-time wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h3 className="year-mobile d-none"> 2018 - Presente </h3>
                      <h4 className="time-title">
                        {" "}
                        VipWeb Soluções em Tecnologia / SIGASOFT{" "}
                      </h4>
                      <h5 className="time-semitag"> Dev Front-end </h5>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="time-item">
                      <div className="time-year">2018 - 2019</div>
                      <div
                        className="icon-holder-time wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h3 className="year-mobile d-none"> 2018 - 2019 </h3>
                      <h4 className="time-title">
                        {" "}
                        VipWeb Soluções em Tecnologia / SIGASOFT{" "}
                      </h4>
                      <h5 className="time-semitag"> Suporte </h5>
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
              <h5>
                <strong>Enderço:</strong> Rua Duque de Caxias, 370, Centro
              </h5>
              <h5>
                <strong>E-mail:</strong>
                <a
                  href="mailto:jackdhanyelsn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  jackdhanyelsn@gmail.com
                </a>
              </h5>
              <h5>
                {" "}
                <strong>Whatsapp:</strong>
                <a
                  href="https://api.whatsapp.com/send?phone=54996262629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wpp-link"
                  data-for="Whatsapp"
                  data-tip="Whatsapp-tooltip"
                >
                  (54) 9 9626-2629 <FaWhatsapp size={14} color="#cecece" />
                </a>
                <ReactTooltip
                  id="Whatsapp"
                  place="top"
                  type="dark"
                  effect="solid"
                >
                  <span> Contate-me via Whatsapp</span>
                </ReactTooltip>
              </h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir/?api=1&destination=-28.450819517910066,-52.201736659492"
                className="map-iframe"
              >
                <h4 className="map-open">
                  <FiMapPin size={18} color="#cecece" /> Ver rota no Google Maps
                  <div className="line-divisor"></div>
                </h4>
              </a>
              <div className="social-footer d-inline-block">
                <a
                  href="https://www.facebook.com/jackson.santin.52/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook size={26} color="#cecece" />
                </a>
                <a
                  href="https://twitter.com/DhanyelJack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiTwitter size={26} color="#cecece" />
                </a>
                <a
                  href="https://www.instagram.com/jackson_santin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram size={26} color="#cecece" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jackson-dhanyel-santin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin size={26} color="#cecece" />
                </a>
                <a
                  href="https://github.com/JacksonSantin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
