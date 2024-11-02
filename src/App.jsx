import React from "react";
import "./styles/App.scss";
import Header from "./components/header/Header";
import HeaderPromo from "./components/headerPromo/HeaderPromo";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <HeaderPromo />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
