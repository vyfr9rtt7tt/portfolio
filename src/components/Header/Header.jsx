import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullBlack, setIsFullBlack] = useState(false);

  
  useEffect(() => {
    if (isFullBlack) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [isFullBlack]);

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  const handleThemeClick = () => {
    setIsFullBlack(prev => !prev);
  };

  
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add('active-link');
        } else {
          navLink?.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
      
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Portfolio</a>
        </div>

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu}>About</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link" onClick={closeMenu}>Work</a>
            </li>
          </ul>
        </div>

        <div className="nav__actions">
          <label className="ui-switch">
            <input
              type="checkbox"
              checked={isFullBlack}
              onChange={handleThemeClick}
            />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
