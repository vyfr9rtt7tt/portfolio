import photo from'../../assets/images/photo.jpg'
function About() {
    return (
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>
  
        <div className="about__container bd-grid">
          <div className="about__img">
            <img src={photo} alt="About me" />
          </div>
  
          <div>
            <h2 className="about__subtitle">I’m Behruz </h2>
            <p className="about__text">
            I’m a passionate web developer crafting modern, fast, and visually polished websites. I have strong expertise in JavaScript, TypeScript, React, HTML5, CSS3, and Sass.

I build responsive and cross-browser user interfaces with clean, maintainable code. I follow a component-based approach, work confidently with React Hooks, routing, external APIs, and use Git/GitHub for version control.

I work on projects of all scales — from landing pages and corporate websites to complex platforms like movie and media sites.

🎨 In addition, I independently design websites in Figma, from initial concept to final UI, always focusing on a smooth and thoughtful UX/UI experience.
             </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  