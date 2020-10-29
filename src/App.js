import "./App.css";
import React, { useState } from "react";
import Page1 from "./pages/page1.js";
import Page2 from "./pages/page2.js";
import wifi from "./images/wifi.png";
import service from "./images/service.png";
import battery from "./images/battery.png";

function App() {
  const [page, setPage] = useState(false);

  function handleClick() {
    setPage(!page);
  }

  return (
    <div className="parent">
      <div className="notification-bar">
        <span className="time">10:30</span>
        <span className="corner-icons">
          <img src={wifi} alt="wifi" />
          <img src={service} alt="service" />
          <img src={battery} alt="battery" />
        </span>
      </div>
      {page ? <Page2 onClick={handleClick} /> : <Page1 onClick={handleClick} />}
    </div>
  );
}

export default App;
