// import { useState } from "react";
// import "./App.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import Output from './Output';


// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [generatedCode, setGeneratedCode] = useState("");
//   const [slug, setSlug] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

  

//   const handleQuickPrompt = async (presetPrompt) => {
//   setPrompt(presetPrompt);
//   await handleGenerate(presetPrompt); // ✅ Pass the prompt explicitly
// };




//   const handleGenerate = async (customPrompt = prompt) => {
//   setLoading(true);
//   try {
//     const response = await fetch("https://mvp-numble-web-1-ncip.onrender.com/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt: customPrompt }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("Server error:", response.status, errorText);
//       alert("❌ Server error during generation");
//       setLoading(false);
//       return;
//     }

//     const data = await response.json();
//     console.log("Generated app data:", data);

//     const pubspecCode = `name: ${data.slug}
// description: A generated Flutter web app.
// version: 1.0.0
// environment:
//   sdk: ">=2.17.0 <4.0.0"

// dependencies:
//   flutter:
//     sdk: flutter

// flutter:
//   uses-material-design: true
// `;

//     const readmeContent = `# ${data.slug}

// Generated using prompt: "${customPrompt}"
// `;

//     navigate("/output", {
//       state: {
//         generatedCode: `${data.generated_code}_____${pubspecCode}_____${readmeContent}`,
//         slug: data.slug,
//       }
//     });
//   } catch (error) {
//     console.error("Error during generation:", error);
//     alert("❌ Failed to generate app");
//   }
//   setLoading(false);
// };

//   const downloadZip = () => {
    
//     window.open(`https://mvp-numble-web-1-ncip.onrender.com/download-zip/${slug}`, "_blank");
//   };

 



//   const downloadWeb = async () => {
//     try {
//       const response = await fetch(`https://mvp-numble-web-1-ncip.onrender.com/build-web/${slug}`);
//       if (!response.ok) {
//       const text = await response.text(); // ⬅️ log exact server response
//       throw new Error(`Web build failed: ${text}`);
//     }
//       const blob = await response.blob();
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${slug}_web.zip`;
//       a.click();
//       URL.revokeObjectURL(url);
//     } catch (e) {
//       console.error("Download web error:", e);
//       alert("❌ Failed to build or download web app");
//     }
//   };
//   const previewApp = async () => {
//   try {
//     const buildResp = await fetch(`https://mvp-numble-web-1-ncip.onrender.com/build-web/${slug}`);
//     if (!buildResp.ok) {
//       const errText = await buildResp.text();
//       throw new Error(`Web build failed: ${errText}`);
//     }

//     // ✅ Web build successful — open preview
//     window.open(`https://mvp-numble-web-1-ncip.onrender.com/preview/${slug}`, "_blank");
//   } catch (e) {
//     console.error("Preview error:", e);
//     alert("❌ Failed to build or preview web app");
//   }
// };
// return (
//     <>
    
//       <header className="header">
//         <div className="logo">
//           <img src="/src/assets/Screenshot_2024-06-21_040611-removebg-preview.png" alt="Logo" />
//         </div>
//         <nav className="nav">
//   <Link to="/what-it-does">What it does</Link>
//   <Link to="/privacy-policy">Privacy Policy</Link>
//   <Link to="/about-us">About Us</Link>
//   <Link to="/get-app">Get App</Link>
// </nav>
//       </header>
      

//       <div className="container">
        
//         <h1 className="main_title">Enter your App idea</h1>
//         <p style={{ color: "#aaa" }} className="model">Currently running on: Hiryu 0.1 Model</p>
        
//         <input
//           type="text"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Generate a calculator app..."
//         />
        

//         <button onClick={() => handleGenerate({prompt})} disabled={loading}>
//           {loading ? "Generating..." : "Generate App"}
//         </button>
//         <div className="ohoho"><h3>Leading app supported by Hiryu 0.1 model</h3></div>
//         <div class="quick-actions">

          
//   <button class="pill-btn" onClick={() => handleQuickPrompt("Create a Calculator App")}>➕ Calculator App</button>
//   <button class="pill-btn" onClick={() => handleQuickPrompt("Create a Hello Santa App")}>🎅 Hello Santa App</button>
//   <button class="pill-btn" onClick={() => handleQuickPrompt("Create a Todo List App")}>📝 Todo List App</button>
//   <button class="pill-btn" onClick={() => handleQuickPrompt("Create a Unit Converter App")}>⚖️ Unit converter App</button>
  
