import './Footer.scss';

import Logo from '../../assets/logo.png';
import InstagramIcon from '../../assets/icons/instagram.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import LinkedinIcon from '../../assets/icons/linkedin.png';

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="footer__newsletter-content">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="footer__newsletter-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite seu nome" required />
          <input type="email" placeholder="Digite seu e-mail" required />
          <button type="submit">INSCREVER</button>

          <div className="footer__newsletter-form-terms">
    <input type="checkbox" id="terms" required />
    <label htmlFor="terms">Aceito os termos e condições</label>
  </div>
        </form>
      </div>

     
      <div className="footer__main">
       
        <div className="footer__brand">
          <img src={Logo} alt="Econverse" className="footer__brand-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="footer__social">
            <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
            <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={LinkedinIcon} alt="LinkedIn" /></a>
          </div>
        </div>


        
        <div className="footer__links">
          <div>
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div>
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div>
            <h3>Termos</h3>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="footer__copyright">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
