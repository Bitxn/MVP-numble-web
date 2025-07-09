// const AboutUs = () => (
//   <div className="page">
//     <h2>ℹ️ About Us</h2>
//     <p>We are building AI-assisted tools to accelerate app development.</p>
//   </div>
// );

// export default AboutUs;

import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png';


const AboutUs = () => {
  return (
    <>
    <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
  <Link to="/what-it-does" style={{
      color: "grey",
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: 0.6,
      textDecoration: "none",
    }}>What it does</Link>
  <Link to="/about-developer" style={{
      color: "grey",
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: 0.6,
      textDecoration: "none",
    }}>Privacy Policy</Link>
  <Link to="/about-us" style={{
      color: "grey",
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: 0.6,
      textDecoration: "none",
    }}>About Us</Link>
  <Link to="/get-app" style={{
      color: "grey",
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: 0.6,
      textDecoration: "none",
    }}>Get App</Link>
</nav>
      </header>
    <div className="about-hero">
      <div className="about-overlay" />

      <div className="about-content">
        <h1>About Us</h1>

        <section>
          <h2> Our Vision</h2>
          <p>
            At Numble.ai, our vision is to completely reshape the future of software development.
            Traditional app creation involves complexity, cost, and time — but with our AI-first
            platform, anyone can build apps instantly using just natural language.
          </p>
        </section>

        <section>
          <h2> Our Story</h2>
          <p>
            Myself Bitan Dutta, developer of Numble.ai, started programming at 13, excited but overwhelmed by the jungle of languages and
            tools. This challenge sparked a mission — to build an AI that generates entire apps from
            a simple idea. That dream is now reality. Numble.ai empowers creators of all levels to
            bring ideas to life without writing a line of code.
          </p>
        </section>

        <section>
          <h2> Our Mission</h2>
          <p>
            We are on a mission to democratize app development — to turn builders into visionaries,
            and visionaries into builders. Whether you're a student, a startup, or an enterprise
            innovator, Numble.ai accelerates your path from idea to app.
          </p>
        </section>

        <section>
          <h2> Technology & Ethics</h2>
          <p>
            Our AI models are custom-built, responsibly trained, and legally patented. We comply
            with modern AI safety standards and ensure that generated code respects ethical
            boundaries. Users are encouraged to validate outputs before deployment. Misuse or
            unauthorized distribution of our AI system or its results is strictly prohibited.
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutUs;