// </div>

//         {generatedCode && (
//           <>
//             <pre>{generatedCode}</pre>
//             <button onClick={downloadZip}>📦 Download Code ZIP</button>
//             <button onClick={downloadWeb}>🌐 Download Web App</button>
//             <button onClick={previewApp}>🔍 Preview App</button>
//           </>
//         )}
//       </div>
//     </>
//   );

// }

// export default App;
import { useState } from "react";
import "./App.css";
import { useNavigate, Link } from "react-router-dom";

function App() {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleQuickPrompt = async (presetPrompt) => {
    setPrompt(presetPrompt);
    await handleGenerate(presetPrompt);
  };

  const handleGenerate = async (customPrompt) => {
    console.log("⚡ handleGenerate called");
    const customPrompt = typeof customPrompt === "string" ? customPrompt : prompt;
    console.log("Generating with prompt:", typeof customPrompt, customPrompt);

    setLoading(true);
    try {
      const response = await fetch("https://mvp-numble-web-1-ncip.onrender.com/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: String(customPrompt).trim() }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", response.status, errorText);
        alert("❌ Server error during generation");
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("Generated app data:", data);

      const pubspecCode = `name: ${data.slug}
description: A generated Flutter web app.
version: 1.0.0
environment:
  sdk: ">=2.17.0 <4.0.0"

dependencies:
  flutter:
    sdk: flutter

flutter:
  uses-material-design: true
`;

      const readmeContent = `# ${data.slug}

Generated using prompt: "${customPrompt}"
`;

      navigate("/output", {
        state: {
          generatedCode: `${data.generated_code}_____${pubspecCode}_____${readmeContent}`,
          slug: data.slug
        }
      });

    } catch (error) {
      console.error("Error during generation:", error);
      alert("❌ Failed to generate app");
    }
    setLoading(false);
  };

  const downloadZip = () => {
    window.open(`https://mvp-numble-web-1-ncip.onrender.com/download-zip/${slug}`, "_blank");
  };

  const downloadWeb = async () => {
    try {
      const response = await fetch(`https://mvp-numble-web-1-ncip.onrender.com/build-web/${slug}`);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Web build failed: ${text}`);
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}_web.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Download web error:", e);
      alert("❌ Failed to build or download web app");
    }
  };

  const previewApp = async () => {
    try {
      const buildResp = await fetch(`https://mvp-numble-web-1-ncip.onrender.com/build-web/${slug}`);
      if (!buildResp.ok) {
        const errText = await buildResp.text();
        throw new Error(`Web build failed: ${errText}`);
      }

      window.open(`https://mvp-numble-web-1-ncip.onrender.com/preview/${slug}`, "_blank");
    } catch (e) {
      console.error("Preview error:", e);
      alert("❌ Failed to build or preview web app");
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/src/assets/Screenshot_2024-06-21_040611-removebg-preview.png" alt="Logo" />
        </div>
        <nav className="nav">
          <Link to="/what-it-does">What it does</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/get-app">Get App</Link>
        </nav>
      </header>

      <div className="container">
        <h1 className="main_title">Enter your App idea</h1>
        <p style={{ color: "#aaa" }} className="model">Currently running on: Hiryu 0.1 Model</p>

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Generate a calculator app..."
        />

        <button onClick={() => handleGenerate(String(prompt).trim())} disabled={loading}>
          {loading ? "Generating..." : "Generate App"}
        </button>

        <div className="ohoho"><h3>Leading app supported by Hiryu 0.1 model</h3></div>

        <div className="quick-actions">
          <button className="pill-btn" onClick={() => handleQuickPrompt("Create a Calculator App")}>➕ Calculator App</button>
          <button className="pill-btn" onClick={() => handleQuickPrompt("Create a Hello Santa App")}>🎅 Hello Santa App</button>
          <button className="pill-btn" onClick={() => handleQuickPrompt("Create a Todo List App")}>📝 Todo List App</button>
          <button className="pill-btn" onClick={() => handleQuickPrompt("Create a Unit Converter App")}>⚖️ Unit Converter App</button>
        </div>

        {generatedCode && (
          <>
            <pre>{generatedCode}</pre>
            <button onClick={downloadZip}>📦 Download Code ZIP</button>
            <button onClick={downloadWeb}>🌐 Download Web App</button>
            <button onClick={previewApp}>🔍 Preview App</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
