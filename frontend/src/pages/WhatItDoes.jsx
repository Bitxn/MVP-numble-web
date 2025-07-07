// const WhatItDoes = () => (
//   <div className="page">
//     <h2>🧠 What It Does</h2>
//     <p>This AI Flutter Generator turns app ideas into working Flutter web code.</p>
//   </div>
// );

// export default WhatItDoes;
import { Link } from "react-router-dom";


const WhatItDoes = () => {
  return (
    <>
    <header className="header">
        <div className="logo">
          <img src="/src/assets/Screenshot_2024-06-21_040611-removebg-preview.png" alt="Logo" />
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
    <div className="page" style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
  <video controls width="100%" style={{ borderRadius: "8px", marginBottom: "1rem" }}>
    <source src="/src/assets/Screen Recording1 2025-07-07 015621.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

      <div style={{ color: "#ddd", fontSize: "1.1rem", lineHeight: "1.6",fontfamily: 'FSP DEMO - TT Commons Pro' }}>
        <h3 style={{fontfamily: 'FSP DEMO - TT Commons Pro'}}> What this AI model do</h3>
        <p>
          This platform is your no-code gateway to building powerful mobile applications. Powered by Hiryu 0.1, our custom-built 1B parameter AI model, the website turns your simple text prompts into fully functional Flutter apps — ready for both Android and iOS. No coding required. Just describe the app you want, and Hiryu 0.1 will generate it for you, complete with a downloadable ZIP repository and web preview. Whether you're an entrepreneur, designer, or just exploring an idea, you can go from concept to code-free deployment in minutes.
        </p>

        <h3> How It Works</h3>
        <ul>
          <li> Accepts a prompt describing an app</li>
          <li> Sends the prompt to hiryu 0.1 via the Numble 0.1 API</li>
          <li> Parses the response and builds the Flutter app structure</li>
          <li> Provides code download & live web preview</li>
        </ul>

        <h3> Tech Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> React + Vite + Tailwind CSS</li>
          <li><strong>Backend:</strong> FastAPI (Python)</li>
          <li><strong>AI:</strong> Indigenous 1B parameter Hiryu 0.1 Model</li>
          <li><strong>Build:</strong> Flutter CLI (`flutter build web`)</li>
          
        </ul>
      </div>
    </div>
    </>
  );
};

export default WhatItDoes;
