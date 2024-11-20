import './About.scss';

const About = () => {
  return (
    <div className="about container">
      <div className="about-wrapper">
        <div className="about-contents">
          <h1 className="about-title" contentEditable>About Us</h1>
          <p className="about-description">
            Welcome to <span>iWorld Tour</span>, your trusted partner in discovering breathtaking destinations and creating unforgettable memories. 
            With our experienced team, we design customized travel experiences tailored just for you. From exotic getaways to cultural adventures, we ensure every detail is perfectly planned.
          </p>

          <a href="/contact" className="about-contact">Plan Your Trip Now</a>
        </div>

        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" 
            alt="Travel the world" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;
