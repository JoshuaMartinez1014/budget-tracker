import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import Budgets from "./Budgets.jsx";
import BudgetForm from "./components/BudgetForm.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const storedBudgetInfo = localStorage.getItem("budgetLS");
    const parsedBudgetInfo = storedBudgetInfo
      ? JSON.parse(storedBudgetInfo)
      : null;
    if (parsedBudgetInfo == null) {
      setActiveTab("budgetForm");
    }
  });

  const handleBudgetSubmit = (data) => {
    localStorage.setItem("budgetLS", JSON.stringify(data));
    setActivetab("home"); // Hide first form after submit
  };

  const consoleLogTab = () => {
    console.log(activeTab);
  };

  return (
    <>
      <div className="bg-bgprimary text-white min-h-screen">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex justify-center">
          <div>
            {activeTab === "budgetForm" && (
              <BudgetForm onSubmit={(handleBudgetSubmit, setActiveTab)} />
            )}
            {activeTab === "home" && <Home />}
            {activeTab === "budgets" && <Budgets />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
