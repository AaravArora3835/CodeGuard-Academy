import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [hint, setHint] = useState("");

  const pingServer = async () => {
    const res = await fetch("/ping");
    const data = await res.json();
    setMsg(data.message);
  };

  const login = async () => {
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: "123" })
    });
    const data = await res.json();
    setMsg(data.message);
  };

  const executeCode = async () => {
    const res = await fetch("/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });
    const data = await res.json();
    setOutput(data.output);
  };

  const getHint = async () => {
    const res = await fetch("/hint");
    const data = await res.json();
    setHint(data.message);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>CodeGuard Academy</h1>
      <button onClick={pingServer}>Ping Server</button>
      <p>{msg}</p>

      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <button onClick={login}>Login</button>

      <h2>Student Dashboard</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Type your code here..."
        onChange={(e) => setCode(e.target.value)}
      />
      <br />
      <button onClick={executeCode}>Run Code</button>
      <p>Output: {output}</p>

      <button onClick={getHint}>Get AI Hint</button>
      <p>Hint: {hint}</p>
    </div>
  );
}

export default App;
