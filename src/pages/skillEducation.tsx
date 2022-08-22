import "../styles/pages/skillEducation.css";

import { FaRegLightbulb } from "react-icons/fa";
import { FiStar, FiCircle } from "react-icons/fi";

function SkillEducation() {
  return (
    <section id="skill-edutation">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <section className="section-info section-skill">
              <FiStar size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h3>Skills</h3>
              <div
                className="skill-holder owl-carousel owl-theme d-block"
                style={{ opacity: 1 }}
              >
                <div className="owl-wrapper-outer">
                  <div className="owl-wrapper d-block">
                    <div className="owl-item">
                      <div className="skill-area">
                        <div className="skill-title">
                          <h4>
                            <u>Profissional</u>
                          </h4>
                        </div>
                        <div className="skillbar clearfix" data-percent="30%">
                          <div className="skillbar-title">
                            <span>JavaScript</span>
                          </div>
                          <div className="skillbar-bg"></div>
                          <div
                            className="skillbar-bar to-animate"
                            style={{ width: "30%" }}
                          ></div>
                          <div className="skillbar-bar-percent">30%</div>
                        </div>
                        <div className="skillbar clearfix" data-percent="30%">
                          <div className="skillbar-title">
                            <span>TypeScript</span>
                          </div>
                          <div className="skillbar-bg"></div>
                          <div
                            className="skillbar-bar to-animate"
                            style={{ width: "30%" }}
                          ></div>
                          <div className="skillbar-bar-percent">30%</div>
                        </div>
                        <div className="skillbar clearfix" data-percent="95%">
                          <div className="skillbar-title">
                            <span>HTML</span>
                          </div>
                          <div className="skillbar-bg"></div>
                          <div
                            className="skillbar-bar to-animate"
                            style={{ width: "95%" }}
                          ></div>
                          <div className="skillbar-bar-percent">95%</div>
                        </div>
                        <div className="skillbar clearfix" data-percent="90%">
                          <div className="skillbar-title">
                            <span>CSS</span>
                          </div>
                          <div className="skillbar-bg"></div>
                          <div
                            className="skillbar-bar to-animate"
                            style={{ width: "90%" }}
                          ></div>
                          <div className="skillbar-bar-percent">90%</div>
                        </div>
                        <div className="skillbar clearfix" data-percent="20%">
                          <div className="skillbar-title">
                            <span>React</span>
                          </div>
                          <div className="skillbar-bg"></div>
                          <div
                            className="skillbar-bar to-animate"
                            style={{ width: "20%" }}
                          ></div>
                          <div className="skillbar-bar-percent">20%</div>
                        </div>
                        <div className="skillbar clearfix" data-percent="40%">
                          <div className="skillbar-title">
                            <span>Vue</span>
                          </div>
                          <div className="skillbar-bg"></div>
                          <div
                            className="skillbar-bar to-animate"
                            style={{ width: "40%" }}
                          ></div>
                          <div className="skillbar-bar-percent">40%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-sm-8">
            <section className="section-info section-education">
              <FaRegLightbulb size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h3>Formação</h3>
              <div className="time-line">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="time-item">
                      <div className="time-year">2020</div>
                      <div
                        className="icon-holder-time wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h3 className="year-mobile d-none"> 2020 </h3>
                      <h4 className="time-title">
                        {" "}
                        UPF - Universidade de Passo Fundo{" "}
                      </h4>
                      <h5 className="time-semitag">
                        {" "}
                        ADS (Análise e Desenvolvimento de Sistemas){" "}
                      </h5>
                      <p>
                        {" "}
                        Formado no Curso Superior Tecnólogo em Análise e
                        Desenvolvimento de Sistemas.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="time-item">
                      <div className="time-year">2020</div>
                      <div
                        className="icon-holder-time wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <FiCircle size={26} color="#cecece" />
                      </div>
                      <h3 className="year-mobile d-none"> 2020 </h3>
                      <h4 className="time-title"> ROCKETSEAT </h4>
                      <h5 className="time-semitag"> Projeto Proffy </h5>
                      <p>
                        {" "}
                        Projeto Proffy desenvolvido e aprendido com a equipe da
                        Rocketseat.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillEducation;
