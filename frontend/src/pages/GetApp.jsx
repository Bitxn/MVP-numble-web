// const GetApp = () => (
//   <div className="page">
//     <h2>📥 Get App</h2>
//     <p>Download the app or access the code via the zip/web build buttons.</p>
//   </div>
// );

// export default GetApp;

import React from "react";
import { Link } from "react-router-dom";


const GetApp = () => {
  const amazonAppUrl = "https://www.amazon.in/Numble-ai-Answering-Curiosity/dp/B0F43W7YXL"; // 🔁 Replace with your real link

  return (
    <>
    <div backgroundColor="#000" style={{ minHeight: "100vh", color: "#fff" }}>
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
      
    <div className="get-app-container">
      <h1> Get the App</h1>
      <p>
        Experience the power of AI-powered Flutter app generation right from your device. Download the official Numble.ai companion app from the Amazon Appstore.
      </p>
      <button className="get-app-btn" onClick={() => window.open(amazonAppUrl, "_blank")}>
         Get it on Amazon Appstore
      </button>
    </div>
    </div>
    
    </>
  );
};

export default GetApp;

