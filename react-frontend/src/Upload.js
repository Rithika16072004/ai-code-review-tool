import React, { useState } from "react";

function Upload() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file_content: code }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h2>Code Analyzer</h2>
      <textarea
        rows="10"
        cols="60"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Analyze Code</button>

      {result && (
        <pre
          style={{
            background: "#1e1e1e",
            color: "#00ff99",
            padding: "1em",
            borderRadius: "10px",
            textAlign: "left",
            whiteSpace: "pre-wrap",
            marginTop: "1em"
          }}
        >
          {typeof result === "object" ? JSON.stringify(result, null, 2) : result}
        </pre>
      )}
    </div>
  );
}

export default Upload;
