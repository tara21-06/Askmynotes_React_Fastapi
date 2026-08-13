import React, { createContext, useContext, useState } from "react";
const LanguageContext = createContext();
function WelcomeMessage() {
  const { language } = useContext(LanguageContext);
  return (
    <h2>
      {language === "English"
        ? "Welcome to React"
        : "రియాక్ట్‌కు స్వాగతం"}
    </h2>
  );
}
function App() {
  const [language, setLanguage] = useState("English");
  return (
    <LanguageContext.Provider value={{ language }}>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Arial",
        }}
      >
        <h1>Language Switcher</h1>
        <button
          onClick={() => setLanguage("English")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          English
        </button>

        <button
          onClick={() => setLanguage("Telugu")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          Telugu
        </button>
        <WelcomeMessage />
      </div>
    </LanguageContext.Provider>
  );
}
export default App;