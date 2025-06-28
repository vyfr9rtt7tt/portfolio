import photo2 from '../../assets/images/photo 2.jpg';
import phon from '../../assets/icon/phon.png'
import git from'../../assets/icon/git.png'
import email from'../../assets/icon/email.png'
function Home() {
    return (
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Behruz</span><br /> Web Developer</h1>
          <a href="#contact" className="button">Contact</a>
        </div>
  
        <div className="contact__info">
  <a href="tel:+998901234567" className="contact__item">
    <img src={phon} alt="Phone icon" className="contact__icon" /> +998 90 90 7 69 55
  </a>

  <a href="mailto:bohodirovbehruz201@gmail.com" className="contact__item">
    <img src={email} alt="Email icon" className="contact__icon" /> youremail@example.com
  </a>

  <a href="https://github.com/vyfr9rtt7tt
" className="contact__item" target="_blank" rel="noopener noreferrer">
    <img src={git} alt="GitHub icon" className="contact__icon" /> github.com/yourusername
  </a>
</div>



        <div className="home__img">
          <img src={photo2} alt="" />
        </div>
      </section>
    );
  }
  
  export default Home;
  