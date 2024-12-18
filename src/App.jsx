import React from "react";
import "./styles/App.scss";
import Header from "./components/header/Header";
import HeaderPromo from "./components/headerPromo/HeaderPromo";
import OurServices from "./components/ourServices/OurServices";
import LeaveRequest from "./components/leaveRequest/LeaveRequest";
import AboutUs from "./components/aboutUs/AboutUs";
import DeveloperInfo from "./components/developersInfo/developerInfo";
import OurProjects from "./components/ourProjects/ourProjects";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <HeaderPromo />
        <OurServices />
        <LeaveRequest />
        <AboutUs />
        <DeveloperInfo />
        <OurProjects />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
