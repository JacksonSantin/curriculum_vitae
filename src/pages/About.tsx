import "../styles/pages/about.css";

import {
  FiEdit,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { IoBaseballOutline } from "react-icons/io5";

import imgAvatar from "../images/avatar.jpg";
import imgPhp from "../images/php.png";
import imgHtml from "../images/html.png";
import imgCss from "../images/css.png";
import imgReact from "../images/react.png";
import imgJavascript from "../images/javascript.png";
import imgJava from "../images/java.png";
import imgTypescript from "../images/typescript.png";
import imgVue from "../images/vue.png";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-pull-4">
            <section className="section-info section-aboutme">
              <FiEdit size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h3>Sobre Mim</h3>
              <p>
                Dedicação. Essa palavra me difine bem. Procuro sempre fazer tudo
                do jeito mais correto possível, sempre pensando no próximo.
                Pratico programação sempre que tenho um tempo sobrando, procuro
                estar sempre por dentro das notícias que mais me interessam,
                tecnologia, é claro. Gosto de uma boa música, trabalhar ouvindo
                um som, bons amigos e principalmente, uma boa equipe com quem
                possa dividir e aperfeiçoar meus conhecimentos.
              </p>
              <IoBaseballOutline size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h4>Hobbies</h4>
              <p>
                {" "}
                Programar | Jogar | Brincar com meu filho | Passear | Assistir
                filmes e séries{" "}
              </p>
              <FaCode size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h4>Minhas stacks</h4>
              <div className="stacks">
                <ul>
                  <li>
                    <a
                      href="https://www.php.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgPhp} alt="PHP" className="php-stack" />
                    </a>
                    <a
                      href="https://html.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgHtml} alt="HTML" className="html-stack" />
                    </a>
                    <a
                      href="https://purecss.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgCss} alt="CSS" className="css-stack" />
                    </a>
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgReact} alt="REACT" className="react-stack" />
                    </a>
                    <a
                      href="https://www.javascript.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgJavascript} alt="JS" className="js-stack" />
                    </a>
                    <a
                      href="https://www.java.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgJava} alt="JAVA" className="java-stack" />
                    </a>
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgTypescript} alt="TS" className="ts-stack" />
                    </a>
                    <a
                      href="https://vuejs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgVue} alt="Vue.js" className="vue-stack" />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="col-sm-4 col-sm-push-8">
            <section className="section-info section-profile">
              <div className="img-profile">
                <img src={imgAvatar} alt="Jackson Dhanyel Santin" />
              </div>
              <div className="line-divisor"></div>
              <h4>
                <strong>Nome:</strong> Jackson Dhanyel Santin
              </h4>
              <h4>
                <strong>Data de Nascimento:</strong> 09/09/1999
              </h4>
              <h4>
                <strong>Nacionalidade:</strong> Brasileiro
              </h4>
              <h4>
                <strong>Estado Civil:</strong> União Estável
              </h4>
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

export default About;
