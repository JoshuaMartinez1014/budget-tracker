import { useState } from "react";

function BudgetImport() {
  // State for income and expense input fields
  const [expenses, setExpenses] = useState([{ name: "", amount: "" }]);
  const [incomes, setIncomes] = useState([{ name: "", amount: "" }]);

  // Alert visibility state
  const [showIncomeAlert, setShowIncomeAlert] = useState(false);
  const [showExpenseAlert, setShowExpenseAlert] = useState(false);

  // Handler to add income fields (max 5)
  const handleAddIncome = () => {
    if (incomes.length < 5) {
      setIncomes([...incomes, { name: "", amount: "" }]);
    } else {
      setShowIncomeAlert(true);
      setTimeout(() => setShowIncomeAlert(false), 4000); // Auto-hide after 4s
    }
  };

  // Handler to add expense fields (max 5)
  const handleAddExpense = () => {
    if (expenses.length < 5) {
      setExpenses([...expenses, { name: "", amount: "" }]);
    } else {
      setShowExpenseAlert(true);
      setTimeout(() => setShowExpenseAlert(false), 4000); // Auto-hide after 4s
    }
  };

  // Dismiss alert manually
  const handleExitIncomeAlert = () => setShowIncomeAlert(false);
  const handleExitExpenseAlert = () => setShowExpenseAlert(false);

  return (
    <>
      {/* Page Heading */}
      <h1 className="text-2xl mb-8 font-semibold">
        Welcome, please complete your first budget!
      </h1>

      <form className="w-full max-w-4xl mx-auto p-4">
        <div className="flex gap-6">
          {/* ====================== LEFT COLUMN ====================== */}
          <div className="w-1/2">
            {/* Budget Name */}
            <div>
              <label
                htmlFor="budget_name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Budget Name
              </label>
              <input
                type="text"
                id="budget_name"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                placeholder="e.g. January Budget"
                required
              />
            </div>

            {/* Income Fields (Dynamic) */}
            <div className="mt-4">
              {incomes.map((income, i) => (
                <div key={i} className="flex gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Income Name"
                    value={income.name}
                    className="w-1/2 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => {
                      const updated = [...incomes];
                      updated[i].name = e.target.value;
                      setIncomes(updated);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={income.amount}
                    className="w-1/2 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => {
                      const updated = [...incomes];
                      updated[i].amount = e.target.value;
                      setIncomes(updated);
                    }}
                  />
                </div>
              ))}

              {/* Add Income Button */}
              <button
                type="button"
                onClick={handleAddIncome}
                className="mt-4 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg block w-full p-1 dark:bg-gray-700 dark:border-gray-600 font-medium hover:bg-secondary"
              >
                Add Income
              </button>

              {/* Income Limit Alert */}
              {showIncomeAlert && (
                <div className="mt-4 flex items-center p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
                  <svg
                    className="shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div className="ms-3 text-sm font-medium">
                    You may only add 5 Incomes!
                  </div>
                  <button
                    type="button"
                    onClick={handleExitIncomeAlert}
                    className="ms-auto bg-yellow-50 text-yellow-500 rounded-lg p-1.5 hover:bg-yellow-200 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ====================== RIGHT COLUMN ====================== */}
          <div className="w-1/2">
            {/* Time Frame */}
            <div>
              <label
                htmlFor="timeFrame"
                className="block mb-2 text-sm font-medium text-white"
              >
                Time Frame
              </label>
              <input
                type="text"
                id="timeFrame"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="e.g. Weekly / Monthly"
                required
              />
            </div>

            {/* Expense Fields (Dynamic) */}
            <div className="mt-4">
              {expenses.map((expense, i) => (
                <div key={i} className="flex gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Expense Name"
                    value={expense.name}
                    className="w-1/2 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => {
                      const updated = [...expenses];
                      updated[i].name = e.target.value;
                      setExpenses(updated);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={expense.amount}
                    className="w-1/2 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => {
                      const updated = [...expenses];
                      updated[i].amount = e.target.value;
                      setExpenses(updated);
                    }}
                  />
                </div>
              ))}

              {/* Add Expense Button */}
              <button
                type="button"
                onClick={handleAddExpense}
                className="mt-4 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg block w-full p-1 dark:bg-gray-700 dark:border-gray-600 font-medium hover:bg-secondary"
              >
                Add Expense
              </button>

              {/* Expense Limit Alert */}
              {showExpenseAlert && (
                <div className="mt-4 flex items-center p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
                  <svg
                    className="shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div className="ms-3 text-sm font-medium">
                    You may only add 5 Expenses!
                  </div>
                  <button
                    type="button"
                    onClick={handleExitExpenseAlert}
                    className="ms-auto bg-yellow-50 text-yellow-500 rounded-lg p-1.5 hover:bg-yellow-200 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 text-black bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default BudgetImport;
