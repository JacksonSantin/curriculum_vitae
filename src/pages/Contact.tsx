import '../styles/pages/contact.css';

import { FiMail } from "react-icons/fi";

import MaskedInput from "react-text-mask";

import emailjs from 'emailjs-com';

import swal from 'sweetalert';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmailMessage', 'template_rdu5oja', e.target, 'user_0VFYQ4JjMn4RkCcdx9GRB')
    .then(() => {
      swal("Obrigado :)", "Mensagem enviada com sucesso!", "success");
    }, () => {
      swal("Oops :(", "Mensagem não enviada, tente novamente!", "error");
    });
  e.target.reset();
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <section className="section-info section-contact">
              <FiMail size={40} color="#cecece" />
              <div className="line-divisor"></div>
              <h3>Envie-me uma mensagem</h3>
              <form onSubmit={sendEmail} className="form-horizontal" id="contactForm" noValidate>

                <div className="col-sm-12">
                  <input type="text" className="form-control" id="inputName" name="name" placeholder="Seu Nome" required />
                </div>
                <div className="col-sm-12">
                  <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Seu E-mail" required />
                </div>

                <div className="col-sm-12">
                  <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-control"
                    name="phone"
                    placeholder="Telefone (Opcional)"
                    guide={false}
                    id="inputPhone"
                  />
                </div>
                <div className="col-sm-12">
                  <input type="text" className="form-control" id="inputSubject" name="company" placeholder="Empresa" required />
                </div>

                <div className="col-sm-12">
                  <textarea className="form-control" id="inputMessage" name="message" rows={4} placeholder="Mensagem" required></textarea>
                </div>

                <div className="col-sm-8">
                  <button type="submit" id="form-submit" className="btn btn-cl">SEND MESSAGE</button>
                </div>

              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;