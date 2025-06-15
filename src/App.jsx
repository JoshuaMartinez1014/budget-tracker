import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import Budgets from "./Budgets.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <div className="bg-bgprimary text-white min-h-screen">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <div>
          {activeTab === "home" && <Home />}
          {activeTab === "budgets" && <Budgets />}
        </div>
      </div>
    </>
  );
}

export default App;
