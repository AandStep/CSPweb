import React from "react";
import "./styles/App.scss";
import Header from "./components/header/Header";
import HeaderPromo from "./components/headerPromo/HeaderPromo";
import OurServices from "./components/ourServices/OurServices";
import LeaveRequest from "./components/leaveRequest/LeaveRequest";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <HeaderPromo />
        <OurServices />
        <LeaveRequest />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
