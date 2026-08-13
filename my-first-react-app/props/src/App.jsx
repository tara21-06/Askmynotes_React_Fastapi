import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("English");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Language Switcher</h1>

      <button onClick={() => setLanguage("English")}>
        English
      </button>

      <button
        onClick={() => setLanguage("Telugu")}
        style={{ marginLeft: "10px" }}
      >
        Telugu
      </button>

      <h2>
        {language === "English"
          ? "Welcome to React"
          : "రియాక్ట్‌కు స్వాగతం"}
      </h2>
    </div>
  );
}

export default App;