import '../styles/pages/projects.css';

import HappyIcon from '../images/icon_happy.png';
import ProffyIcon from '../images/icon_proffy.png';
import ShoppingIcon from '../images/icon_shopping.png';
import BuscaCepIcon from '../images/icon_buscaCEP.png';
import DiscordIcon from '../images/discord_image_portfolio.jpg';
import ApiWebIcon from '../images/icon_project_web_api.jpg'

import ReactTooltip from "react-tooltip";

import { FiCode } from "react-icons/fi";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <section className="section-info section-projects">
              <FiCode size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h3>Confira alguns de meus projetos no Github</h3>
              <section className="projectsImg text-center justify-content-around d-flex">
                <a href="https://github.com/JacksonSantin/Happy_NLW3" target="_blank" rel="noopener noreferrer" data-for="Happy" data-tip="Happy-tooltip">
                  <div className="cardImg">
                    <img src={HappyIcon} alt="Happy icon" width="100%" className="imgProject" />
                  </div>
                  <ReactTooltip id="Happy" place="bottom" type="dark" effect="solid">
                    <span> Projeto Happy </span>
                  </ReactTooltip>
                </a>
                <a href="https://github.com/JacksonSantin/proffy" target="_blank" rel="noopener noreferrer" data-for="Proffy" data-tip="Proffy-tooltip">
                  <div className="cardImg">
                    <img src={ProffyIcon} alt="Proffy icon" width="100%" className="imgProject" />
                  </div>
                  <ReactTooltip id="Proffy" place="bottom" type="dark" effect="solid">
                    <span> Projeto Proffy </span>
                  </ReactTooltip>
                </a>
                <a href="https://github.com/JacksonSantin/shopping" target="_blank" rel="noopener noreferrer" data-for="Shopping" data-tip="Shopping-tooltip">
                  <div className="cardImg">
                    <img src={ShoppingIcon} alt="shopping icon" width="100%" className="imgProject" />
                  </div>
                  <ReactTooltip id="Shopping" place="bottom" type="dark" effect="solid">
                    <span> Projeto Shopping </span>
                  </ReactTooltip>
                </a>
                <a href="https://github.com/JacksonSantin/API_Correios" target="_blank" rel="noopener noreferrer" data-for="BuscaCEP" data-tip="BuscaCEP-tooltip">
                  <div className="cardImg">
                    <img src={BuscaCepIcon} alt="BuscaCEP icon" width="100%" className="imgProject" />
                  </div>
                  <ReactTooltip id="BuscaCEP" place="bottom" type="dark" effect="solid">
                    <span> Projeto Busca CEP </span>
                  </ReactTooltip>
                </a>
                <a href="https://github.com/JacksonSantin/bot-discord" target="_blank" rel="noopener noreferrer" data-for="Discord" data-tip="Discord-tooltip">
                  <div className="cardImg">
                    <img src={DiscordIcon} alt="Discord icon" width="100%" className="imgProject" />
                  </div>
                  <ReactTooltip id="Discord" place="bottom" type="dark" effect="solid">
                    <span> Bot Lembrete - Discord </span>
                  </ReactTooltip>
                </a>
                <a href="https://github.com/JacksonSantin/api-web-person" target="_blank" rel="noopener noreferrer" data-for="ApiWeb" data-tip="ApiWeb-tooltip">
                  <div className="cardImg">
                    <img src={ApiWebIcon} alt="ApiWeb icon" width="100%" className="imgProject" />
                  </div>
                  <ReactTooltip id="ApiWeb" place="bottom" type="dark" effect="solid">
                    <span> Api RESTful com aplicação web</span>
                  </ReactTooltip>
                </a>
              </section>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;