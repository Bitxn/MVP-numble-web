// import { useState, useEffect } from "react";
// import "./Output.css";
// import { useLocation } from "react-router-dom";

// function Output({ generatedCode, slug }) {
//   const [selectedFile, setSelectedFile] = useState("main.dart");
//   const location = useLocation();
//   const { generatedCode, slug } = location.state || {};
//   if (!generatedCode || !slug) {
//     return <div>No code available</div>;
//   }
//   useEffect(() => {
//     // In future: dynamically load other files based on selection
//     if (selectedFile === "lib/main.dart") {
//       setFileContent(generatedCode);
//     } else {
//       setFileContent("// Preview for this file is not available.");
//     }
//   }, [selectedFile, generatedCode]);


//   const files = [
//     "lib/main.dart",
//     "pubspec.yaml",
//     "README.md",
//     // Add more later
//   ];

//   return (
//     <div className="output-container">
//       {/* Column 1: File Sidebar */}
//       <div className="file-sidebar">
//         <h3>📁 Project Files</h3>
//         <ul>
//           {files.map((file) => (
//             <li
//               key={file}
//             className={`file-item ${file === selectedFile ? "active" : ""}`}
//             onClick={() => setSelectedFile(file)}
//             >
//               {file}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Column 2: Code Display */}
//       <div className="code-display">
//         <h3>📝 {selectedFile}</h3>
//         <pre><code>{generatedCode}</code></pre>
//       </div>

//       {/* Column 3: Actions */}
//       <div className="actions-panel">
//         <h3>🚀 Actions</h3>
//         <button onClick={() => window.open(`http://127.0.0.1:8000/download-zip/${slug}`)}>📦 Download ZIP</button>
//         <button onClick={async () => {
//           try {
//             const response = await fetch(`http://127.0.0.1:8000/build-web/${slug}`);
//             if (!response.ok) throw new Error("Failed to build web app");
//             const blob = await response.blob();
//             const url = URL.createObjectURL(blob);
//             const a = document.createElement("a");
//             a.href = url;
//             a.download = `${slug}_web.zip`;
//             a.click();
//             URL.revokeObjectURL(url);
//           } catch (err) {
//             alert("❌ Build failed");
//           }
//         }}>🌐 Download Web App</button>
//       </div>
//     </div>
//   );
// }

// export default Output;
import { useLocation } from "react-router-dom";
import "./Output.css";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Output = () => {
  const location = useLocation();
  const { generatedCode, slug } = location.state || {};
  const [mainCode, pubspecCode, readmeContent] = generatedCode?.split("_____") || ["", "", ""];
  const fileNames = ["lib/main.dart", "pubspec.yaml", "README.md"];
const fileContents = [mainCode, pubspecCode, readmeContent];
const [zipLoading, setZipLoading] = useState(false);
const [webLoading, setWebLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState("lib/main.dart");
  const [fileContent, setFileContent] = useState(generatedCode || "");

  useEffect(() => {
    // In future: dynamically load other files based on selection
    if (selectedFile === "lib/main.dart") {
      setFileContent(fileContents[0]);
    } 
    else if(selectedFile === "pubspec.yaml") {
      setFileContent(fileContents[1]);
    }
    else if(selectedFile === "README.md") {
      setFileContent(fileContents[2]);
    }
    else{
      setFileContent("// Preview for this file is not available.");
    }
  }, [selectedFile, fileContents]);

  const files = ["lib/main.dart", "pubspec.yaml", "README.md"];

  return (
    <>

    <header className="header">
        <div className="logo">
          <img src="\src\assets\Screenshot_2024-06-21_040611-removebg-preview.png" alt="Logo" />
        </div>
        <nav className="nav">
          <a href="#what">What it does</a>
          <a href="#dev">Privacy Policy</a>
          <a href="#about">About Us</a>
          <a href="#get">Get App</a>
        </nav>
      </header>
    <div className="output-container">
      {/* Left Panel: Files */}
      <div className="sidebar">
        <h3>📁 Project Files</h3>
        {files.map((file) => (
          <div
            key={file}
            className={`file-item ${file === selectedFile ? "active" : ""}`}
            onClick={() => setSelectedFile(file)}
          >
            {file}
          </div>
        ))}
      </div>

      {/* Middle Panel: Code */}
      <div className="code-preview">
  <h3>📄 {selectedFile}</h3>
  <SyntaxHighlighter language="dart" style={oneDark}>
    {fileContent}
  </SyntaxHighlighter>
</div>

      {/* Right Panel: Actions */}
      <div className="actions-panel">
        <h3>🚀 Actions</h3>
        <button
  className="action-btn"
  onClick={async () => {
    setZipLoading(true);
    try {
      window.open(`https://numble-backend-2.onrender.com/download-zip/${slug}`, "_blank");
    } finally {
      setTimeout(() => setZipLoading(false), 2000); // simulate loading
    }
  }}
  disabled={zipLoading}
>
  {zipLoading ? "📦 Downloading..." : "📦 Download ZIP"}
</button>
        <button
  className="action-btn"
  onClick={async () => {
    setWebLoading(true);
    try {
      const res = await fetch(`https://numble-backend-2.onrender.com/build-web/${slug}`);
      if (!res.ok) throw new Error(await res.text());
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}_web.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("❌ Failed to download web app");
    } finally {
      setWebLoading(false);
    }
  }}
  disabled={webLoading}
>
  {webLoading ? "🌐 Downloading..." : "🌐 Download Web App"}
</button>
      </div>
    </div>
    </>
  );
};

export default Output;
