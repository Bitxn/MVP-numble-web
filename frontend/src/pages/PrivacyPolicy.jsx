// const AboutDeveloper = () => (
//   <div className="page">
//     <h2>👨‍💻 About Developer</h2>
//     <p>This project was developed by [Your Name], passionate about Flutter and AI.</p>
//   </div>
// );

// export default AboutDeveloper;
import React from "react";

import { Link } from "react-router-dom";
import logo from '../assets/logo.png';


const PrivacyPolicy = () => {
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
    <div className="privacy-container">
      <h1 className="privacy-title"> Privacy Policy</h1>
      <p className="privacy-text" style={{ fontFamily: 'FSP DEMO - TT Commons Pro', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.6' }}>
        At Numble.ai, we take privacy and data protection very seriously. Our platform is fully compliant with government regulations and AI-related legal frameworks. Any content or software generated using our system is created via AI models developed in-house and trained under strict ethical and technical oversight. While we strive to generate helpful, accurate, and safe outputs, users are advised to apply appropriate discretion when deploying or distributing the generated applications, especially in production or sensitive environments.
        <br /><br />
        The core AI model and supporting infrastructure powering Numble.ai are protected under intellectual property laws and are subject to patents. Unauthorized reproduction, reverse-engineering, or commercial exploitation of this technology constitutes a violation of proprietary rights and may result in legal action.
        <br /><br />
        Users are reminded that AI-generated code, while powerful and flexible, may not always be exhaustive or free from bugs. As such, it should be reviewed, tested, and refined just as any human-written code would be. We recommend adhering to software development best practices including version control, security auditing, and documentation when using code generated from our system.
        <br /><br />
        Numble.ai does not collect personal user data during app generation. Prompts entered by the user are processed in-memory to generate relevant outputs and are not stored or logged unless explicitly enabled for analytics. Our aim is to foster innovation responsibly, and we’re committed to aligning with evolving standards in AI governance and digital safety.
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
